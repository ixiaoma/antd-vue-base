import { addRole,editRole,copyRole } from '@/api/systemManage'
export default {
    name: 'addRole',
    data() {
        return {
            pageType: '',//add=>新建   edit=>编辑  copy=>复制
            showModal: false,
            modaltitle: '新建角色',
            confirmLoading: false,
            form: this.$form.createForm(this), 
            validates: {
                name: { rules: [{ required: true, message: '请填写角色名称' }] }
            },
            currentId:'',//当前操作的角色id
        }
    },
    methods: {
        openModal(pageType,data) {//打开模态框
            this.pageType = pageType;
            this.currentId = data && data.id;
            this.showModal = true;
            const {name,remark} = {...data};
            this.modaltitle = pageType == 'add' ? '新建角色' : pageType == 'edit' ? '编辑角色' : '复制角色'
            if (pageType == 'edit') {
                this.$nextTick(()=>{
                    this.form.setFieldsValue({name,remark})
                })
            }
        },
        handleOk() {//保存
            this.form.validateFields((err, values) => {
                if (err) return;
                let obj = JSON.parse(JSON.stringify(values));
                this.confirmLoading = true;
                if(this.pageType == 'add') {//新建
                    addRole(obj).then(res=>{
                        if(res.code == 200) {
                            this.$message.success('新建成功');
                            this.$emit('refresh');
                            this.showModal = false;
                        }
                        this.confirmLoading = false;
                    }).then(()=>{
                        this.form = this.$form.createForm(this);
                    }).catch(()=>{
                        this.confirmLoading = false;
                    })
                } else if(this.pageType == 'edit') {//编辑
                    obj.id = this.currentId; 
                    editRole(obj).then(res=>{
                        if(res.code == 200) {
                            this.$message.success('编辑成功');
                            this.$emit('refresh');
                            this.showModal = false;
                        }
                        this.confirmLoading = false;
                    }).then(()=>{
                        this.form = this.$form.createForm(this);
                    }).catch(()=>{
                        this.confirmLoading = false;
                    })
                } else if(this.pageType == 'copy') {//复制
                    obj.id = this.currentId; 
                    copyRole(obj).then(res=>{
                        if(res.code == 200) {
                            this.$message.success('复制成功');
                            this.$emit('refresh');
                            this.showModal = false;
                        }
                        this.confirmLoading = false;
                    }).then(()=>{
                        this.form = this.$form.createForm(this);
                    }).catch(()=>{
                        this.confirmLoading = false;
                    })
                }
            });
        },
        handleCancel() {//取消
            this.showModal = false;
            this.form = this.$form.createForm(this);
        }
    }
}