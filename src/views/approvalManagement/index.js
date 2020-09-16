const iconList = [
    'icon-moban',
    'icon-975caidan_yuangonglizhi',
    'icon-dangan',
    'icon-chuchashenqing',
    'icon-kaohebaobiao',
    'icon-tiaoxiujia',
    'icon-yuangongtiaodongshenqingbiao',
    'icon-baoxiao1',
    'icon-buqia',
    'icon-gonggao',
    'icon-biaoshilei_paibanrenyuan',
    'icon-kaoqin'
]
import { getFlowList,saveFlow } from '@/api/approval'
export default{
    name:'approvalManagement',
    data(){
        return{
            visible:false,
            popVisible:false,
            icon:'icon-moban',
            iconList,
            validateStatus:'success',
            form: this.$form.createForm(this),
            objectList:[]
        }
    },
    methods:{
        toSetting(item){
            this.$router.push({name:'approvalSetting',query:{title:item.name+'审批设置',id:item.id}})
        },
        addFlow(){
            this.form.resetFields()
            this.visible = true
        },
        selectIcon(icon){
            this.icon = icon
        },
        deleteField(e,index){
            e.stopPropagation()
        },
        async changeFn(item){
            await saveFlow({params:item})
        },
        async getInitList(){
            const res = await getFlowList()
            this.objectList = res.records
        },
        async commit(){
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    const params = {
                        ...values,
                        icon:this.icon
                    }
                    const res = await saveFlow({params})
                    if(res){
                        this.visible = false
                    }
                }
            })
        }
    },
    created(){
        this.getInitList()
    }
}
