<template>
  <v-layout>
    <v-card contextual-style="info">
      <span slot="header">
      </span>

      <div slot="body">
        <div
          class="row"
          v-if="!isLoading"
        >
          <form class="col-12 form">
            <div class="form-group">
              <label>Withdrawn Date</label>
              <datepicker
                format="yyyy-MM-dd"
                class="form-control"
                v-model="earning.withdrawn_date"
                required />
            </div>
            <div class="form-group">
              <label>Cost</label>
              <input
                type="number"
                step="0.01"
                class="form-control"
                v-model="earning.cost"
              />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-1 offset-md-9">
                  <router-link
                    :to="{ name: 'approval.index'}"
                    class="btn btn-danger"
                  >
                    Cancel
                  </router-link>
                </div>
                <div class="col-md-2">
                  <button
                    type="button"
                    class="btn btn-success pull-right"
                    :disabled="earning.cost === null"
                    @click="updateEarning()"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="loading-parent">
          <loading
            :active.sync="isLoading"
            :can-cancel=false
            :is-full-page=true />
        </div>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Approval Earning Update Page
   * ============
   *
   * Page where the user can update earning.
   */
  import Vue from 'vue';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';
  import VLayout from '@/layouts/Default.vue';
  import VCard from '@/components/Card.vue';
  import Datepicker from 'vuejs-datepicker';
  import moment from 'moment';
  import store from '@/store';
  import UserProxy from '@/proxies/UserProxy.js';
  import AccountProxy from '@/proxies/AccountProxy.js';
  import EarningProxy from '@/proxies/EarningProxy.js';

  export default {
    /**
     * The name of the page.
     */
    name: 'ApprovalUpdate',

    /**
     * The components that the page can use.
     */
    components: {
      Loading,
      VLayout,
      VCard,
      Datepicker,
    },
    data() {
      return {
        isLoading: false,
        earning: {
          cost: null,
          status: null,
          account: null,
        },
        earned_by_me: true,
      };
    },
    mounted() {
      this.fetchEarning();
    },
    computed: {
    },
    methods: {
      updateEarning() {
        if (this.earning.withdrawn_date == undefined || this.earning.withdrawn_date == null) {
          this.$notify({
            group: 'notify',
            type: 'error',
            title: 'Error occurred',
            text: 'Withdraw date omitted',
            duration: 3000,
            speed: 1000,
          });

          return;
        }

        this.earning.year = moment(this.earning.withdrawn_date).year();
        this.earning.withdrawn_date = moment(this.earning.withdrawn_date).format('YYYY-MM-DD');

        const earning_id = this.earning['id'];
        delete this.earning['id'];

        const params = {
          id: earning_id,
          data: this.earning
        };

        new EarningProxy()
          .update(params.id, params.data)
          .then((response) => {
            if (response.success === true) {
              Vue.router.push({
                name: 'approval.index',
              });
            } else {
              this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Error occurred',
                text: response.message,
                duration: 3000,
                speed: 1000,
              });
            }
          })
          .catch(() => {
	          this.$notify({
	            group: 'notify',
	            type: 'error',
	            title: 'Error occurred',
	            text: 'Something went wrong',
	            duration: 3000,
	            speed: 1000,
	          });
          });
      },
      fetchEarning() {
        const earning_id = this.$route.params.earning_id;
        this.isLoading = true;
        new EarningProxy().find(earning_id)
          .then((response) => {
            if (response.success == true) {
              this.earning = response.earning;
              this.$notify({
                group: 'notify',
                type: 'success',
                title: 'Success',
                text: response.message,
                duration: 3000,
                speed: 1000,
              });
            } else {
              this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Error occurred',
                text: response.message,
                duration: 3000,
                speed: 1000,
              });
            }
          })
          .catch(() => {
            this.$notify({
	            group: 'notify',
	            type: 'error',
	            title: 'Error occurred',
	            text: 'Something went wrong',
	            duration: 3000,
	            speed: 1000,
	          });
          })
          .finally(() => {
            this.isLoading = false;
          });
      },
    },
  };
</script>
