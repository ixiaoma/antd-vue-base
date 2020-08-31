
export const filterList = [
    {
        searchLabel: '类别编码',
        searchKey: 'categoryCode'
    },
    {
        searchLabel: '类别名称',
        searchKey: 'categoryName'
    },
    {
        searchLabel: '类别类型',
        searchKey: 'categoryType',
        searchType: 'Select',
        selectList: []
    }
]

export const columns = [
    {
        title: '类别编码',
        dataIndex: 'categoryCode'
    },
    {
        title: '类别名称',
        dataIndex: 'categoryName'
    },
    {
        title: '数据类型',
        dataIndex: 'fieldValueTypeStr'
    },
    {
        title: '节点层级',
        dataIndex: 'nodeLevel',
        sorter: true
    },
    {
        title: '所属类型',
        dataIndex: 'categoryTypeStr',
        sorter: true
    },
    {
        title: '操作',
        dataIndex: 'action',
        fixed: 'right',
        width: '150px',
        scopedSlots: { customRender: 'action' }
    }
]

export const result = {
    pageNo: 1,
    pageSize: 10,
    totalCount: 2,
    totalPage: 1,
    data: []
}
