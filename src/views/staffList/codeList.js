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
      searchLabel: 'ITCode',
      searchKey: 'itcode'
    }, 
    {
      searchLabel: '状态',
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
      searchLabel: '档案状态',
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
      title: '人员类型',
      dataIndex: 'staffType'
    },
    {
      title: 'ITcode',
      dataIndex: 'itcode'
    },
    // {
    //   title: '描述',
    //   dataIndex: 'description',
    //   scopedSlots: { customRender: 'description' }
    // },
    // {
    //   title: '服务调用次数',
    //   dataIndex: 'callNo',
    //   sorter: true,
    //   needTotal: true,
    //   customRender: (text) => text + ' 次'
    // },
    {
      title: '状态',
      dataIndex: 'status',
      scopedSlots: { customRender: 'status' }
    },
    {
      title: '档案状态',
      dataIndex: 'dastatus'
    },
    // {
    //   title: '更新时间',
    //   dataIndex: 'updatedAt',
    //   sorter: true
    // },
    {
      title: '操作',
      dataIndex: 'action',
      width: '150px',
      scopedSlots: { customRender: 'action' }
    }
  ]