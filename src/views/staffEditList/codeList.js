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
    searchLabel: '员工岗位',
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
    searchLabel: '员工职务',
    searchKey: 'staffzw'
  }, 
  {
    searchLabel: '员工职称',
    searchKey: 'staffzc'
  }, 
  {
    searchLabel: '员工职级',
    searchKey: 'staffzj'
  }, 
  {
    searchLabel: '人员类型',
    searchKey: 'staffType',
    searchType: 'Select',
    selectList: [
      {
        key: '实习生',
        value: '实习生'
      },
      {
        key: '正式员工',
        value: '正式员工'
      }
    ]
  }, 
  {
    searchLabel: '员工状态',
    searchKey: 'status',
    searchType: 'Select',
    selectList: [
      {
        key: '1',
        value: '在离'
      },
      {
        key: '2',
        value: '离职'
      }
    ]
  },
  
  {
    searchLabel: '选择机构',
    searchKey: 'selectType',
    searchType: 'Select',
    selectList: [
      {
        key: '实习生',
        value: '实习生'
      },
      {
        key: '正式员工',
        value: '正式员工'
      }
    ]
  },
  // {
  //   searchLabel: '使用时间',
  //   searchKey: 'timer',
  //   searchType: 'Time'
  // }
]

export const columns = [
  // {
  //   title: '#',
  //   scopedSlots: { customRender: 'serial' }
  // },
  {
    title: '工号',
    dataIndex: 'staffCode'
  },
  {
    title: '姓名',
    dataIndex: 'staffName'
  },
  {
    title: '部门',
    dataIndex: 'staffDept'
  },
  {
    title: '岗位',
    dataIndex: 'staffJob'
  },
  {
    title: '职务',
    dataIndex: 'staffzw'
  },
  {
    title: '职位',
    dataIndex: 'staffzww'
  },
  {
    title: '人员类型',
    dataIndex: 'staffType'
  },
  {
    title: '工种',
    dataIndex: 'jobCity'
  },
  {
    title: '关联用户编号',
    dataIndex: 'itcode'
  },
  {
    title: '状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '创建人',
    dataIndex: 'creater'
  },
  // {
  //   title: '更新时间',
  //   dataIndex: 'updatedAt',
  //   sorter: true
  // },
]