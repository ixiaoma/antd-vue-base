import { getObjectList } from '@/api/setting'
export default{
    name:'settingList',
    data(){
        return{
            objectList:[]
        }
    },
    methods:{
        async getInitData(){
            const params = {
                "pageNo": 1,
                "pageSize": 100
            }
           const res = await getObjectList(params)
           this.objectList = res.records
        },
        toSetting(item){
            this.$router.push({name:'fieldSetting',query:{title:item.name+'配置'}})
        }
    },
    created(){
        this.getInitData()
    }
}