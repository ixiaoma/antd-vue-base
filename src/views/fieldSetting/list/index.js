import { getObjectList } from '@/api/setting'
import { Icon } from 'ant-design-vue'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1976655_pmtz41pdboo.js'
})
export default{
    name:'settingList',
    data(){
        return{
            objectList:[],
            iconList:[
                'icon-jiangchenggongshi',//奖惩
                'icon-lizi',//例子
                'icon-kaohe',
                'icon-chuchashenqingshenpiliucheng',
                'icon-contract2',
                'icon-change',
                'icon-ico_yunyingguanli_yuangongxinxichaxun',
                'icon-education',
                'icon-drxx43',
                'icon-shehuiguanxi',
                'icon-resume-1-copy',
                'icon-yuangongruzhi',
                'icon-lizhizhengming',
                'icon-gangweitiaodongx',
                'icon-zhaopin',
                'icon-jianli',
                'icon-jiaban',
                'icon-qingxiujiashenqing',
                'icon-kaoqin',
                'icon-mingxi'
            ]
        }
    },
    components:{
        IconFont
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
            this.$router.push({name:'fieldSetting',query:{title:item.name+'配置',code:item.code}})
        }
    },
    created(){
        this.getInitData()
    }
}