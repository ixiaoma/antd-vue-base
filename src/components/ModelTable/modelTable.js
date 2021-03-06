import TableFilter from '../TableFilter/index.vue'
import STable from '../Table'

import { getBasePage, getTableSearch, getTableHeader,getWorkOrderData } from '@/api/commonApi'
import { getUserList } from '@/api/user'

export default{
    data(){
        return {
            visible:false,
            pageLoading:true,
            pageCode:null,
            queryParam:[],//筛选值
            // 加载数据方法 必须为 Promise 对象
            loadData: parameter => {return this.getListData(parameter)},
            columns:[],
            selectedRowKeys: [],
            selectedRows: []
        }
    },
    components: {
        STable,
        TableFilter
    },
    computed: {
        rowSelection () {
          return {
            type:'radio',
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onSelectChange
          }
        }
    },
    methods:{
        async showModel(pageCode){
            this.pageCode = pageCode
            // const date = await getLastMonthDays(-1)
            if(pageCode == 'workOrder' || pageCode == 'systemUser'||this.pageCode == 'workId'){
                if(pageCode == 'systemUser'){
                    this.columns = [
                        {
                            title: '姓名',
                            dataIndex: 'realName',
                        },
                        {
                            title: '工号',
                            dataIndex: 'code'
                        },
                        {
                            title: '公司',
                            dataIndex: 'companyName'
                        },
                        {
                            title: '部门',
                            dataIndex: 'deptName'
                        },
                        {
                            title: '手机号',
                            dataIndex: 'cellphone'
                        }
                    ]
                }else{
                    this.columns = [
                        {
                            title: '工单编号',
                            sorter: true,
                            dataIndex: 'onsite_id'
                        },{
                            title: '员工姓名',
                            sorter: true,
                            dataIndex: 'operation_user_name'
                        },{
                            title: '开始时间',
                            sorter: true,
                            dataIndex: 'arrival_time'
                        },{
                            title: '结束时间',
                            sorter: true,
                            dataIndex: 'finish_time'
                        }
                    ]
                }
                this.filterList = []
                this.pageLoading = false
            }else{
                this.getInitData()
            }
            this.visible = true
        },
        getListData(parameter){
            if(this.pageCode == 'workOrder'||this.pageCode == 'workId'){
                return getWorkOrderData().then(res=>{
                    return res
                })
            }else if(this.pageCode == 'systemUser'){
                return getUserList(parameter).then(res=>{
                    return res
                })
            }else{
                if(this.pageCode == 'apply'){
                    let isApplyStatus=false
                    this.queryParam.forEach(item=>{
                        if(item.field=='applyStatus'){
                            isApplyStatus=true
                        }
                    })
                    if(isApplyStatus){
                        this.queryParam=[...this.queryParam,{field: "showEnabled", operator: "eq",fieldType:'RADIO', value: '是'}]
                    }else{
                        this.queryParam=[...this.queryParam,{field: "showEnabled", operator: "eq",fieldType:'RADIO', value: '是'},{field: "applyStatus", operator: "eq",fieldType:'RADIO', value: '招聘中'}]
                    }
                }
                const params = Object.assign( parameter, {filter:{logic: "and",filters:this.queryParam}})
                return getBasePage({pageCode:this.pageCode,params})
                .then(res => {
                    return res
                })
            }
        },
        customRowFn(record){
            return {
                on: { // 事件
                    click: (event) => {
                        console.log(event)
                    },       // 点击行
                    dblclick: (event) => {
                        console.log(event)
                    },
                    contextmenu: (event) => {},
                    mouseenter: (event) => {
                        console.log(event)
                    },  // 鼠标移入行
                    mouseleave: (event) => {}
                }
            }
        },
        searchRefresh(filterQuery){
            this.queryParam = filterQuery
            this.$refs.table.refresh()
        },
        onSelectChange (selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows[0]
            if((this.$route.query.definekey=='trip'||this.$route.query.definekey=='overtime')&&(this.pageCode == 'workOrder'||this.pageCode == 'workId')){
                this.selectedRows['workId']=this.selectedRows.onsite_id
            }
        },
        async getInitData(){
            this.filterList = await getTableSearch({pageCode:this.pageCode})
            const headerRes = await getTableHeader({pageCode:this.pageCode})
            this.columns = headerRes.map(ele=>{
              return {
                title: ele.name,
                sorter: true,
                dataIndex: ele.code
              }
            })
            this.pageLoading = false
        },
        handleOk(){
            this.$emit('selectData',this.selectedRows)
            this.visible = false
        },
        handleCancel(){
            this.visible = false
        }
    }
}