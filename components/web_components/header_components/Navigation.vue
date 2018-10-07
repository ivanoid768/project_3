<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top"  id ="navigation_main"  >
    <div class="container">
      <Logo />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar nav">
          <li class="nav-item"> 
              <DropdownCurrency />  
          </li>
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
            <nuxt-link class="nav-link " to="/help">Помошь</nuxt-link>
          </li>
        </ul>
        </div>
      </div>
</nav>  
</template>


<script>
  import Logo from "../../Logo.vue";
  import DropdownCurrency from "./dropdown_currency.vue";

  export default {
      components: {   Logo, DropdownCurrency   }
  }

</script>

