<template>
  <div class="plate">
    <div class="plate_title">
      <h3>Уведомления </h3>
    </div>
    <div class="plate_body">
      <div class="option form-group">
        <div class="form-row">
          <div class="col-md-1 col-form-label">
            <label for="wordersDisabled" class="controll checkbox">
              <input :checked="workersTurnOffData" type="checkbox" id="wordersDisabled" v-model="workersTurnOffData" />
              <span class="checkbox-check"> &#10003;</span>
            </label>

          </div>
          <div class="col-md-7 col-form-label">
            <span class="option-label">Уведомлять при отключении воркеров</span>
          </div>
          <div class="col-md-4 col-form-label">
            <button @click.prevent="updateWorkersTurnOff" class="controll btn active">Обновить</button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="plate_title">
      <h3>Анонимность </h3>
    </div>
    <div class="plate_body">
      <div class="option form-group">
        <div class="form-row">
          <div class="col-md-1 col-form-label">
            <label class="controll checkbox">
              <input type="checkbox" v-model="hideUserNameInPoolData" />
              <span class="checkbox-check"> &#10003;</span>
            </label>
          </div>
          <div class="col-md-7 col-form-label">
            <span class="option-label">Прятать имя пользователя в статистике пула</span>
          </div>
          <div class="col-md-4 col-form-label">
            <button @click.prevent="updateHideUserNameInPool" class="controll btn active">Обновить</button>
          </div>
        </div>
      </div>
    </div>
    <div style="display: none;" class="plate_title">
      <h3>
        API-доступ <span class="el_question">
          <i class="fa fa-question"></i>
          <span class="el_question_body">
            ?
          </span>
        </span>
      </h3>
    </div>
    <div style="display: none;" class="plate_body">
      <div class="option form-group  col-mrg">
        <span class="option-label ">API-ключ(нажмите, чтобы скопировать)</span>
        <div class="form-row">
          <div class="col col-form-label col-mrg">
            <input type="text" value="46546546test" class="controll field-text" name="apiKey" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="" class="option-link">Полная JSON API документация</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        workersTurnOffData: undefined,
        hideUserNameInPoolData: undefined,
        workersTurnOffDataInit: undefined
      }
    },
    computed: {
      ...mapState('settings', ['workersTurnOff', 'hideUserNameInPool'])
    },
    methods: {
      updateWorkersTurnOff() {
        this.$store.commit('settings/setSettingParam', {
          name: 'workersTurnOff',
          value: this.workersTurnOffData
        })
        this.$store.dispatch('settings/persistSettings')
      },
      updateHideUserNameInPool() {
        this.$store.commit('settings/setSettingParam', {
          name: 'hideUserNameInPool',
          value: this.hideUserNameInPoolData
        })
        this.$store.dispatch('settings/persistSettings')
      }
    },
    watch: {
      workersTurnOff: function (newVal, oldVal) {
        console.log('watch: ', newVal, oldVal)
        this.workersTurnOffData = newVal;
      },
      hideUserNameInPool: function (newVal, oldVal) {
        console.log('watch: ', newVal, oldVal)
        this.hideUserNameInPoolData = newVal;
      }
    },
    updated: function () {
      // console.log('updated', this.workersTurnOffDataInit, this.workersTurnOff);

      // if (this.workersTurnOff != this.workersTurnOffDataInit) {
      //   this.workersTurnOffData = this.workersTurnOff;
      //   this.hideUserNameInPoolData = this.hideUserNameInPool;

      //   this.workersTurnOffDataInit = this.workersTurnOff
      //   // console.log('updated if', this.workersTurnOffDataInit);

      // }
    },
    created: function () {
      // console.log('created', this.workersTurnOffDataInit);

      this.workersTurnOffData = this.workersTurnOff;
      this.hideUserNameInPoolData = this.hideUserNameInPool;

      // console.log('created', this.workersTurnOffDataInit);
      // console.log('created', this.workersTurnOffData);

    }

  }
</script>

<style lang="scss" scoped>
  input[type="checkbox"]:checked + span.checkbox-check {
    display: inline-block;
    color: #fff;
    background: #ea665c;
  }

  input[type="checkbox"]:checked ~ label {
    background: #ea665c;
  }

  input[type="checkbox"] {
    visibility: hidden;
    display: none;
  }

  label.controll.checkbox {
    display: flex;
  }

  label > span.checkbox-check {
    flex-basis: 100%;
    border-radius: 2px;
  }

  .plate {
    height: 100%;
  }
</style>
