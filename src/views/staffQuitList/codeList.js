export const filterList = [
  {
    searchLabel: '员工工号',
    searchKey: 'staffCode'
  },
  {
    searchLabel: '员工姓名',
    searchKey: 'staffName'
  },
  {
    searchLabel: '员工部门',
    searchKey: 'staffDept'
  }, 
  {
    searchLabel: '离职类型',
    searchKey: 'staffJob',
    searchType: 'Select',
    selectList: [
      {
        key: '前端开发',
        value: '前端开发'
      }
    ]
  },
  {
    searchLabel: '离职开始时间',
    searchKey: 'timeStart',
    searchType: 'Time'
  },
  {
    searchLabel: '离职结束时间',
    searchKey: 'timeEnd',
    searchType: 'Time'
  }
]

export const columns = [
  {
    title: '序号',
    scopedSlots: { customRender: 'serial' }
  },
  {
    title: '员工工号',
    dataIndex: 'staffCode'
  },
  {
    title: '员工姓名',
    dataIndex: 'staffName'
  },
  {
    title: '员工部门',
    dataIndex: 'staffDept'
  },
  {
    title: '离职类型',
    dataIndex: 'staffType'
  },
  {
    title: '离职时间',
    dataIndex: 'updatedAt',
    sorter: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' }
  }
]