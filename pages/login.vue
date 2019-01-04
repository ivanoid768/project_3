<template>
  <div сlass="auth">
    <div class="authorisation">
      <form class="login" @submit.prevent="login">
        <div class="logo-contrast">
          <Logo />
        </div>
        <h1>ВОЙТИ</h1>
        <div class="form-group">
          <label>Имя пользователя</label>
          <input required v-model="username" type="text" placeholder="Snoopy" />
        </div>
        <div class="form-group">
          <label>Пароль</label>
          <input required v-model="password" type="password" placeholder="Password" />
        </div>
        <div class="form-group">
          <label>API-ключ</label>
          <input required v-model="apiKey" type="text" placeholder="" />
        </div>
        <hr />
        <button type="submit" class="btn-enter">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
  import Logo from "../../sigmapool/components/Logo.vue";
  export default {
    components: { Logo },
    data: function () {
      return {
        username: "",
        password: "",
        apiKey: ""
      }
    },
    computed: {

    },
    methods: {
      login: function () {
        //const { username, password, apiKey } = this
        //this.$store.dispatch(, { username, password, apiKey }).then(() => {
        //  this.$router.push('/')
        //}).catch(() => {
        //  this.$router.push('/')
        //}
        //add USER TO DB//


        this.$router.push('/dashboard')
        
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

  input{
    height: 41px;
    max-width: 100%;
    width: 100%;
    padding: 0 12px;
    font: 14px/1.36 "proxima_novaregular",Arial,Helvetica,sans-serif;
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
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
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
    font: 14px/1.12 "proxima_novabold",Arial,Helvetica,sans-serif;
    display: flex;
    flex: 1 1;
    width:100%;
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
