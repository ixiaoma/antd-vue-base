import {vacationTypeSave,getCodeList} from '@/api/user'
export default {
    name: 'addLeaveType',
    data() {
        return {
            pageType: '',//add=>新建   edit=>编辑   detail=>详情
            showModal: false,
            modaltitle: '新建账户',
            modaldisabled:false,
            confirmLoading: false,
            timeScaleList:[],
            isQuotaList:[],
            validates:{
                name:{rules: [{ required: true, message: '请填写类型名称' }]},
                timeScale:{rules: [{ required: true, message: '请选择时间刻度' }]},
                isQuota:{rules: [{ required: true, message: '请选择是否限额' }]},
            },
            formField : this.$form.createForm(this, { name: 'add-account' }),
        }
    },
    methods: {
        //打开模态框
        openModal(type,record) {
            this.pageType = type;
            this.id = record?record.id:null
            this.modaltitle = type == 'add' ? '新建' : type == 'edit' ? '编辑' : '查看';
            this.modaldisabled=type=='detail'?true:false
            if(type=='detail'){
                this.fromCalidates(false)
            }else{
                this.fromCalidates(true)
            }
            this.formField.resetFields()
            if(type == 'edit'||type=='detail'){
                let fromdata=record
                this.$nextTick(()=>{
                    let { name,timeScale,isQuota } = { ...fromdata };
                    this.formField.setFieldsValue({name,timeScale,isQuota})
                    
                })
            }    
            this.showModal = true;
        },
        //保存
        handleOk() {
            this.formField.validateFields((err, values) => {       
                if (err) return;  
                this.confirmLoading=true
                const params = {...values} 
                if(this.id){
                    params.id = this.id
                }
                vacationTypeSave(params).then(res=>{      
                        this.$message.success('保存成功')
                        this.showModal = false;
                        this.$emit('reflash')
                        this.confirmLoading=false
                })  
              });
        },
        //取消
        handleCancel() {
            this.showModal = false;
        },
        fromCalidates(value){
            this.validates={
                name:{rules: [{ required: true, message: '请填写类型名称' }]},
                timeScale:{rules: [{ required: true, message: '请选择时间刻度' }]},
                isQuota:{rules: [{ required: true, message: '请选择是否限额' }]}
            }
        },
        codeLoad(){
            getCodeList('time_scale').then(res=>{
                this.timeScaleList=res
            }) 
            getCodeList('is_quota').then(res=>{
                this.isQuotaList=res
            })   
        }
    },
    created() { 
        this.codeLoad()
    }
}