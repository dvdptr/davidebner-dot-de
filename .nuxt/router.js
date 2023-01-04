import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b0255e2 = () => interopDefault(import('../pages/belebteUnbeweglichkeit.vue' /* webpackChunkName: "pages/belebteUnbeweglichkeit" */))
const _1a820cb7 = () => interopDefault(import('../pages/bruchstuecke.vue' /* webpackChunkName: "pages/bruchstuecke" */))
const _5786d39b = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _f0a90270 = () => interopDefault(import('../pages/cv.vue' /* webpackChunkName: "pages/cv" */))
const _455d587f = () => interopDefault(import('../pages/exhibitions.vue' /* webpackChunkName: "pages/exhibitions" */))
const _af0888a0 = () => interopDefault(import('../pages/modelleOhneMaßstab.vue' /* webpackChunkName: "pages/modelleOhneMaßstab" */))
const _2de28ed6 = () => interopDefault(import('../pages/schwerschwarzschwebend.vue' /* webpackChunkName: "pages/schwerschwarzschwebend" */))
const _3f056f5d = () => interopDefault(import('../pages/schwerweicheluft.vue' /* webpackChunkName: "pages/schwerweicheluft" */))
const _34f61b6e = () => interopDefault(import('../pages/stammklang.vue' /* webpackChunkName: "pages/stammklang" */))
const _6c01827e = () => interopDefault(import('../pages/tuchzeichnungen.vue' /* webpackChunkName: "pages/tuchzeichnungen" */))
const _a00ed992 = () => interopDefault(import('../pages/wellenwaldmitbunker.vue' /* webpackChunkName: "pages/wellenwaldmitbunker" */))
const _3889d0de = () => interopDefault(import('../pages/wetware.vue' /* webpackChunkName: "pages/wetware" */))
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
    path: "/belebteUnbeweglichkeit",
    component: _1b0255e2,
    name: "belebteUnbeweglichkeit"
  }, {
    path: "/bruchstuecke",
    component: _1a820cb7,
    name: "bruchstuecke"
  }, {
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
    path: "/modelleOhneMa%C3%9Fstab",
    component: _af0888a0,
    name: "modelleOhneMaßstab"
  }, {
    path: "/schwerschwarzschwebend",
    component: _2de28ed6,
    name: "schwerschwarzschwebend"
  }, {
    path: "/schwerweicheluft",
    component: _3f056f5d,
    name: "schwerweicheluft"
  }, {
    path: "/stammklang",
    component: _34f61b6e,
    name: "stammklang"
  }, {
    path: "/tuchzeichnungen",
    component: _6c01827e,
    name: "tuchzeichnungen"
  }, {
    path: "/wellenwaldmitbunker",
    component: _a00ed992,
    name: "wellenwaldmitbunker"
  }, {
    path: "/wetware",
    component: _3889d0de,
    name: "wetware"
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
