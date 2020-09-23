import { codeTableList , objectTypeList  } from '@/api/user'
import { fieldDefinedList } from '@/api/setting'
export default{
    data(){
        return {
            selectLevel: [ 0 ] , // 多级联动层级
            objectList: [] , // 引用对象下拉
            fieldList: [] , // 引用字段下拉
            setFieldList: [] , // 引用对象赋值字段
            fieldForm:this.$form.createForm(this, { name: 'field_form' }),
        }
    },
    methods:{
        // 添加多级联动层级
        addSelect(){
            this.selectLevel.push(1) ; 
        },
        minusSelect(i){
            this.selectLevel.splice(i , 1) ; 
        },
        // 码表列表
        getCodeList(type){
            let params = {
                "pageNo": 1,
                "pageSize": 1000,
                "filter": {
                    "filters": [
                        {
                            "field": "type",
                            "operator": "eq",
                            "value": type  // 3 单选 多选  5 多级联动
                        }
                    ],
                    "logic": "and"
                }
            }
            codeTableList(params).then(res => {
                this[`codeList${type}`] = res.records;
            })
        },
        async getObjectList(){// 引用对象下拉
            const params = { pageSize: 1000 , pageNo: 1  }
            const res = await objectTypeList(params)
            this.objectList = res.records
        },
        // 引用字段下拉
        getFieldList(objectCode){
            // referObjectCode
            fieldDefinedList(objectCode).then(res=>{
                this.fieldList = res ; 
            })
        },
        changeObject(objectCode){
            this.getFieldList(objectCode)
        },
        // 引用对象赋值字段
        getSetFieldList(){
            fieldDefinedList(this.$route.query.code).then(res=>{
                this.setFieldList = res ; 
            })
        }
    },
    created(){
        this.getObjectList()
        this.getSetFieldList()
    }
}