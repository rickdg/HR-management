<template>
  <v-layout>
    <div class="row">
      <div class="col-md-12">
        <router-link
          :to="{ name: 'account.create' }"
          class="btn btn-success pull-right offset-md-10 col-md-2"
        >
          Add New Account
        </router-link>
      </div>
    </div>

    <br />

    <v-card contextual-style="info">
      <span slot="header">
        My Accounts
      </span>
      <div slot="body">
        <div
          class="row"
          v-if="!isLoading"
        >
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>
                  Country
                </th>
                <th>
                  Site
                </th>
                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Status
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr v-for="(account, index) in $store.state.account.accounts">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ account.country_name }}
                </td>
                <td>
                  {{ account.site_name }}
                </td>
                <td>
                  {{ account.account_first_name + ' ' + account.account_last_name }}
                </td>
                <td>
                  {{ account.account_email }}
                </td>
                <td>
                  <strong v-if="account.account_status">
                    Active
                  </strong>
                  <strong v-if="!account.account_status">
                    Not Active
                  </strong>
                </td>
                <th>
                  <router-link
                    :to="{name: 'account.update', params: {account_id: account.id}}"
                    class="btn btn-sm btn-warning text-white"
                  >
                    Edit
                  </router-link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="loading-parent">
          <loading
            :active.sync="isLoading"
            :can-cancel=false
            :is-full-page=true />
        </div>
      </div><!-- end of body -->

      <div slot="footer">
        Made by abc
      </div>
    </v-card>
  </v-layout>
</template>

<script>
/* ============
 * Account Index Page
 * ============
 *
 * Page where the user can view the accounts information.
 */

  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';
  import VLayout from '@/layouts/Default.vue';
  import VCard from '@/components/Card.vue';
  import store from '@/store';

  export default {
    /**
     * The name of the page.
     */
    name: 'AccountIndex',

    /**
     * The components that the page can use.
     */
    components: {
      Loading,
      VLayout,
      VCard,
    },

    beforeRouteEnter(to, from, next) {
      store.dispatch('account/index')
        .then((response) => {
          if (response.success === true) {
            store.commit('account/INDEX', response.accounts);
            next();
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

    data() {
      return {
        isLoading: false,
      };
    },

    mounted() {
    },
  };
</script>
