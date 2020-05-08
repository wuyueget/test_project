export default {
  path: '/shangcheng',
  component: r =>  require.ensure([], () => r(require('./shangcheng.vue')), 'shangcheng'),
};
