
    export const filterList = [
      {
        searchLabel: '姓名',
        searchKey: 'name'
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
        searchLabel: '简历类型',
        searchKey: 'interviewType'
      },
      {
        searchLabel: '面试结果',
        searchKey: 'interviewResult'
      }
    ]
  
    export const columns = [
      {
        title: '序号',
        scopedSlots: { customRender: 'serial' }
      },
      {
        title: '姓名',
        dataIndex: 'name'
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
        title: '预约状态',
        dataIndex: 'subscribeStatus'
      },
      {
        title: '面试结果',
        dataIndex: 'interviewResult'
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: '200px',
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
          name:'叶落森',
          phone:'13555555555',
          education:'本科',
          job:'前端开发工程师',
          workyear:'3',
          subscribeStatus:'已预约',
          interviewResult:'录用'
        },
        {
          name:'叶落森2',
          phone:'13556666555',
          education:'本科',
          job:'前端开发工程师',
          workyear:'3',
          subscribeStatus:'已预约',
          interviewResult:'录用'
        }
      ]
    }
  