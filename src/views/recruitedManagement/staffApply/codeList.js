
    export const filterList = [
        {
          searchLabel: '申请部门',
          searchKey: 'applyDept'
        },
        {
          searchLabel: '申请人',
          searchKey: 'applyPersonal'
        },
        {
          searchLabel: '申请日期',
          searchKey: 'applyDate',
          searchType: 'Time'
        },
        {
          searchLabel: '申请人数',
          searchKey: 'applyNumber'
        },
      ]
    
      export const columns = [
        {
          title: '序号',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '申请编号',
          dataIndex: 'applyCode'
        },
        {
          title: '申请部门',
          dataIndex: 'applyDept'
        },
        {
          title: '申请岗位',
          dataIndex: 'applyJob'
        },
        {
          title: '申请人',
          dataIndex: 'applyPersonal'
        },
        {
          title: '申请人数',
          dataIndex: 'applyNumber'
        },
        {
          title: '申请日期',
          dataIndex: 'applyDate',
          sorter: true
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
            applyCode:'HT20170823',
            applyPersonal:'叶落森',
            applyDept:'研发中心',
            applyJob:'前端开发',
            applyNumber:'2',
            applyDate:'2020-08-09'
          },
          {
            applyCode:'HT20170888',
            applyPersonal:'叶落森2',
            applyDept:'研发中心',
            applyJob:'前端开发',
            applyNumber:'7',
            applyDate:'2020-08-09'
          }
        ]
      }
    