
    export const filterList = [
        {
          searchLabel: '员工工号',
          searchKey: 'staffCode'
        },
        {
            searchLabel: '手机号码',
            searchKey: 'staffPhone'
        }
      ]
    
      export const columns = [
        {
          title: '员工工号',
          dataIndex: 'staffCode'
        },
        {
          title: '姓名',
          dataIndex: 'staffName'
        },
        {
          title: '手机号',
          dataIndex: 'staffPhone'
        },
        {
          title: '部门',
          dataIndex: 'staffDept'
        },
        {
          title: '聘用形式',
          dataIndex: 'workType'
        },
        {
          title: '入职时间',
          dataIndex: 'goCompanyDate'
        },
        {
          title: '进行中绩效',
          dataIndex: 'pendingAchievenmnt'
        },
        {
          title: '最近绩效方案',
          dataIndex: 'latelyProgramme'
        },
         {
          title: '最近绩效等级及分数',
          dataIndex: 'latelyGrade'
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
            staffCode:'jiangyx',
            staffName:'叶落森',
            staffDept:'研发中心',
            staffPhone:'13666666666',
            workType:'正式',
            goCompanyDate:'2020-08-01',
            pendingAchievenmnt:'hro开发',
            latelyProgramme:'画静态页面',
            latelyGrade:'98'
          },
          {
            staffCode:'jiangyx2',
            staffName:'叶落森2',
            staffDept:'研发中心',
            staffPhone:'13666668888',
            workType:'正式',
            goCompanyDate:'2020-08-01',
            pendingAchievenmnt:'hro开发',
            latelyProgramme:'画静态页面',
            latelyGrade:'95'
          }
        ]
      }
    