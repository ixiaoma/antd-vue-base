
import { SearchTable } from '@/components'
import { attendanceImport,uploadLoad,attendanceDown} from '@/api/uploaddown'

export default {
  name: 'attendanceListList',
  components: {
    SearchTable
  },
  data () {
    return {
      showBtnList:[],//按钮权限list
      visible:false,
      fileList: [],
      uploading: false,
      treeData:[],
      validates: {
        attendanceMonth: { rules: [{ type: 'object', required: true, message: '请选择月份' }] },
        remark: { rules: [{ required: false, message: '请填写备注' }] },
      },
      form: this.$form.createForm(this),
      buttonList:[]
    }
  },
  methods: {
    showModal(){
      this.visible=true
    },
    monthLoad(e){},
    downLoad(){
      let access_token=sessionStorage.getItem('ACCESS_TOKEN')
      window.location.href=attendanceDown+'?access_token='+access_token
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
        values['attendanceMonth']=values['attendanceMonth']?values['attendanceMonth'].format('YYYY-MM'):null
        // this.attendanceMonth=this.attendanceMonth ? moment(this.attendanceMonth, 'YYYY-MM').format('YYYY-MM'):null
        // let paramData = {'attendanceMonth':this.attendanceMonth,'deptName':this.deptName}
        let paramData = {'attendanceMonth':values['attendanceMonth'],'remark':values['remark']}     
        this.uploading = true;
        uploadLoad(attendanceImport,this.fileList[0],paramData).then((res) => {
                this.fileList = [];
                this.uploading = false;
                this.$message.success('上传成功');
                this.visible=false
        })
      })
    },
  },
  created() {
    this.buttonList = this.$route.meta.buttonList
  },
}
