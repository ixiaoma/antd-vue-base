import { STable } from '@/components'
import { getCategoryPage,deleteCategory } from '@/api/systemManage'
import addTableCategories from './addTableCategories/addTableCategories.vue'
export default {
    name: 'tableCategory',
    components: {
        STable,
        addTableCategories
    },
    data() {
        return {
            columns: [
                { title: '类别编码', dataIndex: 'categoryCode' },
                { title: '类别名称', dataIndex: 'categoryName' },
                { title: '数据类型', dataIndex: 'fieldValueTypeStr' },
                { title: '节点层级', dataIndex: 'nodeLevel' },
                // { title: '所属类型', dataIndex: '5' },
                { title: '操作', dataIndex: 'action', scopedSlots: { customRender: 'operationSlots' } },
            ],
            loadData: parameter => {
                const searchArr = []
                const params = { ...parameter, ...this.search, searchFilter: { filters: searchArr, logic: "and" } }
                return getCategoryPage(params).then(res => {
                    return res
                })
            },
            selectedRowKeys: [],
            selectedRows: [],
            search: {
                categoryCode: '',
                categoryName: '',
            },
            selectOption: [
                { id: "1", name: '公有' },
                { id: "2", name: '私有' },
            ],
        }
    },
    methods: {
        onSelectChange(selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
        },
        searchFn() {//查询
            this.$refs.table.refresh()
        },
        restFn() {//重置
            this.search = {
                categoryCode: '',
                categoryName: '',
            }
            this.$refs.table.refresh()
        },
        addCategories() {//新建
            this.$refs.addTableCategories.showModal('add');
        },
        editCategories(data) {//编辑
            this.$refs.addTableCategories.showModal('edit', data);
        },
        deleteCategories(data) {//删除
            let that = this;
            this.$confirm({
                title: '温馨提示',
                content: '确认删除？删除后数据无法恢复！',
                okText: '确认',
                okType: 'danger',
                cancelText: '取消',
                onOk() {
                    deleteCategory(data.id).then(res => {
                        if (res.code == 200) {
                            that.$message.success('删除成功');
                            that.searchFn();
                        }
                    })
                },
                onCancel() { },
            });
        },
        tableValueManage() {//码表值管理
            if(this.selectedRows.length != 1) {
                this.$message.warning('请选择一条要操作的数据');
                return ;
            }
            this.$router.push({ 
                name: 'tableCateValue',
                query:{
                    categoryCode:this.selectedRows[0].categoryCode,
                    codeCategoryId:this.selectedRows[0].id,
                    fieldValueType:this.selectedRows[0].fieldValueType,
                    nodeLevel:this.selectedRows[0].nodeLevel
                }
            });
        }
    }
}