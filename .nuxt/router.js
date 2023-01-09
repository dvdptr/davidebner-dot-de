import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5786d39b = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _f0a90270 = () => interopDefault(import('../pages/cv.vue' /* webpackChunkName: "pages/cv" */))
const _455d587f = () => interopDefault(import('../pages/exhibitions.vue' /* webpackChunkName: "pages/exhibitions" */))
const _7313b286 = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _3c797e18 = () => interopDefault(import('../pages/artworks/belebteUnbeweglichkeit.vue' /* webpackChunkName: "pages/artworks/belebteUnbeweglichkeit" */))
const _67f2e9ff = () => interopDefault(import('../pages/artworks/beruehrungsstudien.vue' /* webpackChunkName: "pages/artworks/beruehrungsstudien" */))
const _78643f26 = () => interopDefault(import('../pages/artworks/bruchstuecke.vue' /* webpackChunkName: "pages/artworks/bruchstuecke" */))
const _3ea80d5c = () => interopDefault(import('../pages/artworks/leitformen.vue' /* webpackChunkName: "pages/artworks/leitformen" */))
const _4c0b6ee6 = () => interopDefault(import('../pages/artworks/modelleOhneMaßstab.vue' /* webpackChunkName: "pages/artworks/modelleOhneMaßstab" */))
const _4f59b70c = () => interopDefault(import('../pages/artworks/schwerschwarzschwebend.vue' /* webpackChunkName: "pages/artworks/schwerschwarzschwebend" */))
const _1b970fda = () => interopDefault(import('../pages/artworks/schwerweicheluft.vue' /* webpackChunkName: "pages/artworks/schwerweicheluft" */))
const _81486c14 = () => interopDefault(import('../pages/artworks/spaltungen.vue' /* webpackChunkName: "pages/artworks/spaltungen" */))
const _d12136b8 = () => interopDefault(import('../pages/artworks/stammklang.vue' /* webpackChunkName: "pages/artworks/stammklang" */))
const _a04d3b60 = () => interopDefault(import('../pages/artworks/tuch-zeichnungen.vue' /* webpackChunkName: "pages/artworks/tuch-zeichnungen" */))
const _7e5f46c1 = () => interopDefault(import('../pages/artworks/wellenwaldmitbunker.vue' /* webpackChunkName: "pages/artworks/wellenwaldmitbunker" */))
const _c5ebf930 = () => interopDefault(import('../pages/artworks/wetware.vue' /* webpackChunkName: "pages/artworks/wetware" */))
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
    path: "/artworks/belebteUnbeweglichkeit",
    component: _3c797e18,
    name: "artworks-belebteUnbeweglichkeit"
  }, {
    path: "/artworks/beruehrungsstudien",
    component: _67f2e9ff,
    name: "artworks-beruehrungsstudien"
  }, {
    path: "/artworks/bruchstuecke",
    component: _78643f26,
    name: "artworks-bruchstuecke"
  }, {
    path: "/artworks/leitformen",
    component: _3ea80d5c,
    name: "artworks-leitformen"
  }, {
    path: "/artworks/modelleOhneMa%C3%9Fstab",
    component: _4c0b6ee6,
    name: "artworks-modelleOhneMaßstab"
  }, {
    path: "/artworks/schwerschwarzschwebend",
    component: _4f59b70c,
    name: "artworks-schwerschwarzschwebend"
  }, {
    path: "/artworks/schwerweicheluft",
    component: _1b970fda,
    name: "artworks-schwerweicheluft"
  }, {
    path: "/artworks/spaltungen",
    component: _81486c14,
    name: "artworks-spaltungen"
  }, {
    path: "/artworks/stammklang",
    component: _d12136b8,
    name: "artworks-stammklang"
  }, {
    path: "/artworks/tuch-zeichnungen",
    component: _a04d3b60,
    name: "artworks-tuch-zeichnungen"
  }, {
    path: "/artworks/wellenwaldmitbunker",
    component: _7e5f46c1,
    name: "artworks-wellenwaldmitbunker"
  }, {
    path: "/artworks/wetware",
    component: _c5ebf930,
    name: "artworks-wetware"
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
