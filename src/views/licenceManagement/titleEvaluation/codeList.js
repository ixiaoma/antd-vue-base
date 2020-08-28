
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
          searchLabel: '取得职称',
          searchKey: 'obtainName'
        },
        {
          searchLabel: '取得方式',
          searchKey: 'obtainMode'
        },
        {
            searchLabel: '取得生效时间',
            searchKey: 'obtainDateStart',
            searchType: 'Time'
        },
        {
          searchLabel: '取得失效时间',
          searchKey: 'obtainDateEnd',
          searchType: 'Time'
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
          title: '取得职称',
          dataIndex: 'obtainName'
        },
        {
          title: '取得方式',
          dataIndex: 'obtainMode'
        },
        {
          title: '取得时间',
          dataIndex: 'obtainDate',
          sorter: true
        },
        {
          title: '下次申报职称',
          dataIndex: 'nextDeclareName'
        },
        {
          title: '下次申报时间',
          dataIndex: 'nextDeclareDate',
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
            staffCode:'HT20170823',
            staffName:'叶落森',
            obtainName:'前端中级开发工程师',
            obtainMode:'网上考核',
            obtainDate:'2020-08-08',
            nextDeclareName:'前端高级级开发工程师',
            nextDeclareDate:'2021-08-08'
          },
          {
            staffCode:'HT20170888',
            staffName:'叶落森2',
            obtainName:'前端中级开发工程师',
            obtainMode:'网上考核',
            obtainDate:'2020-08-08',
            nextDeclareName:'前端高级级开发工程师',
            nextDeclareDate:'2021-08-08'
          }
        ]
      }
    