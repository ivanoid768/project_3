<template>
  
  <div class="wrapper_main container">
  <Navigation></Navigation>
  <div class="main">
    <div class="block">
      <div class="row">
          <div class="col-md-4">
            <div class="plate">
              
            </div>  
          </div>
          <div class="col-md-4">
            <div class="plate">
              
            </div>  
          </div>
          <div class="col-md-4">
            <div class="plate">
              
            </div>  
          </div>
      </div>
    </div>
      <h1 class="title">
        Sigmapool
      </h1>  
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Navigation from '~/components/web_components/header_components/Navigation.vue'
  
  export default {
  components: {   Navigation  }
  }
</script>

<style>
 
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
