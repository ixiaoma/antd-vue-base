import { getTaskDetail,commitTask } from '@/api/approval'
import fieldHandle from '@/mixins/fieldHandle'

import FooterToolBar from '@/layouts/FooterToolbar'
export default{
    data(){
        return{
            result:'APPROVE',
            fieldList:[],
            form: this.$form.createForm(this)
        }
    },
    mixins:[fieldHandle],
    components:{
        FooterToolBar
    },
    methods:{
        async getInitDetail(){
            this.fieldList = await getTaskDetail({taskId: this.$route.query.id})
        },
        async commitApproval(){
            const parameter = {
                taskId: this.$route.query.id,
                params:{
                    result:this.result
                }
            }
            await commitTask(parameter)
            this.$message.success('提交成功')
            this.$router.go(-1)
        },
        goBack(){
            this.$router.go(-1)
        }
    },
    created(){
        this.getInitDetail()
    }
}