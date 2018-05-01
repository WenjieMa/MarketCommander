import store from '../vuex'
export default {
  methods: {
    isNull(obj) {
      if (typeof obj === 'undefined' || obj === null || obj === '') {
        return true;
      }
      return false;
    },
    toPrice(value) {
      if (value) {
        const ret = (value / 100).toFixed(2).toString();
        if (ret.indexOf('.00') === -1) {
          return ret;
        }
        return (value / 100).toFixed(0).toString();
      }
      return 0;
    }
  },
  computed: {
    utils() {
      return store.state;
    },
    datePickParam() {
      return {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    }
  }
}
