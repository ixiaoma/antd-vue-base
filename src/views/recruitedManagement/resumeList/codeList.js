
    export const filterList = [
      {
        searchLabel: '姓名',
        searchKey: 'resumeName'
      },
      {
        searchLabel: '学历',
        searchKey: 'education'
      },
      {
        searchLabel: '应聘岗位',
        searchKey: 'job'
      },
      {
        searchLabel: '手机号',
        searchKey: 'phone'
      },
    ]
  
    export const columns = [
      {
        title: '序号',
        scopedSlots: { customRender: 'serial' }
      },
      {
        title: '姓名',
        dataIndex: 'resumeName'
      },
      {
        title: '手机号',
        dataIndex: 'phone'
      },
      {
        title: '学历',
        dataIndex: 'education'
      },
      {
        title: '应聘岗位',
        dataIndex: 'job'
      },
      {
        title: '工作年限',
        dataIndex: 'workyear'
      },
      {
        title: '简历编号',
        dataIndex: 'resumeCode'
      },
      {
        title: '简历类型',
        dataIndex: 'resumeType'
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
      records:[
        {
          resumeCode:'HT20170823',
          resumeName:'叶落森',
          phone:'13555555555',
          education:'本科',
          job:'前端开发工程师',
          workyear:'3',
          resumeType:'正式',
          resumeStatus:'正常'
        },
        {
          resumeCode:'HT20170863',
          resumeName:'叶落森2',
          phone:'13555555555',
          education:'大专',
          job:'前端开发工程师',
          workyear:'3',
          resumeType:'正式',
          resumeStatus:'正常'
        }
      ]
    }
  