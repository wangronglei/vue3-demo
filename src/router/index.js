/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import dynamicLoad from '@/common/dynamic-load'

import Home from '../views/home.vue'
import View1Router from '../views/view1/router'
import View2Router from '../views/view2/router'
import View3Router from '../views/view3/router'
import View4Router from '../views/view4/router'
import View5Router from '../views/view5/router'
import View6Router from '../views/view6/router'
import View7Router from '../views/view7/router'
import View8Router from '../views/view8/router'
import View9Router from '../views/view9/router'
import View10Router from '../views/view10/router'
import View11Router from '../views/view11/router'
import View12Router from '../views/view12/router'
import View13Router from '../views/view13/router'
import View14Router from '../views/view14/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const arr = [View1Router,View2Router,View3Router,View4Router,View5Router,View6Router,View7Router,View8Router,View9Router,View10Router,View11Router,View12Router,View13Router]

router.beforeEach(dynamicLoad(View1Router))
router.beforeEach(dynamicLoad(View2Router))
router.beforeEach(dynamicLoad(View3Router))
router.beforeEach(dynamicLoad(View4Router))
router.beforeEach(dynamicLoad(View5Router))
router.beforeEach(dynamicLoad(View6Router))
router.beforeEach(dynamicLoad(View7Router))
router.beforeEach(dynamicLoad(View8Router))
router.beforeEach(dynamicLoad(View9Router))
router.beforeEach(dynamicLoad(View10Router))
router.beforeEach(dynamicLoad(View11Router))
router.beforeEach(dynamicLoad(View12Router))
router.beforeEach(dynamicLoad(View13Router))
// router.beforeEach(dynamicLoad(View14Router))


router.beforeEach((to, from, next) => {
  next()
})


export default router
