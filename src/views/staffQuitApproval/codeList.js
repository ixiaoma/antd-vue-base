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
  },
  {
    searchLabel: '审批状态',
    searchKey: 'dastatus',
    searchType: 'Select',
    selectList: [
      {
        key: '1',
        value: '驳回'
      },
      {
        key: '2',
        value: '通过'
      }
    ]
  },
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
    title: '审批状态',
    dataIndex: 'apprivalstatus'
  },
  {
    title: '离职时间',
    dataIndex: 'updatedAt',
    sorter: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '80px',
    scopedSlots: { customRender: 'action' }
  }
]