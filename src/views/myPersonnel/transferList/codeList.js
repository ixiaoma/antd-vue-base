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
    searchLabel: '现人员类型',
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
    searchLabel: '调动状态',
    searchKey: 'transferStatus',
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
    searchLabel: '调动类型',
    searchKey: 'transferType',
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
    searchLabel: '调动开始时间',
    searchKey: 'transferTimeStart',
    searchType: 'Time'
  },
  {
    searchLabel: '调动结束时间',
    searchKey: 'transferTimeEnd',
    searchType: 'Time'
  }
]

export const columns = [
  {
    title: '序号',
    scopedSlots: { customRender: 'serial' }
  },
  {
    title: '员工姓名',
    dataIndex: 'staffName'
  },
  {
    title: '调动编号',
    dataIndex: 'transferCode'
  },
  {
    title: '调动类型',
    dataIndex: 'transferType'
  },
  {
    title: '调动时间',
    dataIndex: 'transferTime'
  },
  {
    title: '现人员类型',
    dataIndex: 'transferType'
  },
  {
    title: '调动状态',
    dataIndex: 'transferStatus'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
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
            transferCode:'LG000001',
            transferType:'轮岗',
            staffName:'叶落森',
            transferStatus:'生效中',
            isTrue:'已转正',
            transferTime:'2008-01-09',
            transferType:'前端开发'
          },
          {
            transferCode:'LG000002',
            transferType:'轮岗',
            staffName:'叶落森',
            transferStatus:'生效中',
            isTrue:'已转正',
            transferTime:'2008-01-09',
            transferType:'前端开发'
          }
        ]
      }