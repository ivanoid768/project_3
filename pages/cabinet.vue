<template> 
  <div class="wrapper_main container">
    <Navigation></Navigation> 
    <div class="page cabinet">
      <h1>Личный кабинет</h1>
      <div class="plate">
        <div class="plate-header">
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col-md-3 col-form-label">
              <p class="url-label text-left">
                Имя пользователья:
              </p>
            </div>
            <div class="col-md-7  col-form-label">
              <input type="text" @oninput="handleInput" v-bind:value="userName" class="controll field-text" name="userName" />
            </div>
            <div class="col-md-2 col-form-label">
              <button class="controll btn " @click="allowChangeHandle" v-if="allowChange">Сохранить</button>
              <button class="controll btn " @click="saveChangeHandle" v-else>Изменить</button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col-md-3 col-form-label">
              <p class="url-label text-left">
                Почта:
              </p>
            </div>
            <div class="col-md-7  col-form-label">
              <input type="text" @oninput="handleInput" v-bind:value="userName" class="controll field-text" name="userName" />
            </div>
            <div class="col-md-2 col-form-label">
              <button class="controll btn " @click="allowChangeHandle" v-if="allowChange">Сохранить</button>
              <button class="controll btn " @click="saveChangeHandle" v-else>Изменить</button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col-md-3 col-form-label">
              <p class="url-label text-left">
                Ключ текущего пользователья:
              </p>
            </div>
            <div class="col-md-7  col-form-label">
              <input type="text" @oninput="handleInput" v-bind:value="apiKey" class="controll field-text" name="apiKey" />
            </div>
            <div class="col-md-2 col-form-label">
              <button class="controll btn " @click="allowChangeHandle" v-if="allowChange">Сохранить</button>
              <button class="controll btn " @click="saveChangeHandle" v-else>Изменить</button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col-md-3 col-form-label">
              <br />
              <br /> 
              <button class="controll btn " @click="logOut">Выйти</button>
             
          </div>
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
      },
      userName() {
        return this.$store.state.settings.userName
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
      },
      logOut() {
        this.$auth.$storage.setState('loggedIn', false);
      }


    }

  }</script>
