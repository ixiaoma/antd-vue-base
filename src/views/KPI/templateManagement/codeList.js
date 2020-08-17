
    export const filterList = [
      {
        title: '模板编号',
        dataIndex: 'templateCode'
      },
      {
        title: '模板名称',
        dataIndex: 'templateName'
      }
      ]
    
      export const columns = [
        {
          title: '序号',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '模板编号',
          dataIndex: 'templateCode'
        }, 
        {
          title: '模板名称',
          dataIndex: 'templateName'
        },
        
        {
          title: '开始时间',
          dataIndex: 'startDate',
          sorter: true
        },
        {
          title: '结束时间',
          dataIndex: 'endDate',
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
            templateCode:'MB1234',
            templateName:'正式',
            startDate:'2020-08-09',
            endDate:'2022-08-09'
          },
          {
            templateCode:'MB1234',
            templateName:'正式',
            startDate:'2020-08-09',
            endDate:'2022-08-09'
          }
        ]
      }
    