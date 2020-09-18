import { getCateValuePage,delCodeValue,tableCateDefault } from '@/api/user'
import addTableValue from './addTableValue/addTableValue.vue'
export default {
    name: 'tableCateValue',
    components: {
        addTableValue
    },
    data() {
        return {
            columns: [
                { title: '类别名称', dataIndex: 'categoryName'},
                { title: '码表code', dataIndex: 'codeKey'},
                { title: '码表值', dataIndex: 'codeValue'},
                { title: '是否默认', dataIndex: 'defaultStatus', scopedSlots: { customRender: 'defaultStatus' } },
                { title: '排序', dataIndex: 'sort'},
                { title: '操作', dataIndex: 'action', scopedSlots: { customRender: 'action' } },
            ],
            pagination: {},
            page: 1,
            pageSize: 10,
            loading: false,
            noticeData: [],
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
        handleTableChange(pagination) {
            const pager = { ...this.pagination };
            pager.current = pagination.current;
            this.pagination = pager;
            this.page = pagination.current
            this.pageSize = pagination.pageSize
            this.noticeDataLoad()
          },
        noticeDataLoad(page) {
            let params={
                "pageNo": page ? page : this.page,
                "pageSize": this.pageSize,
                filter:{}
            }
            this.loading = true;
            getCateValuePage(this.$route.query.categoryCode,params).then(res => {
              const pagination = { ...this.pagination };
              pagination.total = res.totalCount;
              pagination.current = params.pageNo
              this.page = params.pageNo
              this.loading = false;
              this.noticeData = res.records;
              this.pagination = pagination;
            })
          },
        onSelectChange(selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
        },
        resetFn() {
            this.search.codeValue = '';
            this.noticeDataLoad();
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
                        that.$message.success('删除成功');
                        that.noticeDataLoad();;
                    })
                },
                onCancel() { },
            });
        },
        //是否默认
        defaultChange(record) {
            record.defaultStatus = !record.defaultStatus
            console.log(record.defaultStatus)
            var params = {
                // id: record.id,
                // defaultStatus: record.defaultStatus ? 1 : 0
            }
            tableCateDefault(record.id,params).then(res => {
                this.$message.success("更新成功")
                this.noticeDataLoad();
            })
        },
    },
    created() {
        this.search.categoryCode = this.$route.query.categoryCode;
        this.noticeDataLoad()
        // fieldValueType=3&categoryCode=salesStatus&id=1298463369384169473&nodeLevel=1
    }
}