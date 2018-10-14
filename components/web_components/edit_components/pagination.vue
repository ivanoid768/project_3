<template>
  <div class="plate block_pagination">

  </div>
</template>

<script>

  export default{
  props:{
    setParentMethodPage:{
        default: ()=>{}
    }
  }
  data:()=>{
    return{
      selectedPageSize: 20,
      selectedPage:1
    }
  },
  methods: function(){
    setPage:{
      
    }
  }

  }
</script>
