
import { detailColumns,detailData } from './codeList.js'
import { fileUpload } from '@/api/user'

export default {
    name: 'rulesDetail',
    title: '规章制度详情',
    data() {
        let access_token=sessionStorage.getItem('ACCESS_TOKEN')
        return {
            columns:detailColumns,
            rulesData: detailData,
            loading: false,
            modaltitle:'新建',
            modalshow:false,
            confirmLoading:false,
            title:'',
            uploadUrl:fileUpload,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },  
            fileName:'' 
        }
    },
    methods: {
        noticeDataLoad(page) {

        },
        handleAdd(record, flag) {
            this.modalshow=true
        },
        handleEdit(record) {
            this.modalshow=true
        },
        handleDel(record) {
            
        },
        seeFile(record) {
            console.log(record.file)
        },
        handleChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                this.$message.success(`${info.file.name} 上传成功`);
                this.fileName=info.file.response
            } else if (info.file.status === 'error') {
                this.$message.error(`${info.file.name} 上传失败`);
            }
        },
        handleOk(){
            if(!this.title){
                this.$message.warning('请填写标题');
                return false
            }
            // if(!this.fileName){
            //     this.$message.warning('请选择文件');
            //     return false
            // }
            this.rulesData.push({
                title:this.title,
                id:new Date().getTime()
            })
            this.modalshow=false
        }
    },
    created() {
        // this.noticeDataLoad()
    },
}





