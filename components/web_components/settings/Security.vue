<template>
  <div class="plate">
    <div v-if="errorData" class="alert-warning">{{errorData}}</div>
    <div class="plate_title">
      <h3>
        Безопастность
        <span class="el_question">
          <i class="fa fa-question"></i>
          <span class="el_question_body">
            ?
          </span>
          <span class="tooltip">
          </span>
        </span>
      </h3>
    </div>
    <div class="plate_body">
      <div class="option form-group">
        <div class="form-row">
          <div class="col col-form-label">
            <span class="option-label">Двухфакторная аутентификация</span>
          </div>
          <div @click="updateDoubleFactorAuth"  class="col col-form-label">
            <label class="controll switcher" :class="{active: switchOn}">
              <span id="updateDoubleFactorAuthOn" class="switcher-label" :class="{active: switchOn}" >{{switchOn ? 'ВКЛ' : 'ВЫКЛ'}}</span>
              <!-- <span v-else @click="updateDoubleFactorAuth" id="updateDoubleFactorAuthOff" class="switcher-label">ВЫКЛ</span> -->
              <!-- <input v-model="doubleFactorAuthData" type="hidden" value="false" /> -->
              <span class="toggle"></span>
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div class="option form-group">
        <div class="form-sub-header">Настройки аккаунта</div>
        <div class="form-row">
          <div class="col col-form-label">
            <input type="password" v-model="newPassData" class="controll field-text full-width col-mrg" placeholder="Новый пароль" />
            <input type="password" v-model="confirmPassData" class="controll field-text full-width col-mrg" placeholder="Подтвердить" />
            <button @click="setNewPassword" class="controll btn active">Сменить пароль</button>
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
        doubleFactorAuthData: undefined,
        newPassData: undefined,
        confirmPassData: undefined,
        errorData: '',
        switchOn: undefined
      }
    },
    computed: {
      ...mapState('settings', ['doubleFactorAuth'])
    },
    methods: {
      updateDoubleFactorAuth(e) {
        // let id = e.target.id;
        // let doubleFactorAuthData = id == 'updateDoubleFactorAuthOn' ? false : true;
        this.switchOn = !this.switchOn
        this.$store.commit('settings/setSettingParam', {
          name: 'doubleFactorAuth',
          value: this.switchOn
        })
        this.$store.dispatch('settings/persistSettings')
      },
      setNewPassword() {
        if (this.newPassData != this.confirmPassData || this.newPassData.length < 8) {
          this.errorData = 'Новый пароль и подтверждение пароля должны совпадать, пароль должен быть длинной 8 символов минимум'
          return false;
        }

        this.$axios.post('/api/auth/user', {
          password: this.newPassData
        })
          .then(resp => {
            this.errorData = null;

          })

      }
    },
    watch:{
      doubleFactorAuth: function(newVal){
        this.switchOn = newVal
      }
    },
    created: function () {
      this.switchOn = this.doubleFactorAuth;

    }
  }

</script>

<style lang="scss" scoped>
// .toggle{
//   right: 67px;
//   transition: right 0.5s;
// }

// .switcher-label{
//       color: darkseagreen;
// }

// .control.switcher.active{
//   background-color: azure;
// }

</style>
