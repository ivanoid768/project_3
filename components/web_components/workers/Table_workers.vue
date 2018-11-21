<template>
  <div class="table_workers">
  <div class="block_table_filter">
      <div class="row">
        <div class="col">
          <div class="col">
            <div class="filter" id="item-pagesize">
              <button><span class="filter-button-label">Онлайн</span>  <span class="filter-indicator">0</span></button>
              <button><span class="filter-button-label">Оффлайн</span>  <span class="filter-indicator">0</span></button>
              <button><span class="filter-button-label">Общее</span>  <span class="filter-indicator">0</span></button>
              <div class="filter-text">
                Отображаются только <b>online</b> воркеры
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="filter" id="item-pagesize">
            <span class="filter-label">
              Макс на странице:
            </span>

            <div class="dropdown-block">
              <span class="dropdown-active"></span>
              <ul class="dropdown-list">
                <li><button> 25</button></li>
                <li><button> 50 </button></li>
                <li><button> 100</button></li> 
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="filter" id="item-name">
              <span class="filter-label">
                Сортировать по :
              </span>
             
               <div class="dropdown-block">
                 <span class="dropdown-active"></span>
                 <ul class="dropdown-list">
                   <li><button> Имя</button></li>
                   <li><button> Последняя шара</button></li>
                   <li><button> Текущий хешрейт</button></li>
                   <li><button> Средний хешрейт за час</button></li>
                   <li><button> Средний хешрейт за 24ч</button></li>
                 </ul>
               </div> 
          </div>
        </div>
      </div>
  </div>
  <table class="table_data workers">
    <tr>
      <th v-for="head in headers">{{head}}</th> 
    </tr>
    <tr v-for="item in data">
      <td>{{item.name}}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
    </div>
</template> 

<script>
  export default {
    props: {
      data: {
        default: function () { 
          return [
            {}, {}, {}, {}, {}, {}, {}, {}, {}
          ]
        }
      },
      headers: {
        default: function () {
        return  [
        "Имя",
        "Последняя шара",
        "Текущий хешрейт", 
        "Средний хешрейт за час", 
        "Средний хешрейт за 24 часа" 
          ]
        }
      },
      page: {
        default: 1
      },
      pageSize:{
        default: 20
      }
    },
    data:function (){
      return {
        
      }
    },

  }
</script>
