export default {
  path: '/pingxuan',
  component: r =>  require.ensure([], () => r(require('./pingxuan.vue')), 'pingxuan'),
};
