import Mock from 'mockjs2'
import { builder } from '../util'

const archives = () => {
  return builder([
    {
      groupName:'基本信息',
      fieldList:[
        {
          fieldName:'工号',
          fieldKey:'code',
          enabled:1,
          fieldType:1
        },{
          fieldName:'员工Itcode',
          fieldKey:'itcode',
          enabled:1,
          fieldType:1
        },{
          fieldName:'姓名',
          fieldKey:'name',
          enabled:1,
          fieldType:1
        },{
          fieldName:'曾用名',
          fieldKey:'oldName',
          enabled:1,
          fieldType:1
        },{
          fieldName:'身份证号',
          fieldKey:'idCard',
          enabled:1,
          fieldType:1
        },{
          fieldName:'户口所在地',
          fieldKey:'origin',
          enabled:1,
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
        },{
          fieldName:'性别',
          fieldKey:'sex',
          enabled:1,
          fieldType:3,
          fieldList:[
            {
              codeKey:'男',
              code1alue:'男'
            },{
              codeKey:'女',
              codeValue:'女'
            }
          ]
        },{
          fieldName:'出生日期',
          fieldKey:'birthday',
          enabled:1,
          fieldType:6
        },{
          fieldName:'籍贯',
          fieldKey:'region',
          enabled:1,
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
        },{
          fieldName:'民族',
          fieldKey:'nation',
          enabled:1,
          fieldType:1
        },{
          fieldName:'国籍',
          fieldKey:'nationality',
          enabled:1,
          fieldType:1
        },{
          fieldName:'健康状态',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'婚姻状态',
          fieldKey:'sex',
          enabled:1,
          fieldType:3,
          fieldList:[
            {
              codeKey:'已婚',
              code1alue:'已婚'
            },{
              codeKey:'未婚',
              codeValue:'未婚'
            }
          ]
        },{
          fieldName:'参加工作时间',
          fieldKey:'birthday',
          enabled:1,
          fieldType:6
        },{
          fieldName:'员工状态',
          fieldKey:'birthday',
          enabled:1,
          fieldType:3
        },{
          fieldName:'工作年限',
          fieldKey:'birthday',
          enabled:1,
          fieldType:10
        },{
          fieldName:'人员类型',
          fieldKey:'birthday',
          enabled:1,
          fieldType:3
        },{
          fieldName:'本次入职时间',
          fieldKey:'birthday',
          enabled:1,
          fieldType:6
        },{
          fieldName:'联系方式',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'邮箱',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'紧急联系人',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'紧急联系人电话',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'现居住地址',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'特长爱好',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'毕业院校',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'最高学历',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'专业',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'宗教信仰',
          fieldKey:'healthStatus',
          enabled:1,
          fieldType:1
        },{
          fieldName:'政治面貌',
          fieldKey:'birthday',
          enabled:1,
          fieldType:3
        },{
          fieldName:'入党日期',
          fieldKey:'birthday',
          enabled:0,
          relationEnable:'政治面貌key',
          fieldType:6
        }
      ]
    },{
      groupName:'其他信息',
      fieldList:[
        {
          fieldName:'相片',
          fieldKey:'remark',
          enabled:0,
          fieldType:9
        },{
          fieldName:'备注',
          fieldKey:'remark',
          enabled:1,
          fieldType:2
        }
      ]
    }
  ])
}

Mock.mock(/\/staff\/files/, 'get', archives)
