import { getProcessHeader,commitTask } from '@/api/approval'
export default{
    data(){
        return{
            result:'APPROVE'
        }
    },
    methods:{
        async commitApproval(){
            const parameter = {
                taskId: this.$route.query.id,
                params:{
                    result:this.result
                }
            }
            await commitTask(parameter)
        }
    }
}