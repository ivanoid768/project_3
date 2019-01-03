<template> 
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="container">

      <h1>
        Личный кабинет
      </h1>
      <div class="page cabinet">
        <div class="plate">
          <div class="plate-header">
            <div class="form-group">
              <div class="form-row">
                <div class="col-md-4 col-form-label">
                  <p class="url-label text-left">
                    Ключ текущего пользователья 
                  </p>
                </div>
                <div class="col-md-8  col-form-label">
                  <input type="text" @oninput="handleInput" v-bind:value="apiKey" class="controll field-text" name="apiKey" />
                </div>
                <div class="col-md-5 col-form-label">
                  <button class="controll btn " @click="allowChangeHandle" v-if="allowChange">Сохранить</button>
                  <button class="controll btn " @click="saveChangeHandle" v-else>Изменить</button>
                </div>
              </div>
            </div>
             
            <br />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>import Navigation from '~/components/web_components/header_components/Navigation.vue'

  export default {
    components: { Navigation },
    data: function () {
      return {
        allowChange: false
      }
    },
    computed: {
      apiKey(){
       return this.$store.state.settings.apiKey
      }
    },
    methods: {
      allowChangeHandle() {
        this.allowChange = true;
      },
      handleInput(e) {
        let value = e.target.value;
        this.apiKey = value;       
      },
      saveChangeHandle() {
        this.allowChange = false
        this.$store.commit('settings/setApiKey',this.apiKey)
      }

    }

  }</script>
