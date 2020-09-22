import { getTaskDetail,commitTask } from '@/api/approval'
export default{
    data(){
        return{
            result:'APPROVE',
            fieldList:[]
        }
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
        }
    },
    created(){
        this.getInitDetail()
    }
}