<template>
  <div сlass="auth">
    <div class="authorisation">
      <form class="login" @submit.prevent="registration">
        <div class="logo-contrast">
          <Logo />
        </div>
        <h1>ЗАРЕГИСТРИРОВАТЬСЯ</h1>
        <br />
        <div v-if="formError" class="error">
          {{formError}}
        </div>
        <div class="form-group">
          <label v-if="usernameError" class="error">{{usernameError}}</label>
          <input @blur="checkLogin" required v-model="username" type="text"
            placeholder="Имя пользователя*" />
        </div>
        <div class="form-group">
          <label v-if="emailError" class="error">{{emailError}}</label>
          <input @blur="checkEmail" required v-model="email" type="text" placeholder="Е-мэйл*" />
        </div>
        <div class="form-group">
          <label v-if="passError" class="error">{{passError}}</label>
          <input @blur="checkPassword" required v-model="password" type="password"
            placeholder="Пароль*" />
        </div>
        <div class="form-group">
          <input required v-model="confirmPass" type="password"
            placeholder="Подтверждение пароля*" />
        </div>
        <div class="form-group">
          <label v-if="BTCAddressError" class="error">{{BTCAddressError}}</label>
          <input @blur="checkBTCAddress" required v-model="BTCAddress" type="text"
            placeholder="BTC адресс*" />
        </div>
        <hr />
        <button type="submit" class="btn-enter">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";
  import checkUser from '~/utils/checkUser';

  export default {
    auth: false,
    components: { Logo },
    data: function () {
      return {
        username: "",
        email: "",
        password: "",
        confirmPass: "",
        BTCAddress: "",
        formError: '',
        usernameError: '',
        emailError: '',
        passError: '',
        BTCAddressError: ''
      }
    },
    computed: {

    },
    methods: {
      registration: function () {
        if (this.password != this.confirmPass) {
          this.formError = 'Пароль и подтверждение пароля должны быть одинаковы!';
          return false;
        } else {
          this.formError = null;
        }

        this.$axios.post('/api/auth/registration', {
          username: this.username,
          email: this.email,
          password: this.password,
          BTCAddress: this.BTCAddress
        })
          .then(resp => {
            let data = resp.data;

            if (resp.data.status == 'success') {

              this.$router.push('/login')
            } else if (data.status == 'input_error') {

              let tempErrors = '';
              let i = 1;
              for (let error in data.errors) {
                tempErrors += `${i}.${data.errors[error]}\n`
                i++
              }

              this.formError = tempErrors;

            } else if (data.status == "server_error") {
              this.formError = 'Внутренняя ошибка сервера. Попробуйте зарегистрироваться позже.';
            } else if (data.status == "db_error") {

              let dberr = data.DBError;

              if (dberr.errmsg && dberr.code == '11000') {
                if (dberr.errmsg.indexOf('userName') != -1) {
                  this.usernameError = 'Такое Имя пользователя уже занято, попробуйте другое.'
                } else if (dberr.errmsg.indexOf('email') != -1) {
                  this.emailError = 'Кто то уже зарегистрировался с такие е-мэйлом, попробуйте другой.'
                } else if (dberr.errmsg.indexOf('BTCAddress') != -1) {
                  this.BTCAddressError = 'Такой BTC адресс уже используется, введите другой.'
                }
              }

            }
          })
          .catch(err => {
            this.formError = 'Ошибка сети. Проверьте ваше подключение к интернету.';
          })

      },
      checkLogin() {
        let isLogin = checkUser.isLogin(this.username)

        if (isLogin != true) {
          this.usernameError = isLogin.message;
        } else {
          this.usernameError = null;
        }      },
      checkEmail() {
        let isEmail = checkUser.isEmail(this.email)

        if (isEmail != true) {
          this.emailError = isEmail.message;
        } else {
          this.emailError = null;
        }
      },
      checkPassword() {
        let isPass = checkUser.isPassword(this.password)

        if (isPass != true) {
          this.passError = isPass.message;
        } else {
          this.passError = null;
        }
      },
      checkBTCAddress() {
        let isBTCAddress = checkUser.isBTCAddress(this.BTCAddress)

        if (isBTCAddress != true) {
          this.BTCAddressError = isBTCAddress.message;
        } else {
          this.BTCAddressError = null;
        }
      }

    }
  }


</script>

<style scoped>
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

  form .error {
    color: red;
  }
</style>
