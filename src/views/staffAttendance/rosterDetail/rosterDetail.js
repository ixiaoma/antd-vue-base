import { getRosterDetails } from '@/api/other'
export default {
  name: 'rosterDetailList',
  components: {

  },
  data() {
    return {
      year: '',
      month: '',
      currentMonthDay:30,
      weekList: [],
      rosterData: []
    }
  },
  methods: {
    getRosterDetailsLoad(id) {
      let _this=this;
      getRosterDetails(id).then(res => {
        this.rosterData=res
        this.rosterData.forEach((item, index) => {
          item['rosterType'] = Array.apply(null, { length: _this.currentMonthDay})
          item.data.forEach((item2, ind2) => {
            item2.rosterDate = Number(item2.rosterDate.split('-')[2])
            item.rosterType[item2.rosterDate - 1] = item2.rosterType
          })
        })
        this.time(this.year, this.month)
      })
    },
    time(y, m) {
      var tempTime = new Date(y, m, 0);
      var time = new Date();
      var saturday = new Array();
      var sunday = new Array();
      for (var i = 1; i <= tempTime.getDate(); i++) {
        time.setFullYear(y, m - 1, i);
        var day = time.getDay();
        if (day == 6) {
          saturday.push(i);
        } else if (day == 0) {
          sunday.push(i);
        }
      }
      var text = saturday.toString() + "," + sunday.toString();
      this.weekList = text.split(',')
    },
    getDays(year, month) {
      month=Number(month)-1
      let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        days[1] = 29
      }
      this.currentMonthDay = days[month]
    }
  },
  created() {
    let rosterMonth = this.$route.query.rosterMonth.split('-')
    this.year = rosterMonth[0]
    this.month = rosterMonth[1]
    this.getDays(rosterMonth[0], rosterMonth[1])
    this.getRosterDetailsLoad(this.$route.query.id)
  }
}
