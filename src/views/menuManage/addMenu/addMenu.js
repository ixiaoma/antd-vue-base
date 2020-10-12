import { addMenus,editMenus } from '@/api/systemManage'
export default {
    name: 'addMenu',
    data() {
        return {
            pageType: '',//add=>新建   edit=>编辑 
            showModal: false,
            modaltitle: '新建节点',
            confirmLoading: false,
            form: this.$form.createForm(this),
            nodeTypeSelect: [{ id: "1", name: '菜单' }, { id: "3", name: '按钮' }, {id: "5", name: '接口'}],
            validates: {
                type: { rules: [{ required: true, message: '请选择节点类型' }] },
                name: { rules: [{ required: true, message: '请填写节点名称' }] },
                url: { rules: [{ required: true, message: '请填写url' }] },
                code: { rules: [{ required: true, message: '请填写code' }] },
                icon: { rules: [{ required: false, message: '请填写icon' }] },
                sort: { rules: [{ required: true, message: '请填写排序' }] }
            },
            parentId:'',//父节点Id
            currentId:'',//当前节点的id
        }
    },
    methods: {
        openModal(pageType, data, parentId) {//打开模态框
            this.pageType = pageType;
            this.parentId = parentId ? parentId : 0;
            this.currentId = data && data.id;
            this.modaltitle = pageType == 'add' ? '新建节点' : '编辑节点';
            if (pageType == 'add') {
                let timer = setTimeout(()=>{
                    this.form.setFieldsValue({ type: '1',enabled:true });
                    clearTimeout(timer)
                },100)
            } else {
                let enabled = data.enabled == 1 ? true : false;
                let listDisplay = data.listDisplay == 1 ? true : false;
                let detailDisplay = data.detailDisplay == 1 ? true : false;
                //提前设置节点类型字段的值，因为后面有的字段是根据该字段的值进行显示或者隐藏的
                let type = data.type.toString();
                this.form.setFieldsValue({type: type});
                const { name, url, code, icon, sort, remark } = { ...data };
                type == '1' ? this.$nextTick(() => {
                    this.form.setFieldsValue({ type, name, url, icon, sort, remark, enabled})
                }) : this.$nextTick(() => {
                    this.form.setFieldsValue({ type, name, code, sort, remark, enabled, listDisplay, detailDisplay })
                })
            }
            this.showModal = true;
        },
        handleOk() {//保存
            this.form.validateFields((err, values) => {
                if (err) return;
                let obj = JSON.parse(JSON.stringify(values));
                obj.enabled = obj.enabled ? 1 : 0;
                obj.type == '3' ? obj.listDisplay = obj.listDisplay ? 1 : 0 : '';
                obj.type == '3' ? obj.detailDisplay = obj.detailDisplay ? 1 : 0 : '';
                obj.parentId = this.parentId;
                this.confirmLoading = true;
                if(this.pageType == 'add') {//新建
                    addMenus(obj).then(res=>{
                        if(res.code == 200) {
                            this.$message.success('新建成功');
                            this.$emit('refresh');
                            this.showModal = false;
                        }
                        this.confirmLoading = false;
                    }).then(()=>{
                        this.form = this.$form.createForm(this);
                    }).catch(res=>{
                        this.confirmLoading = false;
                    })
                } else {//编辑
                    obj.id = this.currentId; 
                    editMenus(obj).then(res=>{
                        if(res.code == 200) {
                            this.$message.success('编辑成功');
                            this.$emit('refresh');
                            this.showModal = false;
                        }
                        this.confirmLoading = false;
                    }).then(()=>{
                        this.form = this.$form.createForm(this);
                    }).catch(res=>{
                        this.confirmLoading = false;
                    })
                }
            });
        },
        handleCancel() {//取消
            this.showModal = false;
            this.form = this.$form.createForm(this);
        },
        selNodeType(e) {
            let timer = setTimeout(()=>{
                this.form.setFieldsValue({'enabled':true });
                clearTimeout(timer)
            },100)
        }
    }
}