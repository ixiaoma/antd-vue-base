
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
          searchLabel: '员工姓名',
          searchKey: 'staffName'
        }      
      ]
    
      export const columns = [
        {
          title: '合同编号',
          dataIndex: 'agreeCode'
        },
        {
          title: '合同名称',
          dataIndex: 'agreeName'
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
          title: '合同状态',
          dataIndex: 'agreeStatus'
        },
        {
          title: '是否转正',
          dataIndex: 'isTrue'
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
            agreeCode:'HT20170823',
            agreeName:'员工劳动合同',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreeStatus:'生效中',
            isTrue:'已转正'
          },
          {
            agreeCode:'BM20170823',
            agreeName:'公司保密合同',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreeStatus:'生效中',
            isTrue:'已转正'
          }
        ]
      }
    