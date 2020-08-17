
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
          searchLabel: '奖惩类型',
          searchKey: 'type',
          searchType: 'Select',
          selectList: [
            {
              key: '1',
              value: '奖励'
            },
            {
              key: '2',
              value: '惩罚'
            }
          ]
        },
        {
            searchLabel: '离职时间(开始)',
            searchKey: 'quitDateStart',
            searchType: 'Time'
        },
        {
          searchLabel: '离职时间(结束)',
          searchKey: 'quitDateEnd',
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
          title: '部门',
          dataIndex: 'staffDept'
        },
        {
          title: '岗位',
          dataIndex: 'staffJob'
        },
        {
          title: '奖惩类别',
          dataIndex: 'type'
        },
        {
          title: '奖惩内容',
          dataIndex: 'contact'
        },
        {
          title: '录入时间',
          dataIndex: 'insertDate',
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
        data:[
          {
            staffCode:'HT20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            staffJob:'前端开发',
            type:'奖励',
            contact:'奖励',
            insertDate:'2020-08-09 12:00:00'
          },
          {
            staffCode:'BM20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            staffJob:'前端开发',
            type:'奖励',
            contact:'奖励',
            insertDate:'2020-08-09 12:00:00'
          }
        ]
      }
    