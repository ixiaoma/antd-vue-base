import { STable } from '@/components'
import {btnBoolean} from '@/api/comonApi'
import { getCateValuePage,delCodeValue } from '@/api/systemManage'
import addTableValue from './addTableValue/addTableValue.vue'
export default {
    name: 'tableCateValue',
    components: {
        STable,
        addTableValue
    },
    data() {
        return {
            columns: [
                { title: '类别名称', dataIndex: 'categoryName'},
                { title: '码表code', dataIndex: 'codeKey'},
                { title: '码表值', dataIndex: 'codeValue'},
                { title: '上级码表值', dataIndex: 'fatherCodeValue', scopedSlots: { customRender: 'fatherCodeValueSlots' } },
                // { title: '是否启用', dataIndex: 'enabledStr'},
                // { title: '所属类型', dataIndex: '5'},
                { title: '排序', dataIndex: 'sort'},
                { title: '操作', dataIndex: 'action', scopedSlots: { customRender: 'operationSlots' } },
            ],
            loadData: parameter => {
                const searchArr = []
                const params = { ...parameter, ...this.search, searchFilter: { filters: searchArr, logic: "and" } }
                return getCateValuePage(Object.assign(params)).then(res => {
                    return res
                })
            },
            selectedRowKeys: [],
            selectedRows: [],
            search: {
                categoryCode:'',
                codeValue:'',
                enabled:'0'
            },
            selectOption: [
                { id: "0", name: '启用' },
                { id: "1", name: '禁用' },
            ],
        }
    },
    methods: {
        btnBoolean,
        onSelectChange(selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
        },
        searchFn() {
            this.$refs.table.refresh()
        },
        resetFn() {
            this.search.codeValue = '';
            this.searchFn();
        },
        addTableValue(type,data) {
            if(type == 'add') {//新建
                this.$refs.addTableValue.showModal('add');
            } else {//编辑
                this.$refs.addTableValue.showModal('edit',data);
            }
        },
        delTableValue(data) {
            let params = [data.id]
            let that = this;
            this.$confirm({
                title: '温馨提示',
                content: '确认删除？删除后数据无法恢复！',
                okText: '确认',
                okType: 'danger',
                cancelText: '取消',
                onOk() {
                    delCodeValue(params).then(res => {
                        if (res.code == 200) {
                            that.$message.success('删除成功');
                            that.searchFn();
                        }
                    })
                },
                onCancel() { },
            });
        }
    },
    created() {
        this.search.categoryCode = this.$route.query.categoryCode;
    }
}