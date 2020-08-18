// import {lableData,cascadeLabelData,agentSave,agentDetail,companySearch} from '@/api/systemManage.js'
import moment from 'moment'
// import {Base64} from 'js-base64'
export default {
    name: 'addAccount',
    data() {
        return {
            pageType: '',//add=>新建   edit=>编辑   detail=>详情
            showModal: false,
            modaltitle: '新建账户',
            modaldisabled:false,
            confirmLoading: false,
            isAdminRadios: [{ label: '是', value: 1 }, { label: '否', value: 0 }],
            enabledRadios: [{ label: '启用', value: 1 }, { label: '禁用', value: 0 }],
            sexRadios: [{ label: '男', value: 0 }, { label: '女', value: 1 }],
            companyList: [],
            usertypelist:[],
            provincelist: [],
            citylist: [],
            countylist: [],
            validates:{
                realName:{rules: [{ required: true, message: '请填写姓名' }]},
                loginName:{rules: [{ required: true, message: '请填写登录名' }]},
                staffNo:{rules: [{ required: false, message: '员工工号系统自动生成' }]},
                cellphone:{rules: [{ required: true, message: '请填写手机号' },{pattern:/^1\d{10}$/, message: '请填写正确的手机号' }]},
                email:{rules: [{ required: false, message: '请填写邮箱' },{type: 'email',message: '请填写正确的邮箱'}]},
                // userType:{rules: [{ required: true, message: '请选择用户类型' }]},
                // companyId:{rules: [{ required: false, message: '请选择所属企业' }]},
                // province:{rules: [{ required: true, message: '请选择省份' }]},
                // city:{rules: [{ required: true, message: '请选择城市' }]},
                // district:{rules: [{ required: true, message: '请选择区县' }]},
                wechatNumber:{rules: [{ required: false,message:''}]},  
                enabled:{initialValue:1},  
                idCard:{rules: [{ required: false,message:''}]},  
                birthDate: {rules:[{ type: 'object',required: false,message:''}]},
                address: {rules:[{ required: false,message:''}]},
                gender: {initialValue:1},
                password:{rules: [{ required: true, message: '请输入密码' }]},
            },
            formField : this.$form.createForm(this, { name: 'add-account' })
        }
    },
    methods: {
        //时间转换方法
        moment,
        //用户类型change
        userTypeChange(value){
            if(value==4){//用户类型为企业管理员所属公司必填
                this.validates.companyId={rules: [{ required: true, message: '请选择所属企业' }]}
            }else{
                this.validates.companyId={rules: [{ required: false, message: '请选择所属企业' }]}
            }
        },
        //打开模态框
        openModal(type,id) {
            this.pageType = type;
            this.id=id
            this.modaltitle = type == 'add' ? '新建账户' : type == 'edit' ? '编辑账户' : '查看账户';
            this.modaldisabled=type=='detail'?true:false
            if(type=='detail'){
                this.fromCalidates(false)
            }else{
                this.fromCalidates(true)
            }
            this.getProvince();
            this.usertypeLoad()
            console.log(this.id)
            this.formField.resetFields()
            if(type == 'edit'||type=='detail'){
                agentDetail(id).then(res => {
                    this.companyList=[{id:res.data.companyId,companyName:res.data.companyName}]//后期后端返回
                    if(res.data.userType=='4'){//用户类型为企业管理员所属公司必填
                        this.validates.companyId={rules: [{ required: true, message: '请选择所属企业' }]}
                    }else{
                        this.validates.companyId={rules: [{ required: false, message: '请选择所属企业' }]}
                    }
                    let fromdata=res.data
                    if(fromdata.province){
                        this.getCityAdress(fromdata.province,0)
                    }
                    if(fromdata.city){
                        this.getCountryAdress(fromdata.city,0)
                    }
                    fromdata.birthDate=res.data.birthDate?moment(new Date(res.data.birthDate)):null
                    this.$nextTick(()=>{
                        const {realName,loginName,cellphone,email,userType,companyId,province,city,district,wechatNumber,enabled,idCard,birthDate,address,gender,password} = {...fromdata}
                        this.formField.setFieldsValue({realName,loginName,cellphone,email,userType,companyId,province,city,district,wechatNumber,enabled,idCard,birthDate,address,gender,password})
                    })
                })
            }    
            this.showModal = true;
        },
        //所属公司模糊查询
        handleSearch(value) {
            fetch(value, data => (this.companyList = data));
        },
        //所属公司赋值
        handleChange(value) {
            this.formField.setFieldsValue({companyId:value})
        },
        //省
        getProvince() {
            let params={
                categoryCode:'province'
            }
            lableData(params).then(res => {
                if (res && res.code == '200') {
                    this.provincelist = res.data;
                    this.citylist=[]
                    this.countylist=[]
                }
            })
        },
        //市
        async getCityAdress(e,value){
            this.citylist = await this.getNextCode('city',e)
            if(value){
                this.formField.resetFields(['city','district'])
                this.countylist=[]
            }  
        }, 
        //区
        async getCountryAdress(e,value){
            this.countylist = await this.getNextCode('county',e)
            if(value){
                this.form.resetFields('district')
            }  
        },
        async getNextCode(code,codekey){
            const params = {
              categoryCode:code,
              parentCodeKey:codekey
            }
            const res = await cascadeLabelData(params)
            return res.data
        },
        //用户类型
        usertypeLoad(){
            let params={
                categoryCode:'admin_user_type'
            }
            lableData(params).then(res => {
                if (res && res.code == '200') {
                    this.usertypelist = res.data;
                }
            })
        },
        //保存
        handleOk() {
            this.formField.validateFields((err, values) => {       
                values['birthDate']=values['birthDate']?values['birthDate'].format('YYYY-MM-DD')+' 00:00:00':null
                if (err) return;
                if(values['idCard']&&!/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(values['idCard'])){
					this.$message.warning('请正确填写身份证号')
					return
				}
                const params = {...values,password:Base64.encode(values.password)}
                if(this.id) params.id = this.id
                if(this.modaltitle=='编辑账户') delete params.password
                agentSave(params).then(res=>{
                    if(res.code == 200){
                      this.$message.success('保存成功')
                      this.showModal = false;
                      this.$emit('refresh')
                    }
                })
              });
        },
        //取消
        handleCancel() {
            this.showModal = false;
        },
        fromCalidates(value){
            this.validates={
                realName:{rules: [{ required: value, message: '请填写姓名' }]},
                loginName:{rules: [{ required: value, message: '请填写登录名' }]},
                cellphone:{rules: [{ required: value, message: '请填写手机号' },{pattern:/^1\d{10}$/, message: '请填写正确的手机号' }]},
                email:{rules: [{ required: false, message: '请填写邮箱' },{type: 'email',message: '请填写正确的邮箱'}]},
                userType:{rules: [{ required: value, message: '请选择用户类型' }]},
                companyId:{rules: [{ required: false, message: '请选择所属企业' }]},
                province:{rules: [{ required: value, message: '请选择省份' }]},
                city:{rules: [{ required: value, message: '请选择城市' }]},
                district:{rules: [{ required: value, message: '请选择区县' }]},
                // isAdmin:{initialValue:1},  
                wechatNumber:{rules: [{ required: false,message:''}]},  
                enabled:{initialValue:1},  
                idCard:{rules: [{ required: false,message:''}]},  
                // state: {rules:[{ required: false, message: '请选择状态' }]},
                birthDate: {rules:[{ type: 'object',required: false,message:''}]},
                address: {rules:[{ required: false,message:''}]},
                gender: {initialValue:1},  
                password:{rules: [{ required: value, message: '请输入密码' }]},   
            }
        }
    }
}

let timeout;
let currentValue;

  function fetch(value, callback) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    currentValue = value;
    function fake() {
            value && companySearch(currentValue).then(res => {
            if (res && res.code == '200') {
                if (currentValue === value) {
                    const result = res.data;
                    callback(result);
                }
            }
        })
    }
    timeout = setTimeout(fake, 300);
  }