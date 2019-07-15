<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navigation_main">
    <div class="container">
      <Logo />
      <DropdownCurrency />
      <button class="navbar-toggler" type="button" @click="menuToggle" data-toggle="collapse"
        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" v-bind:class="show ? 'show' : ''"
        id="navbarNavDropdown">
        <ul class="navbar nav">
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/dashboard">Дашборд</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/workers">Воркеры</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/payments">Начисления</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/statistics">Статистика</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/settings">Настройки</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link " to="/help">Помощь</nuxt-link>
          </li>
        </ul>

      </div>
      <div class="block_user">
        <nuxt-link class="nav-link user-cabinet-link" to="/cabinet">
          <i class="user_name icon-user"></i> {{userName}}
        </nuxt-link>
        <div class="quick-panel">
          <div v-if="userName" class="quick-panel-username"> {{userName}} </div>
          <button v-if="userName" class="exit-button" @click="logOut">Выйти</button>
          <nuxt-link to="/login">
            <button v-if="!userName" class="exit-button" @click="logOut">Войти</button>
          </nuxt-link>
        </div>
      </div>
    </div>

  </nav>
</template>


<script>
  import Logo from "../../Logo.vue";
  import DropdownCurrency from "./dropdown_currency.vue";

  export default {
    data: () => {
      return {
        show: false,
        // showUserName: false
      }
    },
    components: { Logo, DropdownCurrency },
    computed: {
      userName() {
        return this.$store.state.auth.loggedIn ? this.$store.state.auth.user.username : null;
      }
    },
    methods: {
      logOut() {
        this.$auth.$storage.setState('loggedIn', false);
        this.$router.push('/logout')
      },
      menuToggle() {
        this.show = !this.show;
      }
    },
  }

</script>

