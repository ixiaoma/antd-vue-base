import Vue from 'vue';
import moment from 'moment'
import { rolesList,getDeptTreeData,getUserLike,noticeAdd,noticeEdit,noticeDetail } from '@/api/user'
import { TreeSelect } from 'ant-design-vue'
import debounce from 'lodash/debounce';
let Base64 = require('js-base64').Base64;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
export default {
    name: 'noticeAdd',
    data() {
        this.lastFetchId = 0;
        this.fetchUser = debounce(this.fetchUser, 800);
        return {
            editid:'',
            customerTypeList: [
                {codeKey:'日常通知',codeValue:'日常通知'},
                {codeKey:'节假日通知',codeValue:'节假日通知'},
                {codeKey:'排班通知',codeValue:'排班通知'},
                {codeKey:'其他通知',codeValue:'其他通知'},
            ],
            roleData:[],
            treeData:[],
            userData:[],
            form: this.$form.createForm(this),
            validates: {
                title: { rules: [{ required: true, message: '请填写主题' }] },
                customerType: { rules: [{ required: true, message: '请选择公告类型' }] },
                bulletinperson: { initialValue: 'all' },
                roleIds:{rules: [{ type: 'array', required: true, message: '请选择角色' }]},
                dept: {rules:[{ type: 'array',required: true,message:'请选择部门'}]},
                users: {rules:[{ type: 'array',required: true,message:'请选择发布人'}]},
                publishDate: { rules: [{ type: 'object', required: true, message: '请选择发布时间' }] },
                expiryDate: { rules: [{ type: 'object', required: true, message: '请选择失效时间' }] }
            },
            SHOW_PARENT,
            value: [],
            fetching: false,
            clear2: '',
            editor:null,
            bulletinconcent:''
        }
    },
    components:{
        'a-tree-select':TreeSelect
    },
    methods: {
        //时间转换方法
        moment,
        handleSubmit(e) {
            console.log(this.bulletinconcent)
            console.log(Base64.encode(this.bulletinconcent))
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (err) return;  
                values['publishDate']=values['publishDate']?values['publishDate'].format('YYYY-MM-DD HH:mm:ss'):null
                values['expiryDate']=values['expiryDate']?values['expiryDate'].format('YYYY-MM-DD HH:mm:ss'):null
                if (values['publishDate'] >= values['expiryDate']) {
                    this.$message.warning("失效时间应大于发布时间")
                    return false
                }
                
                let params = {
                    title: values['title'],//公告标题
                    customerType: values['customerType'],//公告类型
                    customerType: values['bulletinperson'],//发布人
                    publishDate: values['publishDate'],//公告时间  
                    expiryDate: values['expiryDate'],//失效时间             
                    content: Base64.encode(this.bulletinconcent),//公告内容              
                }
                if (values['bulletinperson'] == "role") {
                    params.customerIds = values['roleIds']                                    
                } 
                if (values['bulletinperson'] == "department") {
                    params.customerIds =  values['dept']
                } 
                if (values['bulletinperson'] == "people") {
                    params.customerIds = values['users']
                }
                if (!this.editid) {
                    noticeAdd(params).then(res=>{
                        if(res.code==200){
                            this.$message.success("新建成功")
                            this.$router.go(-1)
                        }
                    })
                } else {
                    params.id = this.editid
                    noticeEdit(params).then(res=>{
                        if(res.code==200){
                            this.$message.success("编辑成功")
                            this.$router.go(-1)
                        }
                    })
                }       
                console.log(values)
            })
        },
        goBack() {
            this.$router.go(-1)
        },
        getRoleData() {//获取权限角色       
            let params = {
                enabled: true
            }
            rolesList(params).then(res => {
                this.roleData = res.data;
            })
        },
        gettreedata() {//获取树
            this.treeData = []
            getDeptTreeData().then(res => {            
                let strAdd = JSON.stringify([res.data]);   
                strAdd = strAdd.replace(/id/g, "value").replace(/name/g, "title").replace(/subDept/g, "children");
                this.treeData =  JSON.parse(strAdd);
            })
        },
        getUserLoad(){
            getUserList().then(res => {
               
            })
        },
        fetchUser(value) {
            console.log('fetching user', value);
            this.lastFetchId += 1;
            const fetchId = this.lastFetchId;
            this.userData = [];
            this.fetching = true;
            let params = {
                nickname: value
            }
            getUserLike(params).then(res => {
                if (fetchId !== this.lastFetchId) {
                    // for fetch callback order
                    return;
                  }
                //   const data = res.data.map(user => ({
                //     text:user.nickname,
                //     value: user.nickname,
                //   }));
                  this.userData = res.data;
                  this.fetching = false;
            })
          },
        userChange(value) {
            console.log(value)
            Object.assign(this, {
              value,
              data: [],
              fetching: false,
            });
          },
          //编辑       
        editbulletin() {
            let params = {
                id: this.editid
            }           
            noticeDetail(params).then(res => {
                if (res.code == 200) {    
                    
                    let fromdata=res.data
                    fromdata.publishDate=res.data.publishDate?moment(new Date(res.data.publishDate)):null
                    fromdata.expiryDate=res.data.expiryDate?moment(new Date(res.data.expiryDate)):null
                    this.$nextTick(()=>{
                        let { title,publishDate,expiryDate} = { ...fromdata };
                        this.form.setFieldsValue({
                            title,publishDate,expiryDate
                        })
                    })             
                    this.bulletinconcent= Base64.decode(res.data.content);
                    this.editor.txt.html(this.bulletinconcent)            
                }
            })
        }
    },
    created() {
        this.getRoleData()
        this.gettreedata()
    },
    mounted () { 
        this.editid = this.$route.query.id;
        if (this.editid != "" && this.editid != undefined) {
            this.clear2 = setTimeout(() => {
                this.editbulletin()
            }, 500)
        }

        let E = require('wangeditor')
        this.editor = new E('#editor')
        this.editor.customConfig.onchange = (html) => {
          this.bulletinconcent = html
        }
        this.editor.create()
    },
    beforeDestroy() {
        clearTimeout(this.clear2)
    }
}