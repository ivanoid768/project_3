<template>
  <div сlass="auth">
    <div class="authorisation">
      <form class="login" @submit.prevent="registration">
        <div class="logo-contrast">
          <Logo />
        </div>
        <h1>ЗАРЕГИСТРИРОВАТЬСЯ</h1>
        <br />
        <div class="form-group">
          <input required v-model="username" type="text" placeholder="Имя пользователя*" />
        </div>
        <div class="form-group">
          <input required v-model="email" type="text" placeholder="Е-мэйл*" />
        </div>
        <div class="form-group">
          <input required v-model="password" type="password" placeholder="Пароль*" />
        </div>
        <div class="form-group">
          <input required v-model="confirmPass" type="password"
            placeholder="Подтверждение пароля*" />
        </div>
        <div class="form-group">
          <input required v-model="BTCAddress" type="text" placeholder="BTC адресс*" />
        </div>
        <hr />
        <button type="submit" class="btn-enter">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";
  export default {
    auth: false,
    components: { Logo },
    data: function () {
      return {
        username: "",
        email: "",
        password: "",
        confirmPass: "",
        BTCAddress: ""
      }
    },
    computed: {

    },
    methods: {
      registration: function () {
        if (this.password != this.confirmPass) {
          this.$toast.error('Пароль и подтверждение пароля должны быть одинаковы!')
          return false;
        }

        this.$axios.post('/auth/registration', {
          username: this.username,
          email: this.email,
          password: this.password,
          BTCAddress: this.BTCAddress
        })
          .then(console.log('Регистрация прошла успешно!'))
          .then(() => {
            this.$router.push('/login')
          })

        // this.$auth.loginWith('local', {
        //   data: {
        //     username: this.username,
        //     email: this.email,
        //     password: this.password,
        //     BTCAddress: this.BTCAddress
        //   }
        // })
        //   .then(() => this.$toast.success('Logged In!'))
        //   .then(() => {
        //     this.$store.commit("settings/setUserName", this.username);
        //     this.$auth.$storage.setState('loggedIn', true)
        //     this.$router.push('/login')
        //   })

      }
    }
  }


</script>

<style>
  h2 {
    text-transform: uppercase;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .authorisation input {
    height: 41px;
    max-width: 100%;
    width: 100%;
    padding: 0 12px;
    font: 14px/1.36 "proxima_novaregular", Arial, Helvetica, sans-serif;
    border-radius: 2px;
    border: 1px solid #e8e8ee;
    background: #f4f4f9;
    color: #404552;
    -webkit-appearance: none;
  }
  .login {
    width: 300px;
    margin: 20px 0;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .authorisation {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-enter {
    font: 14px/1.12 "proxima_novabold", Arial, Helvetica, sans-serif;
    display: flex;
    flex: 1 1;
    width: 100%;
    margin: 0px;
    height: 43px;
    align-items: center;
    justify-content: center;
    background: #4b37a1;
    border: 1px solid #4b37a1;
    color: #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 2px;
    padding: 0 10px;
    cursor: pointer;
  }
  .logo-contrast {
    display: flex;
    align-items: center;
    justify-content: center;
    font: 28px/1.18 "proxima_novabold", Arial, Helvetica, sans-serif;
    color: #202020;
  }
  .logo-contrast img {
    height: 70px;
    width: 150px;
    max-width: 1000px;
    margin-bottom: 21px;
  }
</style>
