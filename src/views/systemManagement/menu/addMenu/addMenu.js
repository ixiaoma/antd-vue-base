import { objectTypeList,menusAdd,menusEdit } from '@/api/user.js'
export default {
    name: 'addMenu',
    data() {
        return {
            pageType: '',//add=>新建   edit=>编辑 
            showModal: false,
            modaltitle: '新建节点',
            confirmLoading: false,
            form: this.$form.createForm(this),
            nodeTypeSelect: [{ id: "1", name: '菜单' }, { id: "3", name: '按钮' }, {id: "2", name: '对象'}],
            validates: {
                type: { initialValue:"1",rules: [{ required: true, message: '请选择节点类型' }] },
                title: { rules: [{ required: true, message: '请填写节点名称' }] },
                url: { rules: [{ required: true, message: '请填写url' }] },
                code: { rules: [{ required: true, message: '请填写code' }] },
                icon: { rules: [{ required: false, message: '请填写icon' }] },
                sort: { initialValue:1,rules: [{ type: 'number',required: true, message: '请填写排序' }] },
                objectType: { rules: [{ required: true, message: '请选择objectType' }] },
                roleIds: { rules: [{ type: 'array',required: false, message: ' ' }] },
                description:{ rules: [{ required: false, message: ' ' }] },
                enabledBool:{ initialValue:true},
                leafBool:{ initialValue:true},
                listDisplay:{ initialValue:true},
                detailsDisplay:{ initialValue:true},
            },
            parentId:'',//父节点Id
            currentId:'',//当前节点的id
            roleData:[],
            objectTypeList:[],
            nodeData:null
        }
    },
    methods: {
        openModal(pageType, data, currentId,roleData,nodeData) {//打开模态框
            this.roleData=roleData
            this.pageType = pageType;
            if(pageType=='add'){
                this.parentId = currentId
            }else{
                this.parentId = data.parentId ? data.parentId : 0;
            }     
            this.currentId = currentId;
            this.modaltitle = pageType == 'add' ? '新建节点' : '编辑节点';
            
            if (pageType == 'add') {
                    this.form.setFieldsValue({ type: '1',description:''});
                    this.form.getFieldDecorator('detailsDisplay', { initialValue:true })
                    this.form.getFieldDecorator('enabledBool', { initialValue:true })
                    this.form.getFieldDecorator('listDisplay', { initialValue:true })
                    this.form.getFieldDecorator('leafBool', { initialValue:true })           
            } else {
                this.nodeData=JSON.parse(JSON.stringify(nodeData))
                let type = nodeData.type.toString();
                let listDisplay = nodeData.listDisplay=='1'?true:false
                let detailsDisplay = nodeData.detailsDisplay=='1'?true:false
                this.form.setFieldsValue({type: type});
                const { title, url, code, icon, sort, description,objectType,roleIds,enabledBool,leafBool } = { ...nodeData };
                type == '1' ? setTimeout(() => {
                    this.form.setFieldsValue({ type, title, url, objectType,icon, sort, enabledBool,leafBool,roleIds, description})
                },10) : setTimeout(() => {
                    this.form.setFieldsValue({ type, title, code, objectType,sort, enabledBool, listDisplay, detailsDisplay ,roleIds,description})
                },10)
            }
            this.showModal = true;
        },
        handleOk() {//保存
            this.form.validateFields((err, values) => {
                if (err) return;
                const obj = {...values}
                obj.parentId = this.parentId;
                this.confirmLoading = true;
                if(obj.type == 3){
                    obj.listDisplay = obj.listDisplay ? '1' : '2'
                    obj.detailsDisplay = obj.detailsDisplay ? '1' : '2'
                    obj.leafBool = true
                    delete obj.url;
                }  
                if(obj.type == 1){
                    delete obj.code;
                    delete obj.listDisplay
                    delete obj.detailsDisplay
                }  
                if(this.pageType == 'add') {//新建
                    menusAdd(obj).then(res=>{
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
                    let nodeData=JSON.parse(JSON.stringify(this.nodeData))
                    obj.id=this.currentId
                    for (var prop in obj) {
                        nodeData[prop]=obj[prop]
                    }
                    if(nodeData.type==3){
                        delete nodeData.url
                    }
                    menusEdit(this.currentId,nodeData).then(res=>{
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
            this.form.getFieldDecorator('detailsDisplay', { initialValue:true })
            this.form.getFieldDecorator('enabledBool', { initialValue:true })
            this.form.getFieldDecorator('listDisplay', { initialValue:true })
            this.form.getFieldDecorator('leafBool', { initialValue:true })         
        },
        objectTypeLoad(){
            objectTypeList().then(res=>{
                if(res.code == 200){
                    this.objectTypeList = res.data;
                }
            })
        }
        
    },
    mounted() {
        this.objectTypeLoad()
    },
}