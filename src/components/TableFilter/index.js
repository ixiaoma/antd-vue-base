import moment from 'moment'
export default {
    name:'TableFilter',
    data () {
      return {
        expand: false,
        form: this.$form.createForm(this, { name: 'advanced_search' })
      }
    },
    props: {
        filterList: {
            type: Array,
            default: null
        }
    },
    computed: {
      count () {
        return this.expand ? this.filterList.length : 2
      }
    },
    methods: {
      handleSearch () {
        this.form.validateFields((_err, values) => {
          console.log(values)
          const searchArr = {}
          // this.filterList.forEach(ele => {
          //   if (values[ele.dataIndex] || values[ele.dataIndex] === 0) {
          //     let operator = ele.type === 'Select' || ele.type === 'Number' ? 'eq' : 'contain'
          //     let value = values[ele.dataIndex]
          //     if (ele.type === 'Time' || ele.type === 'NotShowTime') {
          //         const time = moment(values[ele.dataIndex]).format('YYYY-MM-DD')
          //         operator = ele.type === 'NotShowTime' ? 'between' : 'gte'
          //         if (ele.type === 'Time') {
          //           value = `${time} 00:00:00`
          //           searchArr.push({ field: ele.dataIndex, operator: 'lte', value: `${time} 23:59:59` })
          //         } else {
          //           value = `${time} 00:00:00,${time} 23:59:59`
          //         }
          //     } else if (ele.type === 'DateTime') {
          //         operator = ele.operator
          //         value = moment(values[ele.dataIndex]).format('YYYY-MM-DD HH:mm:ss')
          //     }
          //     searchArr.push({ field: ele.dataIndex, operator, value: operator === 'contain' ? `%${value}%` : value })
          //   }
          // })
          this.$emit('refresh',searchArr)
        })
      },
      filterOption (input, option) {
        return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        )
      },
      handleReset () {
        this.form.resetFields()
        this.$emit('refresh',{})
      },
      toggle () {
        this.expand = !this.expand
      }
    }
  }
