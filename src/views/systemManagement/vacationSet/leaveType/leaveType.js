import { STable } from '@/components'
import {columns} from './codeList.js'
import { vacationTypePage,vacationTypeDel } from '@/api/user'
import addLeaveType from './addLeaveType.vue'
export default {
   name: 'leaveType',
   title: 'leaveType',
    data() {
        this.columns = columns
        return {
            // 查询参数
            queryParam: [],
            // 加载数据方法 必须为 Promise 对象
            loadData: parameter => {
                const params = Object.assign( parameter, {filter:{logic: "and",filters:this.queryParam}})
                return vacationTypePage(params)
                .then(res => {
                    return res
                })
            }
        };
    },
    components: {
        STable,
        addLeaveType
    },
    methods: {
        handleAdd(record,type) {
            this.$refs.addLeaveType.openModal(type,record)
        },
        deleteData(id) {
            let _this=this;
            this.$confirm({
                title: '温馨提示',
                content: '确认删除？',
                okText: '确认',
                cancelText: '取消',
                onOk() {
                    vacationTypeDel(id).then(res => {
                        _this.$message.success('删除成功');
                        _this.reflash()       
                    })
                },
                onCancel() { },
            });
        },
        reflash(){
            // this.queryParam = filterQuery
            this.$refs.table.refresh()
        },
    },
};