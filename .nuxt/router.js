import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5786d39b = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _f0a90270 = () => interopDefault(import('../pages/cv.vue' /* webpackChunkName: "pages/cv" */))
const _455d587f = () => interopDefault(import('../pages/exhibitions.vue' /* webpackChunkName: "pages/exhibitions" */))
const _7313b286 = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _54490c0d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _5786d39b,
    name: "contact"
  }, {
    path: "/cv",
    component: _f0a90270,
    name: "cv"
  }, {
    path: "/exhibitions",
    component: _455d587f,
    name: "exhibitions"
  }, {
    path: "/works",
    component: _7313b286,
    name: "works"
  }, {
    path: "/",
    component: _54490c0d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
