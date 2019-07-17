<template>
  <div id="block-statistics" class="block">
    <div class="block-title">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="block-title-slot">
              <h3 class="block-title">История действий</h3>
            </div>
          </div>
          <div class="col-md-6">
            <div class="block-title-slot">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="plate">
          <div class="plate_title"></div>
          <div class="plate_body max-width">
            <Table_history_notify :data="userActions" :page="page" />
            <Pagination :selectedPageProp="page" :setParentMethodPage="selectPage" :setNextPage="nextPage" :setLastPage="lastPage"
              :pagesNumber="pagesCounter" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Table_history_notify from '~/components/web_components/settings/Table_history_notify.vue';
  import Pagination from '~/components/web_components/edit_components/pagination.vue';

  export default {
    components: { Table_history_notify, Pagination },
    data() {
      return {
        userActions: [],
        page: 1,
        pagesCounter: 1

      }
    },
    methods: {
      selectPage(page) {
        this.getUserLog(page)
          .then(() => this.page = page)

      },
      nextPage() {
        let page = this.page + 1;
        if (page > this.pagesCounter)
          return false;

        this.getUserLog(page)
          .then(() => this.page = page)

      },
      lastPage() {
        this.getUserLog(this.pagesCounter)
          .then(() => this.page = this.pagesCounter)

      },
      getUserLog(page = 1) {
        return this.$axios.get('/api/auth/user/history', {
          params: {
            page: page
          }
        })
          .then(resp => {
            this.userActions = resp.data.log;
            this.pagesCounter = resp.data.pagesCounter;
          })
      }
    },
    created() {
      this.getUserLog()

    }

  }

</script>
