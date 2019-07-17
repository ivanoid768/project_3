<template>
  <div class="plate pg-plate">
    <div class="pagination-filter">

    </div>
    <ul class="pagination ">
      <li v-for="page in pages" :key="page" class="pagination-item ">
        <button @click.prevent="setPage" v-if="page == selectedPageProp" class="pg-btn active">{{page}}</button>
        <button @click.prevent="setPage" v-else class="pg-btn">{{page}}</button>
      </li>
    </ul>
    <button @click.prevent="setNextPage" class="pagination-next">Далее</button>
    <button @click.prevent="setLastPage" class="pagination-last">Последняя</button>
  </div>
</template>

<script>
  import { create } from 'domain';

  export default {
    props: {
      setParentMethodPage: {
        default: () => { }
      },
      setNextPage: {
        default: () => { }
      },
      setLastPage: {
        default: () => { }
      },
      selectedPageProp: {
        default: 1
      },
      pagesNumber: {
        default: 1
      }
    },
    data: () => {
      return {
        selectedPageSize: 20,
        selectedPage: 1,
        pages: []
      }
    },
    methods: {
      setPage(e) {
        let page = parseInt(e.target.innerHTML)
        if (page && page > 0) {
          this.setParentMethodPage(page)
        }

      }
    },
    create() {
      let pages = [];
      for (let i = 1; i <= this.pagesNumber; i++) {
        pages.push(i)
      }
      this.pages = pages;
    }
  }
</script>
