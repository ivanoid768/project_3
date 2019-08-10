<template>
  <div class="plate pg-plate">
    <div class="pagination-filter">

    </div>
    <ul class="pagination ">
      <li v-for="page in pagesArr" :key="page" class="pagination-item ">
        <button @click.prevent="setPage" v-if="page == selectedPage" class="pg-btn active">{{page}}</button>
        <button @click.prevent="setPage" v-else class="pg-btn">{{page}}</button>
      </li>
    </ul>
    <button @click.prevent="setNextPagePrivate" class="pagination-next">Далее</button>
    <button @click.prevent="setLastPagePrivate" class="pagination-last">Последняя</button>
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
        default: null
      },
      setLastPage: {
        default: null
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
    watch: {
      selectedPageProp(newVal, old) {
        this.selectedPage = newVal;
      }
    },
    methods: {
      setPage(e) {
        let page = parseInt(e.target.innerHTML)
        if (page && page > 0) {
          this.setParentMethodPage(page)
        }

      },
      setNextPagePrivate(e) {
        let page = this.selectedPage + 1;

        if (page && page <= this.pagesNumber) {
          this.selectedPage = page;
          this.setNextPage ? this.setNextPage(page) : this.setParentMethodPage(page)
        }

      },
      setLastPagePrivate(e) {
        let page = this.pagesNumber;

        if (page) {
          this.selectedPage = page;
          this.setLastPage ? this.setLastPage(page) : this.setParentMethodPage(page)
        }
      }
    },
    computed: {
      pagesArr() {
        let pages = [];
        for (let i = 1; i <= this.pagesNumber; i++) {
          pages.push(i)
        }
        return pages;
      }
    }
  }
</script>
