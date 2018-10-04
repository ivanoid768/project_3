<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top"  id ="navigation_main"  >
    <div class="container">
      <Logo/>
      <ul class="navbar nav">
        <li class="nav-item">
          <div class="btn-group dropup">
            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <a>BTC</a>
            </button>
            <div class="dropdown-menu">
              <a>BTC</a>
              <a>LTC</a>
              <a>DASH</a>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Дашборд</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Воркеры</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Начисления</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Статистика</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Настройки</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Помошь</a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
  import Logo from "../../Logo.vue";

  export default {
      components: {   Logo  }
  }

</script>

