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
    searchLabel: '工作城市',
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
    title: '工作城市',
    dataIndex: 'jobCity'
  },
  {
    title: 'ITcode',
    dataIndex: 'itcode'
  },
  {
    title: '状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '审批状态',
    dataIndex: 'approvalStatus'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '80px',
    scopedSlots: { customRender: 'action' }
  }
]

export const result={
        pageNo: 1,
        pageSize: 10,
        totalCount: 2,
        totalPage: 1,
        records:[
          {
            staffCode:'jiangyx',
            staffName:'叶落森',
            staffDept:'研发中心',
            staffJob:'前端开发',
            staffType:'前端开发',
            jobCity:'北京',
            itcode:'jiangyx',
            status:2,
            approvalStatus:'通过'        
          },
          {
            staffCode:'jiangyx2',
            staffName:'叶落森2',
            staffDept:'研发中心',
            staffJob:'前端开发',
            staffType:'前端开发',
            jobCity:'北京',
            itcode:'jiangyx2',
            status:2,
            approvalStatus:'通过'
          }
        ]
      }