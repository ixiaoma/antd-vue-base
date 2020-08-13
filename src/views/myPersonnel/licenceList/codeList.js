
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
          searchLabel: '证件名称',
          searchKey: 'licenceName'
        },
        {
            searchLabel: '生效日期',
            searchKey: 'licenceTimeStart',
            searchType: 'Time'
        },
         {
            searchLabel: '到期日期',
            searchKey: 'licenceTimeEnd',
            searchType: 'Time'
        }
      ]
    
      export const columns = [
        {
          title: '员工姓名',
          dataIndex: 'staffName'
        },
        {
          title: '证件编号',
          dataIndex: 'licenceCode'
        },
        {
          title: '证件名称',
          dataIndex: 'licenceName'
        },
        {
          title: '生效日期',
          dataIndex: 'licenceTimeStart'
        },
        {
          title: '到期日期',
          dataIndex: 'licenceTimeEnd'
        },
        {
          title: '状态',
          dataIndex: 'licenceStatus'
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
            licenceCode:'370682199612081121',
            licenceName:'身份证',
            staffName:'叶落森',
            licenceStatus:'生效中',
            isTrue:'已转正',
            licenceTimeStart:'2008-01-09',
            licenceTimeEnd:'2022-08-09'
          },
          {
            licenceCode:'370682199612081121',
            licenceName:'身份证',
            staffName:'叶落森',
            licenceStatus:'生效中',
            isTrue:'已转正',
            licenceTimeStart:'2008-01-09',
            licenceTimeEnd:'2022-08-09'
          }
        ]
      }
    