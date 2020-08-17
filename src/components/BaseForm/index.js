const layoutList = [
    {
      groupName:'基本信息',
      fieldList:[
        {
          fieldName:'工号',
          fieldKey:'name',
          enabled:1,
          fieldType:1
        },{
          fieldName:'员工Itcode',
          fieldKey:'itcode',
          enabled:1,
          fieldType:1
        },{
          fieldName:'时间',
          fieldKey:'time',
          enabled:0,
          fieldType:6
        },{
          fieldName:'下拉单选',
          fieldKey:'select',
          enabled:0,
          fieldType:3
        },{
          fieldName:'省市区',
          fieldKey:'cascader',
          enabled:0,
          fieldType:5,
          codeList:[
              {
                  value:'北京',
                  label:'北京',
                  isLeaf: false
              },{
                  value:'上海',
                  label:'上海',
                  isLeaf: false
              }
          ]
        }
      ]
    },{
      groupName:'其他信息',
      fieldList:[
        {
          fieldName:'备注',
          fieldKey:'remark',
          enabled:0,
          fieldType:2
        }
      ]
    }
  ]
  import moment from 'moment'
  
  import FooterToolBar from '@/layouts/FooterToolbar'
  export default {
      name:'BaseFormLayout',
      data () {
          return {
              layoutList,
              activeKey:['0','1'],
              form: this.$form.createForm(this)
          }
      },
      components:{
          FooterToolBar
      },
      methods:{
          decoratorFn(i){
              return [ i.fieldKey, { initialValue: i.fieldType == 3 ? i.fieldValue || undefined : i.fieldValue ,rules: [ { required: i.enabled == 1 ? true : false, whitespace:true, message: `${i.fieldName}必填`, type:i.fieldType == 4 || i.fieldType == 5 ? 'array' : i.fieldType == 6 ? 'object' : 'string' } ] } ]
          },
          onChange(value) {
              console.log(value);
          },
          loadData(selectedOptions){
              const targetOption = selectedOptions[selectedOptions.length - 1]
              targetOption.children = [
                  {
                      value:'北京',
                      label:'北京',
                      isLeaf: selectedOptions.length == 2 ? true : false
                  },{
                      value:'上海',
                      label:'上海',
                      isLeaf: selectedOptions.length == 2 ? true : false
                  }
              ]
          },
          handleSubmit (e) {
              e.preventDefault()
              this.form.validateFields((err, values) => {
                  if (!err) {
                      // this.$emit('next')
                      let saveData = {}
                      this.layoutList.forEach(item=>{
                          item.fieldList.forEach(ele=>{
                              if(values[ele.fieldKey]){
                                  if(ele.fieldType == 6){
                                      saveData[ele.fieldKey] = moment(values[ele.fieldKey]).format('YYYY-MM-DD')
                                  }else{
                                      saveData[ele.fieldKey] = values[ele.fieldKey]
                                  }
                              }
                          })
                      })
                      console.log(saveData)
                  }
              })
          },
          goBack(){
              this.$router.go(-1)
          }
      }
  }