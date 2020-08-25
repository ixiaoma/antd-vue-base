
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
          searchLabel: '状态',
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
            searchLabel: '使用时间',
            searchKey: 'timer',
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
          title: '描述',
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        },
        {
          title: '服务调用次数',
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + ' 次'
        },
        {
          title: '状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
          sorter: true
        }
      ]

      export const result={
        pageNo: 1,
        pageSize: 10,
        totalCount: 2,
        totalPage: 1,
        data:[
          {
            staffCode:'HT20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreestatus:'生效中',
            isTrue:'已转正',
            status:0
          },
          {
            staffCode:'BM20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreestatus:'生效中',
            isTrue:'已转正',
            status:0
          }
        ]
      }
    