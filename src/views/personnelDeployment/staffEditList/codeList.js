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
    searchLabel: '调动类型',
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
    searchLabel: '调动开始时间',
    searchKey: 'timeStart',
    searchType: 'Time'
  },
  {
    searchLabel: '调动结束时间',
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
    title: '员工姓名',
    dataIndex: 'staffName'
  },
  {
    title: '调动编号',
    dataIndex: 'staffCode'
  },
  {
    title: '调动类型',
    dataIndex: 'staffDept'
  },
  {
    title: '调动时间',
    dataIndex: 'staffEditDate'
  },
  {
    title: '现人员类型',
    dataIndex: 'staffType'
  },
  {
    title: '调动状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' }
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
        records:[
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