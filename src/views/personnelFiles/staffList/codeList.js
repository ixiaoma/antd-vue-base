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
      searchLabel: '员工部门',
      searchKey: 'staffDept'
    }, 
    {
      searchLabel: '员工岗位',
      searchKey: 'staffJob',
      searchType: 'Select',
      selectList: [
        {
          key: '前端开发',
          value: '前端开发'
        }
      ]
    },
    {
      searchLabel: 'ITCode',
      searchKey: 'itcode'
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
      searchLabel: '档案状态',
      searchKey: 'archivesStatus',
      searchType: 'Select',
      selectList: [
        {
          key: '1',
          value: '驳回'
        },
        {
          key: '2',
          value: '通过'
        }
      ]
    },
    {
      searchLabel: '人员类型',
      searchKey: 'staffType',
      searchType: 'Select',
      selectList: [
        {
          key: '实习生',
          value: '实习生'
        },
        {
          key: '正式员工',
          value: '正式员工'
        }
      ]
    }
  ]

  export const columns = [
    {
      title: '工号',
      dataIndex: '4'
    },
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '部门',
      dataIndex: '6'
    },
    {
      title: '岗位',
      dataIndex: 'staffJob'
    },
    {
      title: '人员类型',
      dataIndex: 'staffType'
    },
    {
      title: 'ITcode',
      dataIndex: 'itcode'
    },
    {
      title: '状态',
      dataIndex: 'status',
      scopedSlots: { customRender: 'status' }
    },
    {
      title: '档案状态',
      dataIndex: 'archivesStatus'
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: '100px',
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
            staffDept:'研发中心',
            staffJob:'前端开发',
            staffType:'前端开发',
            jobCity:'北京',
            itcode:'jiangyx',
            status:2,
            archivesStatus:'正常'        
          },
          {
            staffCode:'jiangyx2',
            staffName:'叶落森2',
            staffDept:'研发中心',
            staffJob:'前端开发',
            staffType:'前端开发',
            jobCity:'北京',
            itcode:'jiangyx2',
            status:2,
            archivesStatus:'正常'
          }
        ]
      }