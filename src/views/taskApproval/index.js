import { getTaskDetail,commitTask } from '@/api/approval'

import FooterToolBar from '@/layouts/FooterToolbar'
export default{
    data(){
        return{
            result:'APPROVE',
            fieldList:[],
            form: this.$form.createForm(this)
        }
    },
    components:{
        FooterToolBar
    },
    methods:{
        async getInitDetail(){
            this.fieldList = await getTaskDetail({taskId: this.$route.query.id})
            // this.fieldList = res
        },
        async commitApproval(){
            const parameter = {
                taskId: this.$route.query.id,
                params:{
                    result:this.result
                }
            }
            await commitTask(parameter)
        },
        goBack(){
            this.$router.go(-1)
        }
    },
    created(){
        this.getInitDetail()
    }
}