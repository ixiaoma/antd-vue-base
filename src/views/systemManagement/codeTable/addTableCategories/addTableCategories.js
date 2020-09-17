import { getCategoryList,addCategory,editCategory } from '@/api/user'
export default {
    name: 'addTableCategories',
    data() {
        return {
            tableModal:false,
            formItem: {
                type:'3',
                parentId:'',
                name:'',
                autoCreateCode:'1',
                code:''
            },
            autoCreateCodeList:[//码表类别code创建类型
                {codeKey:'0',codeValue:'自动生成'},
                {codeKey:'1',codeValue:'自定义'}
            ],
            fieldValueTypeList:[//是否是多级联动
                {codeKey:'3',codeValue:'单选/多选'},
                {codeKey:'5',codeValue:'多级联动'}
            ],
            multiArr:[],//所有多级联动数据
            btnLoading:false,
            modalTitle:'新建码表类别',
            pageType:'add',//新建：add    编辑：edit
            currentId:''
        }
    },
    methods: {
        showModal(type,data) {
            this.clearFormData();
            this.pageType = type;
            if(type == 'edit') {
                this.currentId = data.id;
                this.formItem.name = data.name;
                this.modalTitle = '编辑码表类别'
            } else {
                this.modalTitle = '新建码表类别'
            }
            this.tableModal = true;
        },
        selectAutoCode(){
            this.formItem.code=''
            this.formItem.name=''
        },
        selectFieldValueType(e) {//选择数据类型如果是多级联动类型 => 调接口获取所有的多级联动下拉值
            if(e == 5) {
                this.getAllMultilevelData();
            }
        },
        getAllMultilevelData() {//获取所有的多级联动下拉值
            getCategoryList().then(res=>{
                this.multiArr = res;
            })
        },
        saveFn() {//保存
            // var codetest = /^[\u4e00-\u9fa5]$/;//汉字正则
            if(!this.formItem.name ) {
                this.$message.warning('请填写类别名称');
                return ;
            }
            if(this.pageType == 'add' && this.formItem.autoCreateCode == '1' && !this.formItem.code) {
                this.$message.warning('请填写类别编码');
                return ;
            }
            this.btnLoading = true;
            if(this.pageType == 'add') {
                let params={...this.formItem}
                delete params.autoCreateCode
                // this.formItem.parentId = this.formItem.parentId === '' ? '0' : this.formItem.parentId;
                addCategory(this.formItem).then(res=>{
                    // if(res && res.code == 200) {
                        this.$message.success('新建成功');
                        this.$emit('refresh');
                    // }
                    this.tableModal = false;
                }).catch(()=>{
                    this.btnLoading = false;
                })
            } else {
                let params = {
                    name: this.formItem.name,
                    id: this.currentId
                }
                addCategory(params).then(res=>{
                    // if(res && res.code == 200) {
                        this.$message.success('新建成功');
                        this.$emit('refresh');
                    // }
                    this.tableModal = false;
                }).catch(()=>{
                    this.btnLoading = false;
                })
            }
        },
        cancelFn() {//取消
            this.tableModal=false;
            this.clearFormData();
        },
        clearFormData() {//清空表单数据
            this.formItem = {
                type:'3',
                parentId:'',
                name:'',
                autoCreateCode:'1',
                code:''
            }
            this.btnLoading = false;
        }
    }
}