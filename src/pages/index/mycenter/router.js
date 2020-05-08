export default {
  path: '/mycenter',
  component: r =>  require.ensure([], () => r(require('./mycenter.vue')), 'mycenter'),
};
