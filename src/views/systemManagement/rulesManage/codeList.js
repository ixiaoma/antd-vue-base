
    export const filterList = [
        {
          searchLabel: '栏目编号',
          searchKey: 'code'
        },
        {
          searchLabel: '标题',
          searchKey: 'title'
        },
        {
          searchLabel: '可见范围',
          searchKey: 'visibleRange',
          searchType: 'Select',
          selectList: [
            {
              key: '1',
              value: '全部用户'
            },
            {
              key: '2',
              value: '研发中心'
            }
          ]
        }
      ]
    
      export const columns = [
        {
          title: '栏目编号',
          dataIndex: 'code'
        },
        {
          title: '标题',
          dataIndex: 'title'
        },
        {
          title: '可见范围',
          dataIndex: 'visibleRange'
        },
        {
          title: '创建时间',
          dataIndex: 'createDate',
          sorter: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ]
      
      export const detailColumns = [
        {
          title: '标题',
          dataIndex: 'title'
        },     
        {
          title: '创建时间',
          dataIndex: 'createDate'
        },
        {
          title: '创建人',
          dataIndex: 'creater'
        },
        {
          title:'附件预览',
          dataIndex: 'file',
          scopedSlots: { customRender: 'file' }
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
            code:'寄包员工作规',
            title:'20101012',
            visibleRange:'全部用户',
            createDate:'2020-08-09 00:00:00'
          },
          {
            code:'信息部系统操作规范',
            title:'20101013',
            visibleRange:'全部用户',
            createDate:'2020-08-09 00:00:00'
          }
        ]
      }
      export const detailData=[
          {
            id:'1',
            title:'标题1',
            creater:'jiangyx',
            createDate:'2020-08-09 00:00:00',
            file:'文件1'
          },
          {
            id:'2',
            title:'标题2',
            creater:'jiangyx',
            createDate:'2020-08-10 12:00:00',
            file:'文件2'
          }
        ]
      
      
    