

export const columns = [
    {
        title: '考核模板名称',
        dataIndex: 'assessmentTemplateName'
    },
    {
        title: '员工工号',
        dataIndex: 'jobNumber'
    },
    {
        title: '员工itcode',
        dataIndex: 'itCode'
    },
    {
        title: '考核内容提交状态',
        dataIndex: 'status',
        sorter: true
    },
    {
        title: '操作类型',
        dataIndex: 'operationType',
        sorter: true
    },
    {
        title: '是否处理',
        dataIndex: 'isHandled',
        sorter: true
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        fixed: 'right',
        scopedSlots: { customRender: 'action' }
    }
]

