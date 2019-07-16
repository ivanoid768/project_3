<template>
  <div class="wrapper_main container">
    <Navigation></Navigation>
    <div class="page cabinet">
      <h1>Личный кабинет</h1>
      <div class="plate">
        <div class="plate-header">
        </div>
        <div class="form-group">
          <div class="form-row alert-warning">
            <div v-if="errorMessage" class="col-form-lable">{{errorMessage}}</div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col-md-3 col-form-label">
              <p class="url-label text-left">
                Имя пользователья:
              </p>
            </div>
            <div class="col-md-7  col-form-label">
              <input :disabled="!allowChangeName" type="text" @blur="handleInput"
                v-bind:value="userName" class="controll field-text" name="userName" />
            </div>
            <div class="col-md-2 col-form-label">
              <button id="userName" class="controll btn " @click="saveChangeHandle"
                v-if="allowChangeName">Сохранить</button>
              <button class="controll btn " @click="allowChangeNameHandle" v-else>Изменить</button>
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
              <input :disabled="!allowChangeEmail" type="text" @blur="handleInput"
                v-bind:value="email" class="controll field-text" name="email" />
            </div>
            <div class="col-md-2 col-form-label">
              <button id="email" class="controll btn " @click="saveChangeHandle"
                v-if="allowChangeEmail">Сохранить</button>
              <button class="controll btn " @click="allowChangeEmailHandle" v-else>Изменить</button>
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
        allowChangeName: false,
        allowChangeEmail: false,
        allowChangeKey: false,
        apiKeyData: '',
        userNameData: '',
        emailData: '',
        errorMessage: ''
      }
    },
    computed: {
      apiKey() {
        return this.$store.state.settings.apiKey
      },
      userName() {
        return this.$store.state.auth.user.username
      },
      email() {
        return this.$store.state.auth.user.email
      },

    },
    methods: {
      allowChangeNameHandle() {
        this.allowChangeName = true;
      },
      allowChangeEmailHandle() {
        this.allowChangeEmail = true;
      },
      allowChangeKeyHandle() {
        this.allowChangeKey = true;
      },
      handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        this[name + 'Data'] = value;
      },
      saveChangeHandle(e) {
        let btnId = e.target.id;
        console.log(e.target.id);

        if (btnId == 'apikey') {
          this.allowChangeKey = false
          this.$store.commit('settings/setApiKey', this.apiKey)
        } else if (btnId == 'userName') {
          console.log(this.userNameData);

          this.updateUser({ userName: this.userNameData })
            .finally(() => {
              this.allowChangeName = false
            })

        } else if (btnId == 'email') {
          console.log(this.emailData);

          this.updateUser({ email: this.emailData })
            .finally(() => {
              this.allowChangeEmail = false
            })

        }

      },
      logOut() {
        this.$auth.$storage.setState('loggedIn', false);
      },
      updateUser(newUser) {
        return this.$axios.post('api/auth/user', newUser)
          .then(resp => {
            console.log(resp.data, resp.status);
            this.$auth.fetchUser()
            this.errorMessage = null;
          })
          .catch(err => {
            console.log(console.log(Object.keys(err)), err.response, err.toJSON(), err.config);
            this.errorMessage = err.response.data.message;
          })
      },

    }

  }</script>
