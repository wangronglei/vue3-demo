
export default {
  path: '/view1',
  name: 'view1',
  component: () => import(/* webpackChunkName: "view1" */ './view1.vue'),
}
