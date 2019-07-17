<template>
  <div class="plate">
    <div class="plate_title">
      <h3>Настройки выплат</h3>
    </div>
    <div class="plate_body">
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-4 col-form-label">
            <span class="url-label">Схема выплат</span>
          </div>
          <div class="col-md-4  col-form-label">
            <div class="controll option-selector">
              <input type="radio" id="PPS" name="paymentType" value="PPS" v-model="paymentTypeData" style='visibility:hidden; display:none;' />
              <label for="PPS" class="option" :style="PPSCheckedStyle"> PPS</label>

              <input type="radio" id="PPLNS" name="paymentType" value="PPLNS" v-model="paymentTypeData" style='visibility:hidden; display:none;' />
              <label for="PPLNS" class="option" :style="PPLNSCheckedStyle"> PPLNS</label>
            </div>
          </div>
          <div class="col-md-4 col-form-label">
            <button @click.prevent="updatePaymentType" class="controll btn active">Обновить</button>
          </div>
        </div>
      </div>
      <hr />
      <div class="form-group">
        <div class="form-row">
          <div class="col-md-3 col-form-label">
            <span class="url-label">Порог выплат <br />
              <i class="label-measure" style="font-style:normal">(>= 0.01 LTC)</i></span>
          </div>
          <div class="col-md-5  col-form-label">
            <div class="controll  number-selector">
              <input type="number" step="0.01" v-model="paymentLimitData" />
              <span class="arrow-top"></span>
              <span class="arrow-bottom"></span>
            </div>
          </div>
          <div class="col-md-4 col-form-label">
            <button @click.prevent="setPaymentLimit" class="controll btn active">Изменить</button>
          </div>
        </div>
      </div>
      <hr />
      <div class="form-group">
        <div class="form-row">
          <div class="col col-form-label">
            <span class="url-label col-mrg">Адрес выплат</span>
            <input type="text" placeholder="Адрес выплат" v-model="paymentAddressData" class="controll field-text full-width col-mrg"
              name="paymentAddress" />
            <button @click.prevent="setPaymentAddress" class="controll btn active">Обновить</button>
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
        paymentTypeData: '',
        paymentLimitData: '',
        paymentAddressData: '',
      }
    },
    computed: {
      ...mapState('settings', ['paymentType', 'paymentLimit', 'paymentAddress']),
      PPSCheckedStyle() {
        console.log('PPSCheckedStyle', this.paymentType);

        return this.paymentTypeData == 'PPS' ? { backgroundColor: 'white' } : {};
      },
      PPLNSCheckedStyle() {
        console.log('PPSCheckedStyle', this.paymentType);
        return this.paymentTypeData == 'PPLNS' ? { backgroundColor: 'white' } : {};
      }
    },
    methods: {
      setSettingValue: function (e) {
        console.log(e.currentTarget);

        let name = e.currentTarget.dataset.name;
        let value = e.currentTarget.dataset.value;
        this.$store.commit(`settings/setSettingParam`, { name: name, value: value })
      },
      updatePaymentType() {
        this.$store.commit('settings/setSettingParam', {
          name: 'paymentType',
          value: this.paymentTypeData
        })
        this.$store.dispatch('settings/persistSettings')
      },
      setPaymentLimit() {
        this.$store.commit('settings/setPaymentLimit', {
          currency: this.paymentLimit[0].currency,
          value: this.paymentLimitData
        })
        this.$store.dispatch('settings/persistSettings')
      },
      setPaymentAddress() {
        this.$axios.post('/api/auth/user', {
          BTCAddress: this.paymentAddressData
        })
          .then(resp => {
            this.$auth.fetchUser().then(() => {
              this.paymentAddressData = this.$store.state.auth.user.BTCAddress;
            })

          })
      },
      setVModelFromState() {
        console.log(this.paymentLimit[0].value)
        this.paymentTypeData = this.paymentType;
        this.paymentLimitData = parseFloat(this.paymentLimit[0].value);
        this.paymentAddressData = this.$store.state.auth.user.BTCAddress;
      }
    },
    updated: function () {
      this.setVModelFromState()

    },
    created() {
      this.setVModelFromState()
    }
  }
</script>

<style lang="scss" scoped>
  input[type="radio"]:checked + label {
    background-color: white;
  }
</style>
