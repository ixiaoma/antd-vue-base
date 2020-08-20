import {userSave,userUpdate,userDeatil} from '@/api/user'
import moment from 'moment'
import { TreeSelect } from 'ant-design-vue'
export default {
    name: 'addAccount',
    components:{
        'a-tree-select':TreeSelect
    },
    data() {
        return {
            pageType: '',//add=>新建   edit=>编辑   detail=>详情
            showModal: false,
            modaltitle: '新建账户',
            theilCityList: [
                {
                  codeKey: '北京,北京市',
                  codeValue: '北京市'
                },
                {
                  codeKey: '天津,天津市',
                  codeValue: '天津市'
                },
        
                {
                  codeKey: '广东省,深圳市',
                  codeValue: '深圳市'
                },
                {
                  codeKey: '四川省,成都市',
                  codeValue: '成都市'
                },
            ],
            modaldisabled:false,
            confirmLoading: false,
            salesStatus: [{ codeValue: '在职', codeKey: 1 }, { codeValue: '离职', codeKey: 0 }],
            sexRadios: [{ label: '男', value: 0 }, { label: '女', value: 1 }],
            treeData: [],
            validates:{
                realName:{rules: [{ required: true, message: '请填写姓名' }]},
                nickname:{rules: [{ required: true, message: '请填写登录名' }]},
                staffNo:{rules: [{ required: false, message: '员工工号系统自动生成' }]},
                cellphone:{rules: [{ required: true, message: '请填写手机号' },{pattern:/^1\d{10}$/, message: '请填写正确的手机号' }]},
                email:{rules: [{ required: false, message: '请填写邮箱' },{type: 'email',message: '请填写正确的邮箱'}]},
                theilCity:{rules: [{ required: true, message: '请选择办公地址' }]},
                sex:{initialValue:0},
                newSales:{rules: [{ required: true, message: '请填写员工状态' }]},  
                // deptId:{rules: [{ required: true, message: '请选择主属部门' }]},
                dept: {rules:[{ type: 'object',required: true,message:'请选择主属部门'}]},
                idCard:{rules: [{ required: false,message:''}]},  
                wechat:{rules: [{ required: false,message:''}]},       
                qq:{rules: [{ required: false,message:''}]},       
                weibo:{rules: [{ required: false,message:''}]},           
                birthday: {rules:[{ type: 'object',required: false,message:''}]},
                employmentDate: {rules:[{ type: 'object',required: false,message:''}]},
            },
            formField : this.$form.createForm(this, { name: 'add-account' }),
            deptId:'',
            deptName:''
        }
    },
    methods: {
        //时间转换方法
        moment,
        //主属部门 change
        treeDataChange(e){
            this.deptId=e.value
            this.deptName=e.label
        },
        //打开模态框
        openModal(type,id) {
            this.pageType = type;
            this.id = id
            this.modaltitle = type == 'add' ? '新建账户' : type == 'edit' ? '编辑账户' : '查看账户';
            this.modaldisabled=type=='detail'?true:false
            if(type=='detail'){
                this.fromCalidates(false)
            }else{
                this.fromCalidates(true)
            }
            console.log(this.id)
            this.formField.resetFields()
            if(type == 'edit'||type=='detail'){
                userDeatil(id).then(res => {
                    let fromdata=res.data
                    this.deptId=res.data.deptId
                    this.deptName=res.data.deptName
                    fromdata.sex=parseInt(res.data.sex)
                    fromdata.birthday=res.data.birthday?moment(new Date(res.data.birthday)):null
                    fromdata.employmentDate=res.data.employmentDate?moment(new Date(res.data.employmentDate)):null
                    this.$nextTick(()=>{
                        let { realName,nickname,cellphone,email,theilCity,sex,newSales,idCard,wechat,qq,weibo,birthday,employmentDate } = { ...fromdata };
                        this.formField.setFieldsValue({realName,nickname,cellphone,email,theilCity,sex,newSales,idCard,wechat,qq,weibo,birthday,employmentDate})
                        this.formField.setFieldsValue({
                            dept:{
                                value:res.data.deptId,
                                label:res.data.deptName
                            }
                        })
                    })
                })
            }    
            this.showModal = true;
        },
        //保存
        handleOk() {
            this.formField.validateFields((err, values) => {       
                values['birthday']=values['birthday']?values['birthday'].format('YYYY-MM-DD')+' 00:00:00':null
                values['employmentDate']=values['employmentDate']?values['employmentDate'].format('YYYY-MM-DD')+' 00:00:00':null
                if (err) return;  
                if(values['cellphone']&&!/^0?1[3|4|5|6|7|8][0-9]\d{8}$/i.test(values['cellphone'])){
					this.$message.warning('请正确填写手机号')
					return
                }
                if(values['email']&&!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(values['email'])){
					this.$message.warning('请正确填写邮箱')
					return
                }
                if(values['idCard']&&!/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(values['idCard'])){
					this.$message.warning('请正确填写身份证号')
					return
                }
                const params = {...values}
                delete params.dept
                // delete params.newSales
                params.deptId = this.deptId
                params.deptName = this.deptName
                if(this.id){
                    params.id = this.id
                    userUpdate(params).then(res=>{
                        if(res.code == 200){
                          this.$message.success('保存成功')
                          this.showModal = false;
                          this.$emit('refresh')
                        }
                    })
                }else{
                    userSave(params).then(res=>{
                        if(res.code == 200){
                          this.$message.success('保存成功')
                          this.showModal = false;
                          this.$emit('refresh')
                        }
                    })
                }   
              });
        },
        //取消
        handleCancel() {
            this.showModal = false;
        },
        fromCalidates(value){
            this.validates={
                realName:{rules: [{ required: value, message: '请填写姓名' }]},
                nickname:{rules: [{ required: value, message: '请填写登录名' }]},
                staffNo:{rules: [{ required: false, message: '员工工号系统自动生成' }]},
                cellphone:{rules: [{ required: value, message: '请填写手机号' },{pattern:/^1\d{10}$/, message: '请填写正确的手机号' }]},
                email:{rules: [{ required: false, message: '请填写邮箱' },{type: 'email',message: '请填写正确的邮箱'}]},
                theilCity:{rules: [{ required: value, message: '请选择办公地址' }]},
                sex:{initialValue:0},
                newSales:{rules: [{ required: true, message: '请填写员工状态' }]},  
                // deptId:{rules: [{ required: value, message: '请选择主属部门' }]},
                dept: {rules:[{ type: 'object',required: value,message:'请选择主属部门'}]},
                idCard:{rules: [{ required: false,message:''}]},  
                wechat:{rules: [{ required: false,message:''}]},       
                qq:{rules: [{ required: false,message:''}]},       
                weibo:{rules: [{ required: false,message:''}]},           
                birthday: {rules:[{ type: 'object',required: false,message:''}]},
                employmentDate: {rules:[{ type: 'object',required: false,message:''}]},
            }
        }
    }
}