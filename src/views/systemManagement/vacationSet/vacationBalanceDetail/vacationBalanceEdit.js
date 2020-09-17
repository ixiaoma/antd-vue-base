import {userVacationDetail,userVacationEdit} from '@/api/user'
export default {
    name: 'vacationBalanceEdit',
    data() {
        return {
            pageType: '',//add=>新建   edit=>编辑   detail=>详情
            showModal: false,
            modaltitle: '新建账户',
            modaldisabled:false,
            confirmLoading: false,
            username:'',
            userId:'',
            leaveBalance:'',
            remark:'',
            form:null
        }
    },
    methods: {
        //打开模态框
        openModal(userId,username,res) { 
            this.leaveBalance=''  
            this.remark=''
            this.form=res 
            this.leaveBalance=res.leaveBalance
            this.userId=userId
            this.username=username
            this.showModal = true;
        },
        //保存
        handleOk() {
            this.confirmLoading=true
            const params = this.form
            params.leaveBalance=this.leaveBalance
            params.remark=this.remark
            params.userId=params.userId||this.userId
            userVacationEdit(params).then(res=>{      
                this.$message.success('保存成功')
                this.showModal = false;
                this.$emit('reflash')
                this.confirmLoading=false
            })  
        },
        //取消
        handleCancel() {
            this.showModal = false;
        }
    },
    created() { 
        
    }
}