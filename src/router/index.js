import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login/Login.vue'
import Data from '@/views/Data/Data.vue'
import Api from '@/views/Api/Api.vue'
import Provinceback from '@/views/Provinceback/Provinceback.vue'
import provinceparty from '@/views/province-party/province-party'
import apilist from '@/views/api-list/api-list.vue'
import datadetail from '@/views/data-detail/data-detail.vue'
import applysource from '@/views/apply-source/apply-source.vue'
import apisource from '@/views/api-source/api-source.vue'
import applysubmit from '@/views/apply-submit/apply-submit.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/data', component: Data },
  { path: '/api', component: Api },
  { path: '/provinceback', component: Provinceback },
  { path: '/province-party', component: provinceparty },
  { path: '/api-list', component: apilist },
  { path: '/data-detail', component: datadetail },
  { path: '/apply-source', component: applysource },
  { path: '/api-source', component: apisource },
  { path: '/apply-submit', component: applysubmit }
]
const router = new VueRouter({
  routes
})

export default router
