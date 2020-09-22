import { getTaskDetail,commitTask } from '@/api/approval'
export default{
    data(){
        return{
            result:'APPROVE'
        }
    },
    methods:{
        async getInitDetail(){
            const res = await getTaskDetail({taskId: this.$route.query.id})
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