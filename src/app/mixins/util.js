import store from '../vuex'
import moment from 'moment';

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
    },
    timeFormat(time, format = 'YYYY-MM-DD HH:mm:ss') {
      return moment(time).format(format);
    },
    toGender(num) {
      return num == 0 ? '女' : '男';
    },
    strToArray(str) {
      if (!str) {
        return [];
      }
      return str.split('-');
    },
    cartItemSplice(array) {
      console.log('进入数组清空系统');
      var newArray = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i] !== '' && typeof (array[i]) !== 'undefined') {
          newArray.push(array[i]);
        }
      }
      console.log('新数组' + JSON.stringify(newArray));
      return newArray;
    },
    countPrice(array) {
      console.log('进入统计价格系统');
      var newArray = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] !== '' && typeof (array[i]) !== 'undefined') {
          newArray = newArray + array[i]['data']['price'] * array[i]['quantity'];
          console.log('价格' + array[i]['data']['price'] + '/数量' + array[i]['quantity'] + '/结果' + array[i]['data']['price'] * array[i]['quantity']);
        }
      }
      console.log('统计完的价格' + newArray);
      return newArray;
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
