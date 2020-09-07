import { saveGroupField, listLayout, deleteGroupField, fieldDefinedSave, fieldDefinedDelete, saveFieldLayout } from '@/api/setting'

import FooterToolBar from '@/layouts/FooterToolbar'

const valueTypeList = [
    {
        label:'TEXT_SINGLE',
        value:'单行文本'
    },{
        label:'TEXT_MULTI',
        value:'多行文本'
    },{
        label:'RADIO',
        value:'单选'
    },{
        label:'CHECKBOX',
        value:'多选'
    },{
        label:'SELECT',
        value:'多级联动'
    },{
        label:'INTEGER',
        value:'整数'
    },{
        label:'DECIMAL',
        value:'小数'
    },{
        label:'AMOUNT',
        value:'金额'
    },{
        label:'DATETIME',
        value:'日期'
    },{
        label:'PICTURE',
        value:'图片'
    },{
        label:'ATTACHMENT',
        value:'附件'
    },{
        label:'PHONE',
        value:'电话'
    },{
        label:'EMAIL',
        value:'邮件'
    },{
        label:'AUTO_CODE',
        value:'自动编号'
    },{
        label:'COMPUTE',
        value:'计算字段'
    }
]

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
            activePanel:[],
            activeKey:'BASIC'
        }
    },
    components:{
        FooterToolBar
    },
    methods:{
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
                content: h => <div style="color:red;">删除后此模块下的字段会自动放到其他模块中</div>,
                onOk: async ()=>{
                    const res = await deleteGroupField(params)
                }
            })
        },
        handleCancel(e){//关闭分割线弹框
            this.visible = false
        },
        oprationField(groupName,fieldData){//添加字段+编辑字段
            this.fieldVisible = true
            this.fieldForm.resetFields()
            this.fieldData = fieldData || null
        },
        handleFieldSubmit(e){//保存字段
            e.preventDefault();
            this.fieldForm.validateFields((err, values) => {
              if (!err) {
                const params = { ...values }
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
            const parameter = {
                display:this.layoutData.display.map(ele=>{
                    return {
                        groupName:ele.groupName,
                        layoutList:ele.layoutList.map(ele=>{
                           return {code:ele.code}
                        })
                    }
                }),
                trash:this.layoutData.trash.map(ele=>{
                    return {
                        fieldCode:ele.code,
                        group:false
                    }
                })
            }
            const params = {
                objectDefineCode:this.$route.query.code,
                layoutType:this.activeKey,
                parameter
            }
            const res = await saveFieldLayout(params).catch(err=>{})
        }
    },
    created(){
        this.getInitLayout()
    }
}