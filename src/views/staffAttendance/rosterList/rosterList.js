
import { SearchTable } from '@/components'
import { rosterImportBefore,rosterImport,uploadLoad,rosterDown} from '@/api/uploaddown'
import { getDeptTreeData } from '@/api/user'
// import { axios } from '@/utils/axios'
import moment from 'moment';

export default {
  name: 'rosterListList',
  components: {
    SearchTable
  },
  data () {
    return {
      showBtnList:[],//按钮权限list
      visible:false,
      // rosterDate:'',
      // deptName:'',
      fileList: [],
      uploading: false,
      treeData:[],
      validates: {
        deptName: {rules:[{ type: 'object',required: true,message:'请选择部门'}]},
        rosterDate: { rules: [{ type: 'object', required: true, message: '请选择月份' }] }
      },
      form: this.$form.createForm(this),
      buttonList:[]
    }
  },
  methods: {
    // moment,
    showModal(){
      this.visible=true
    },
    monthLoad(e){},
    downLoad(){
      let access_token=sessionStorage.getItem('ACCESS_TOKEN')
      window.location.href=rosterDown+'?access_token='+access_token
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [file];
      return false;
    },
    handleUpload(){
      
      this.form.validateFields((err, values) => {
        if (err) return;  
        if(!this.fileList[0]){
          this.$message.warning('请选择上传文件');
          return false
        }
        values['rosterDate']=values['rosterDate']?values['rosterDate'].format('YYYY-MM'):null
        values['deptName']=values['deptName'].label
        // this.rosterDate=this.rosterDate ? moment(this.rosterDate, 'YYYY-MM').format('YYYY-MM'):null
        // let paramData = {'rosterDate':this.rosterDate,'deptName':this.deptName}
        let paramData = {'rosterDate':values['rosterDate'],'deptName':values['deptName']}     
        this.uploading = true;
        
        uploadLoad(rosterImportBefore,this.fileList[0],paramData).then((res) => {
          if(res==true){
            this.fileList = [];
            this.uploading = false;
            this.$message.success('上传成功');
            this.visible=false
          }else{
            let _this = this;
            this.$confirm({
                title: '温馨提示',
                content: '排班计划已存在，是否覆盖？',
                okText: '确认',
                cancelText: '取消',
                onOk() {
                  uploadLoad(rosterImport,_this.fileList[0],paramData).then((res) => {
                      _this.fileList = [];
                      _this.uploading = false;
                      _this.$message.success('上传成功');
                      _this.visible=false
                  })
                },
                onCancel() {
                  _this.fileList = [];
                  _this.uploading = false;
                  _this.visible=false
                },
            });
          }  
        })
        
        
      })
    },
    // handleUpload() {
    //   const { fileList } = this;
    //   let formData = new FormData();   
    //   formData.append('file', fileList[0])
    //   formData.append('rosterDate', this.rosterDate)
    //   formData.append('deptName', this.deptName)
    //   this.uploading = true;
    //   const access_token = sessionStorage.getItem('ACCESS_TOKEN')||'2812f6c6-7d2c-44b6-a89f-255dade37e04'
    //   axios.post(rosterImport, formData, { contentType: false, processData: false, headers: { 'Content-Type': 'application/x-www-form-urlencoded',Authorization: `Bearer ${access_token}` } }).then((res) => {
    //       this.fileList = [];
    //       this.uploading = false;
    //       this.$message.success('上传成功');
    //   })
    // },
    gettreedata() {//获取树
      this.treeData = []
      getDeptTreeData().then(res => {            
          let strAdd = JSON.stringify([res]);   
          strAdd = strAdd.replace(/id/g, "value").replace(/name/g, "title").replace(/subDept/g, "children");
          this.treeData =  JSON.parse(strAdd);
      })
    },
  },
  created() {
    this.buttonList = this.$route.meta.buttonList
    this.gettreedata()
},
}
