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
    searchLabel: '上班',
    searchKey: 'goCompany',
    searchType: 'Select',
    selectList: [
      {
        key: '正常',
        value: '正常'
      }
    ]
  },
   {
    searchLabel: '下班',
    searchKey: 'backCompany',
    searchType: 'Select',
    selectList: [
      {
        key: '正常',
        value: '正常'
      }
    ]
  },
  {
    searchLabel: '考勤开始时间',
    searchKey: 'workDateStart',
    searchType: 'Time'
  },
  {
    searchLabel: '考勤结束时间',
    searchKey: 'workDateEnd',
    searchType: 'Time'
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
    title: '考勤日期',
    dataIndex: 'workDate'
  },
   {
    title: '上班',
    dataIndex: 'goCompany'
  },
  {
    title: '下班',
    dataIndex: 'backCompany'
  },
   {
    title: '出勤天数',
    dataIndex: 'goDay'
  },
  {
    title: '迟到次数',
    dataIndex: 'lateDay'
  },
  {
    title: '早退次数',
    dataIndex: 'leaveNumber'
  },
  {
    title: '旷工天数',
    dataIndex: 'leaveDay'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '240px',
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
            workDate:'2020-08-09',
            goCompany:'正常',
            backCompany:'正常',
            goDay:'1',
            lateDay:'0',
            leaveNumber:'0',
            leaveDay:'0'
          },
          {
           staffCode:'jiangyx2',
            staffName:'叶落森2',
            workDate:'2020-08-09',
            goCompany:'正常',
            backCompany:'正常',
            goDay:'1',
            lateDay:'0',
            leaveNumber:'0',
            leaveDay:'0'
          }
        ]
      }