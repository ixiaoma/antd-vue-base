import { STable } from '@/components'
import { budgetGetAmount,budgetEditAmount,budgetEditLatitude,budgetGetLatitude,getCodeList } from '@/api/user'

export default {
    name: 'budgetGetAmount',
    title: 'budgetGetAmount',
    data() {
        return {
            columns:[ {
                title: '操作人',
                dataIndex: 'operator'
              },
              {
                title: '操作时间',
                dataIndex: 'operationTime'
              },
              {
                title: '操作内容',
                dataIndex: 'operationContent'
              }],
            // 查询参数
            queryParam: [],
            budgetAmount:0,
            // 加载数据方法 必须为 Promise 对象
            loadData: parameter => {
                const params = Object.assign( parameter, {filter:{logic: "and",filters:this.queryParam}})
                return budgetGetAmount(params)
                .then(res => {
                    this.budgetAmount=res.budgetAmount
                    return res.listCount
                })
            },
            visible:false,
            setAmount:false,
            budgetLatitude:'',
            budgetLatitudeList:[],
            budgetEdit:false,
            budgetTitle:'预算维度查看'
        };
    },
    components: {
        STable
    },
    methods: {
        handleCancel(){
            this.setAmount=false
        },
        handleOk(){
            let params={
                budgetAmount:this.budgetAmount
            }
            budgetEditAmount(params).then(res=>{
                this.$message.success('保存成功')
                this.setAmount=false
            })
            
        },
        budgetSeeLoad(){
            this.budgetTitle='预算维度查看'
            budgetGetLatitude().then(res=>{
                this.budgetLatitude=res.budgetLatitude
                this.budgetEdit=true  
            })
        },
        budgetEditLoad(){
            this.budgetTitle='设置预算维度'
            budgetGetLatitude().then(res=>{
                this.budgetLatitude=res.budgetLatitude
                this.budgetEdit=true      
            })
        },
        budgetEditCancel(){
            this.budgetEdit=false
        },
        budgetEditOk(){
            let params={
                budgetLatitude:this.budgetLatitude
            }
            budgetEditLatitude(params).then(res=>{
                this.$message.success('保存成功')
                this.budgetEdit=false
            })
        },
    },
    created() {
        getCodeList('budget_dept').then(res=>{
            this.budgetLatitudeList=res
        })
    },
};