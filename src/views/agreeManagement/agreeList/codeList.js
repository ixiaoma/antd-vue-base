
    export const filterList = [
        {
          searchLabel: '合同编号',
          searchKey: 'agreeCode'
        },
        {
          searchLabel: '合同名称',
          searchKey: 'agreeName'
        },
        {
          searchLabel: '合同类型',
          searchKey: 'agreeType',
          searchType: 'Select',
          selectList: [
            {
              key: '劳务合同',
              value: '劳务合同'
            },
            {
              key: '保密协议',
              value: '保密协议'
            },
            {
              key: '实习协议',
              value: '实习协议'
            }
          ]
        },
        {
          searchLabel: '合同状态',
          searchKey: 'agreeStatus',
          searchType: 'Select',
          selectList: [
            {
              key: '1',
              value: '生效'
            },
            {
              key: '2',
              value: '失效'
            }
          ]
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
          searchLabel: '生效日期',
          searchKey: 'licenceTimeStart',
          searchType: 'Time'
      },
       {
          searchLabel: '到期日期',
          searchKey: 'licenceTimeEnd',
          searchType: 'Time'
      }
      ]
    
      export const columns = [
        {
          title: '员工姓名',
          dataIndex: 'staffName'
        },
        {
          title: '合同类型',
          dataIndex: 'agreeType'
        },
        {
          title: '合同编号',
          dataIndex: 'agreeCode'
        },
        {
          title: '合同名称',
          dataIndex: 'agreeName'
        },
        {
          title: '试用期到期时间',
          dataIndex: 'licenceTime'
        },
        {
          title: '员工部门',
          dataIndex: 'staffDept'
        },
        {
          title: '合同状态',
          dataIndex: 'agreeStatus'
        },
        {
          title: '附件名称',
          dataIndex: 'fileName'
        },
        {
          title: '是否转正',
          dataIndex: 'isTrue'
        },
        {
          title: '简历状态',
          dataIndex: 'resumeStatus'
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
            id:'12345678',
            agreeCode:'HT20170823',
            agreeName:'员工劳动合同',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreeStatus:'生效中',
            isTrue:'已转正',
            agreeType:'劳务合同',
            licenceTime:'2020-08-08',
            resumeStatus:'通过',
            fileName:''
          },
          {
            id:'23456789',
            agreeCode:'BM20170823',
            agreeName:'公司保密合同',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreeStatus:'生效中',
            isTrue:'已转正',
            agreeType:'劳务合同',
            licenceTime:'2020-08-08',
            resumeStatus:'通过',
            fileName:''
          }
        ]
      }
    