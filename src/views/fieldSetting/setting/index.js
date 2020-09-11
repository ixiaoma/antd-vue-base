
import FooterToolBar from '@/layouts/FooterToolbar'

import { valueTypeList } from '@/utils/commonCode'
import { codeTableList  } from '@/api/user'
import { saveGroupField, listLayout, deleteGroupField, fieldDefinedSave, fieldDefinedDelete, saveFieldLayout } from '@/api/setting'

const layoutList = [
    {
        key:'BASIC',
        value:'基础布局'
    },{
        key:'CREATE',
        value:'新增布局'
    },{
        key:'EDIT',
        value:'编辑布局'
    },{
        key:'DETAIL',
        value:'详情布局'
    }
]

export default{
    name:'fieldSetting',
    data(){
        return{
            valueTypeList,
            layoutList,
            visible:false,
            fieldVisible:false,
            loading:false,
            fieldLoading:false,
            form: this.$form.createForm(this, { name: 'block_form' }),
            fieldForm:this.$form.createForm(this, { name: 'field_form' }),
            layoutData:null,
            // componentData:{
            //     attrs:{
            //         bordered:false
            //     },
            //     props: {
            //         'default-active-key':'0'
            //     }
            // },
            fieldData:null,
            groupName:null,
            activePanel:[],
            activeKey:'BASIC' , 
            codeList3: [] , // 码表下拉
            codeList5: [] , // 码表下拉
            valueType: '' , 
            selectLevel: [ 0 ] , // 多级联动层级
        }
    },
    components:{
        FooterToolBar
    },
    computed: {
        showCodeField(){
            let arr = [  'RADIO' , 'CHECKBOX'  ]
            return this.valueType  && arr.indexOf(this.valueType ) > -1 
        },
        codeList(){
            let { codeList3 ,codeList5  } = this ; 
            if(  ['RADIO' , 'CHECKBOX'].indexOf(this.valueType) > -1 ){
                return codeList3 ; 
            }
            if( this.valueType == 'SELECT' ) return codeList3
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

        // 修改选择类型
        changeValueType(e){
            let { value } = e.target ; 
            this.valueType = value ; 
            if( value == 'SELECT' ){
                this.fieldForm.setFieldsValue({'categoryCode': []})
                this.selectLevel = [ 0 ]
                return 
            }
            this.fieldForm.setFieldsValue({ 'categoryCode': undefined })
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

        
        addModel(){//添加或编辑分割线
            this.visible = true
        },
        handleSubmit(e){//保存分割线
            e.preventDefault();
            this.form.validateFields((err, values) => {
              if (!err) {
                const params = {
                    ...values,
                    layoutType:this.activeKey,
                    objectDefineCode:this.$route.query.code
                }
                this.fieldLoading = true
                saveGroupField(params).then(res=>{
                    this.getInitLayout()
                    this.visible = false
                    this.fieldLoading = false
                }).catch(error=>{
                    this.fieldLoading = false
                })
              }
            });
        },
        deleteBlock(item){//删除分割线
            const params = {
                fieldName:item.groupName,
                layoutType:this.activeKey,
                objectDefineCode:this.$route.query.code
            }
            this.$confirm({
                title: '请确认是否要删除此模块?',
                content: h => <div style="color:red;">删除后此模块下的字段会自动放到回收站</div>,
                onOk: async ()=>{
                    const res = await deleteGroupField(params)
                }
            })
        },
        handleCancel(e){//关闭分割线弹框
            this.visible = false
        },
        oprationField(groupName,fieldData){//添加字段+编辑字段
            console.log(fieldData , 'fieldData')
            this.groupName = groupName
            this.fieldVisible = true
            this.fieldForm.resetFields()
            this.valueType = fieldData ?  fieldData.valueType : '' ; 
            this.fieldData = fieldData || null
            if(this.valueType == 'SELECT'){
                this.selectLevel = fieldData.categoryCode ; 
            }
           
        },
        handleFieldSubmit(e){//保存字段
            e.preventDefault();
            this.fieldForm.validateFields((err, values) => {
              if (!err) {
                const params = { ...values,groupName:this.groupName }
                if(this.fieldData){
                    params.code = this.fieldData.code
                }
                this.loading = true
                fieldDefinedSave(this.$route.query.code,params).then(res=>{
                    this.getInitLayout()
                    this.fieldVisible = false
                    this.loading = false
                }).catch(error=>{
                    this.loading = false
                })
              }
            });
        },
        deleteField(fieldCode){//删除字段
            const params = {
                objectDefineCode: this.$route.query.code,
                fieldCode
            }
            this.$confirm({
                title: '请确认是否要删除此字段?',
                content: h => <div style="color:red;">删除后将无法恢复</div>,
                onOk: async ()=>{
                    const res = await fieldDefinedDelete(params)
                    this.getInitLayout()
                }
            })
        },
        handleFieldCancel(){//关闭字段弹框
            this.fieldVisible = false
        },
        async getInitLayout(){//获取布局
            const params = {
                objectDefineCode:this.$route.query.code,
                layoutType:this.activeKey
            }
            const res = await listLayout(params)
            this.layoutData = res
            if(res && res.display){
                this.activePanel = res.display.map((ele,index)=>`${index}`)
            }
        },
        async saveModel(){//保存布局
            // const parameter = {
            //     display:this.layoutData.display.map(ele=>{
            //         return {
            //             groupName:ele.groupName,
            //             layoutList:ele.layoutList.map(ele=>{
            //                return {code:ele.code}
            //             })
            //         }
            //     }),
            //     trash:this.layoutData.trash.map(ele=>{
            //         return {
            //             fieldCode:ele.code,
            //             group:false
            //         }
            //     })
            // }
            const params = {
                objectDefineCode:this.$route.query.code,
                layoutType:this.activeKey,
                parameter:this.layoutData
            }
            const res = await saveFieldLayout(params).catch(err=>{})
        }
    },
    created(){
        this.getInitLayout()
        this.getCodeList(3)
        this.getCodeList(5)
    },
    beforeCreate() {
        
    },
}