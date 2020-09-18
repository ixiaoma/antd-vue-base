import moment from 'moment'
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
        this.form.validateFields((err, values) => {
          const searchArr = []
          this.filterList.forEach(ele => {
            let value = values[ele.code]
            if (value || value == 0) {
              // let operator = ele.valueType === 'CHECKBOX' ? 'contain' : 'eq'
              if(ele.valueType == 'ORG_TREE_MULTI' || ele.valueType == 'CHECKBOX'){
                searchArr.push({
                  filters:values.map(pre=>{
                    return {
                      field:ele.code,
                      operator:'eq',
                      value:pre
                    }
                  }),
                  logic: "or"
                })
              }else{
                if(ele.valueType == 'DATETIME' || ele.valueType == 'DATE'){
                  value = moment(value).format(ele.valueType == 'DATE' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss')
                }
                searchArr.push({ field: ele.code, fieldType: ele.valueType, operator:'eq', value })
              }
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
