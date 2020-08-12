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
    searchLabel: '入职类型',
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
    searchLabel: '入职开始时间',
    searchKey: 'timeStart',
    searchType: 'Time'
  },
  {
    searchLabel: '入职结束时间',
    searchKey: 'timeEnd',
    searchType: 'Time'
  },
  {
    searchLabel: '审批状态',
    searchKey: 'approvalStatus',
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
    title: '入职类型',
    dataIndex: 'staffType'
  },
  {
    title: '入职时间',
    dataIndex: 'staffEditDate',
    sorter: true
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
        data:[
          {
            staffCode:'jiangyx',
            staffName:'叶落森',
            staffDept:'研发中心',
            staffEditDate:'2020-08-08',
            staffType:'前端开发',
            jobCity:'北京',
            itcode:'jiangyx',
            status:0,
            approvalStatus:'通过'        
          },
          {
            staffCode:'jiangyx2',
            staffName:'叶落森2',
            staffDept:'研发中心',
            staffEditDate:'2020-08-08',
            staffType:'前端开发',
            jobCity:'北京',
            itcode:'jiangyx2',
            status:0,
            approvalStatus:'通过'
          }
        ]
      }