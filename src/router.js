import Vue from 'vue'
import Router from 'vue-router'
import OidcCallback from './views/OidcCallback.vue'
import OidcCallbackError from './views/OidcCallbackError.vue'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/oidc-callback', // Needs to match redirect_uri in you oidcSettings
      name: 'oidcCallback',
      component: OidcCallback,
      meta: {
        isOidcCallback: true,
        isPublic: true
      }
    },
    {
      path: '/oidc-callback-error', // Needs to match redirect_uri in you oidcSettings
      name: 'oidcCallbackError',
      component: OidcCallbackError,
      meta: {
        isPublic: true
      }
    }
  ]
})

router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'))

export default router
