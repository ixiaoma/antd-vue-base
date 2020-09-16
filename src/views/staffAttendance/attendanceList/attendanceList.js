
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
        rosterDate: { rules: [{ type: 'object', required: true, message: '请选择月份' }] }
      },
      form: this.$form.createForm(this),
    }
  },
  methods: {
    showModal(){
      this.visible=true
    },
    monthLoad(e){},
    downLoad(){
      window.location.href=attendanceDown
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
        // this.rosterDate=this.rosterDate ? moment(this.rosterDate, 'YYYY-MM').format('YYYY-MM'):null
        // let paramData = {'rosterDate':this.rosterDate,'deptName':this.deptName}
        let paramData = {'rosterDate':values['rosterDate']}     
        this.uploading = true;
        uploadLoad(attendanceImport,this.fileList[0],paramData).then((res) => {
                this.fileList = [];
                this.uploading = false;
                this.$message.success('上传成功');
                this.visible=false
        })
      })
    },
  }
}
