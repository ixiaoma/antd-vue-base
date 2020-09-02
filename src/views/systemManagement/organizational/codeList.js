export const columns=[
    {
        title: '姓名',
        dataIndex: 'realName',
    },
    {
        title: '昵称',
        dataIndex: 'username'
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
    },
    // {
    //     title: '在职状态',
    //     dataIndex: 'incumbency',
    //     scopedSlots: { customRender: 'incumbencyName' },
    // },
    {
        title: '状态',
        dataIndex: 'enabled',
        scopedSlots: { customRender: 'enabled' },
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        fixed: 'right',
        scopedSlots: { customRender: 'action' }
    }
]

export const result={
    pageNo: 1,
    pageSize: 10,
    totalCount: 2,
    totalPage: 1,
    records: [
        {
            id: '11',
            staffCode: 'jiangyx',
            staffName: '叶落森',
            staffDept: '研发中心',
            staffEditDate: '2020-08-08',
            staffType: '前端开发',
            jobCity: '北京',
            itcode: 'jiangyx',
            status: 0,
            approvalStatus: '通过',
            enabled:1
        },
        {
            id: '22',
            staffCode: 'jiangyx2',
            staffName: '叶落森2',
            staffDept: '研发中心',
            staffEditDate: '2020-08-08',
            staffType: '前端开发',
            jobCity: '北京',
            itcode: 'jiangyx2',
            status: 0,
            approvalStatus: '通过',
            enabled:1
        }
    ]
}

export const treeData=[
    {
        title: '全公司',
        key: '0',
        children: [
            { title: '研发中心', key: '11' },
            { title: '开发一处', key: '12' },
            { title: '开发二处', key: '13' },
            { title: '运营部门', key: '14' }
        ],
    }
]