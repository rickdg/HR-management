/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/Index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account Index
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/views/Account/Index.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Account Create
  {
    path: '/account/create',
    name: 'account.create',
    component: () => import('@/views/Account/Create.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Account Update
  {
    path: '/account/:account_id/update',
    name: 'account.update',
    component: () => import('@/views/Account/Update.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Client Index
  {
    path: '/client',
    name: 'client.index',
    component: () => import('@/views/Client/Index.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Client Create
  {
    path: '/client/create',
    name: 'client.create',
    component: () => import('@/views/Client/Create.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Client Update
  {
    path: '/client/:client_id/update',
    name: 'client.update',
    component: () => import('@/views/Client/Update.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Project Index
  {
    path: '/project',
    name: 'project.index',
    component: () => import('@/views/Project/Index.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Project Create
  {
    path: '/project/create',
    name: 'project.create',
    component: () => import('@/views/Project/Create.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Project Update
  {
    path: '/project/:project_id/update',
    name: 'project.update',
    component: () => import('@/views/Project/Update.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Earning
  {
    path: '/earning',
    name: 'earning.index',
    component: () => import('@/views/Earning/Index.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/views/Login/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: false,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/views/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: false,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];