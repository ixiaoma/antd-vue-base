import fieldHandle from '@/mixins/fieldHandle'

import TreeSelect from '../Tree/tree.vue'
export default {
    name:'TableFilter',
    data () {
      return {
        expand: false,
        form: this.$form.createForm(this, { name: 'advanced_search' })
      }
    },
    mixins:[fieldHandle],
    props: {
        filterList: {
            type: Array,
            default: null
        }
    },
    components:{
      TreeSelect
    },
    computed: {
      count () {
        return this.expand ? this.filterList.length : 2
      }
    },
    methods: {
      selectTree(list,code){//下拉树回填值
        this.form.setFieldsValue({[code]:list})
      },
      handleSearch () {
        this.form.validateFields((_err, values) => {
          const searchArr = []
          this.filterList.forEach(ele => {
            let value = values[ele.code]
            if (value || value === 0) {
              let operator = ele.valueType === 'CHECKBOX' ? 'contain' : 'eq'
              // if (ele.type === 'Time' || ele.type === 'NotShowTime') {
              //     const time = moment(value).format('YYYY-MM-DD')
              //     operator = ele.type === 'NotShowTime' ? 'between' : 'gte'
              //     if (ele.type === 'Time') {
              //       value = `${time} 00:00:00`
              //       searchArr.push({ field: ele.code, operator: 'lte', value: `${time} 23:59:59` })
              //     } else {
              //       value = `${time} 00:00:00,${time} 23:59:59`
              //     }
              // } else if (ele.type === 'DateTime') {
              //     operator = ele.operator
              //     value = moment(value).format('YYYY-MM-DD HH:mm:ss')
              // }
              searchArr.push({ field: ele.code, fieldType: ele.valueType, operator, value })
            }
          })
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
        this.$emit('refresh',[])
      },
      toggle () {
        this.expand = !this.expand
      }
    }
  }
