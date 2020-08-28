
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
          searchLabel: '员工手机号',
          searchKey: 'staffPhone'
        }
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
          title: '模板名称',
          dataIndex: 'templateName'
        },
        {
          title: '模板编号',
          dataIndex: 'templateCode'
        }, 
        {
          title: '状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
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
            staffCode:'HT20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            templateCode:'MB1234',
            templateName:'正式',
            status:0
          },
          {
            staffCode:'BM20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            templateCode:'MB1234',
            templateName:'正式',
            status:0
          }
        ]
      }
    