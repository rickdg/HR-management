<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bd-navbar">
      <router-link
        :to="{ name: 'home.index' }"
        class="navbar-brand"
      >
        Portal
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"/>
      </button>

      <div
        :class="{ show : menuCollapsed}"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav mr-auto">
          <router-link
            :to="{ name: 'home.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Home
            </a>
          </router-link>
          <router-link
            :to="{ name: 'account.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Accounts
            </a>
          </router-link>
          <router-link
            :to="{ name: 'earning.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Earnings
            </a>
          </router-link>
          <router-link
            v-if="$store.state.auth.user.is_boss == true"
            :to="{ name: 'approval.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Approvals
            </a>
          </router-link>
          <router-link
            v-if="$store.state.auth.user.is_boss == true"
            :to="{ name: 'financial_account.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Payment-Email Register
            </a>
          </router-link>
          <router-link
            v-if="$store.state.auth.user.is_boss == true"
            :to="{ name: 'reward.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Reward
            </a>
          </router-link>
          <router-link
            v-if="$store.state.auth.user.is_boss == true"
            :to="{ name: 'report.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Report
            </a>
          </router-link>
          <router-link
            :to="{ name: 'profile.update' }"
            active-class="active"
            class="nav-item"
            tag="li">
            <a class="nav-link">
              Profile
            </a>
          </router-link>
        </ul>
        <span class="navbar-text">
          <a
            class="btn btn-outline-warning"
            href="#"
            @click.prevent="logout"
          >
            <i class="fa fa-sign-out"/>
          </a>
        </span>
      </div>
    </nav>

    <div class="container pt-4 mb-5">
      <div class="row">
        <div class="col col-12">
          <!-- Content will be placed here -->
          <slot/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

import store from '@/store';

export default {
  /**
   * The name of the layout.
   */
  name: 'DefaultLayout',

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      menuCollapsed: false,
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
    /**
     * Will log the user out.
     */
    logout() {
      this.$store.dispatch('auth/logout');
    },

    /**
     * Will toggle the menu.
     */
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    },
  },
};
</script>

<style scoped lang="css">
  .bd-navbar {
    background-color: #563d7c;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1)
  }
</style>
