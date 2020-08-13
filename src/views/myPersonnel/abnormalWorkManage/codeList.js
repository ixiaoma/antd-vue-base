
    export const filterList = [
        {
          searchLabel: '异常类型',
          searchKey: 'abnormalType'
        },
        {
            searchLabel: '日期',
            searchKey: 'timer',
            searchType: 'Time'
        }
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
          title: '异常日期',
          dataIndex: 'abnormalDate'
        },
        {
          title: '异常类型',
          dataIndex: 'abnormalType'
        },
         {
          title: '部门负责人',
          dataIndex: 'deptLeader'
        },
        {
          title: '人事负责人',
          dataIndex: 'personnelLeader'
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
            staffName:'叶落森',
            staffCode:'jiangyx',
            abnormalDate:'2020-08-08',
            abnormalType:'时间异常',
            deptLeader:'张三',
            personnelLeader:'李四'      
          },
          {
            staffName:'叶落森2',
            staffCode:'jiangyx2',
            abnormalDate:'2020-08-08',
            abnormalType:'时间异常',
            deptLeader:'张三2',
            personnelLeader:'李四'
          }
        ]
      }
    