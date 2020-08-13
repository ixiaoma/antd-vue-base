
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
          searchLabel: 'ITCode',
          searchKey: 'itcode'
        },
        {
          searchLabel: '休假类型',
          searchKey: 'vacationType',
          searchType: 'Select',
          selectList: [
            {
              key: '1',
              value: '事假'
            },
            {
              key: '2',
              value: '调休'
            }
          ]
        },
        {
            searchLabel: '时长',
            searchKey: 'timeLength'
        }
      ]
    
      export const columns = [
        {
          title: '工号',
          dataIndex: 'staffCode'
        },
        {
          title: '姓名',
          dataIndex: 'staffName'
        },
        {
          title: '休假类型',
          dataIndex: 'vacationType'
        },
        {
          title: '开始时间',
          dataIndex: 'vacationTimeStart'
        },
        {
          title: '结束时间',
          dataIndex: 'vacationTimeEnd'
        },
        {
          title: '时长',
          dataIndex: 'timeLength'
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
        data:[
          {
            staffName:'叶落森',
            staffCode:'jiangyx',
            vacationType:'调休',
            vacationTimeStart:'2020-08-08 09:00:00',
            vacationTimeEnd:'2020-08-08 18:00:00',
            timeLength:'8',
          },
          {
            staffName:'叶落森2',
            staffCode:'jiangyx2',
            vacationType:'调休',
            vacationTimeStart:'2020-08-08 09:00:00',
            vacationTimeEnd:'2020-08-08 18:00:00',
            timeLength:'8',
          }
        ]
      }
    