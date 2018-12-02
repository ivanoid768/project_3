<template>
  <div class="plate pg-plate">
    <div class="pagination-filter">
      
    </div>
    <ul class="pagination ">
      <li class="pagination-item active"><button class="pg-btn">1</button></li>
      <li class="pagination-item "><button class="pg-btn">2</button></li>
      <li class="pagination-item "><button class="pg-btn">3</button></li>
    </ul>
    <button class="pagination-next">Даллее</button>
    <button class="pagination-last">Даллее</button>
  </div>
</template>

<script>

  export default{
  props:{
    setParentMethodPage:{
        default: ()=>{}
    },
  },
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
