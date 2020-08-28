
    export const filterList = [
        {
          searchLabel: '职级名称',
          searchKey: 'staffCode'
        }
      ]
    
      export const columns = [
        {
          title: '序号',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '职级名称',
          dataIndex: 'titleName'
        },
        {
          title: '职级奖金',
          dataIndex: 'titleBonus'
        },
        {
          title: '说明',
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        }
      ]

      export const result={
        pageNo: 1,
        pageSize: 10,
        totalCount: 2,
        totalPage: 1,
        records:[
          {
            titleName:'初级前端开发工程师',
            titleBonus:'3000',
            description:''
          },
          {
            titleName:'中级前端开发工程师',
            titleBonus:'6000',
            description:''
          }
        ]
      }
    