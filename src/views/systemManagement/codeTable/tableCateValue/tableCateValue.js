import { getCateValuePage,delCodeValue } from '@/api/user'
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
                { title: '上级码表值', dataIndex: 'fatherCodeValue', scopedSlots: { customRender: 'fatherCodeValueSlots' } },
                { title: '排序', dataIndex: 'sort'},
                { title: '操作', dataIndex: 'action', scopedSlots: { customRender: 'operationSlots' } },
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
                "take": 20,
                "skip": 0,
                "page": page ? page : this.page,
                "pageSize": this.pageSize,
                "searchFilter": {
                    "filters": [],
                    "logic": "and"
                },
                "objectType": "202",
                "conditionId": "",
                "categoryCode": this.search.categoryCode,
                "codeValue": this.search.codeValue,
                "cityLevel": null,
                "countyLevel": null,
                "enabled": this.search.enabled,
                "operationCityLevel": null,
                "physicalPartition": null,
                "regin": null
            }
            this.loading = true;
            getCateValuePage(params).then(res => {
              const pagination = { ...this.pagination };
              pagination.total = res.data.totalCount;
              pagination.current = params.page
              this.page = params.page
              this.loading = false;
              this.noticeData = res.data.records;
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
                        if (res.code == 200) {
                            that.$message.success('删除成功');
                            that.noticeDataLoad();;
                        }
                    })
                },
                onCancel() { },
            });
        }
    },
    created() {
        this.search.categoryCode = this.$route.query.categoryCode;
        this.noticeDataLoad()
        // fieldValueType=3&categoryCode=salesStatus&id=1298463369384169473&nodeLevel=1
    }
}