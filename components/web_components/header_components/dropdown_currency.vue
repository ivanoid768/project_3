<template>
   <div class="btn-group dropdown-currency">
     <button type="button" class="btn btn-light dropdown-toggle " @click="dropToggle">
       <i class="currency-icon " v-bind:class="storeCurrency"></i>  {{storeCurrency}}
     </button>
  <div class="dropdown-menu" v-if="showDrop">
    <button class="dropdown-btn" @click="selectCurrency" data-currency="BTC"><i class="currency-icon btc"></i>BTC</button>
    <button class="dropdown-btn" @click="selectCurrency" data-currency="LTC" ><i class="currency-icon ltc"></i>LTC</button>
    <button class="dropdown-btn" @click="selectCurrency" data-currency="DASH"><i class="currency-icon dash"></i>DASH</button>
  </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { mapState } from 'vuex';
  export default {
    props: ["selected_currency", "currencySelect", "currency_list"],
    data: function () {
      return (
        {
          //currencyIcon: "btc",
          currency: "BTC",
          showDrop: false,
        }
      )
    },
    computed: {
      ...mapState({
        storeCurrency() { return this.$store.state.settings.currency },
        currencyIcon() { return this.$store.state.settings.currency }
      }) 
    },
    methods: {
      
      selectCurrency: function (e) {
        let currency = e.currentTarget.dataset.currency;
        this.currency = currency;
        //this.currencyIcon = currency.toLowerCase();
        this.showDrop = false;
        this.$store.commit('settings/setCurrency', currency)
      },
      dropToggle: function () {
        this.showDrop = !this.showDrop;
      },
      ...mapMutations({
        settings: 'settings/setCurrency'
      }),
    },
    mounted: function () {
       console.log("!!!!===", this.$store)
    }
    
  }

</script>
