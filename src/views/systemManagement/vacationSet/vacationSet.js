import leaveType from './leaveType/leaveType.vue'
import vacationBalance from './vacationBalance/vacationBalance.vue'
export default {
    data() {
      return {};
    },
    components:{
        leaveType,
        vacationBalance
    },
    methods: {
      callback(key) {
        console.log(key);
      },
    },
  };