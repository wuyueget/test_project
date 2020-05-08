export default {
  path: '/xiangqing',
  component: r =>  require.ensure([], () => r(require('./xiangqing.vue')), 'xiangqing'),
};
