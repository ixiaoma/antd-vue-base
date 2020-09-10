
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
          title: '工作城市',
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        },
        {
          title: '报销月份',
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + ' 次'
        },
        {
          title: '费用报销合计',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '补贴报销合计',
          dataIndex: 'updatedAt',
          sorter: true
        },
        {
          title: '提交时间',
          dataIndex: 'at',
          sorter: true
        },
        {
          title: '审批状态',
          dataIndex: 'a',
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
        records:[
          {
            staffCode:'HT20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreestatus:'生效中',
            isTrue:'已转正',
            status:0,
          },
          {
            staffCode:'BM20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreestatus:'生效中',
            isTrue:'已转正',
            status:0,
          }
        ]
      }





export const typeList = [
  {
    name: '团建' , 
    type: 1 , 
    columns:[
      {
        title: '部门',
        dataIndex: 'callNo'
      },
      {
        title:'活动日期',
        dataIndex: 'date' 
      },
      {
        title: '活动天数',
        dataIndex: 'day'
      },
      {
        title: '活动地址',
        dataIndex: 'addr'
      },
      {
        title: '参与人员',
        dataIndex: 'person'
      },
      {
        title: '总金额' , 
        dataIndex: 'moneyCount'
      },
      {
        title: '备注',
        dataIndex: 'description'
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ],
    fieldList:[
      // input 
      {
          label: '部门' , 
          type: 'input' ,
          field: 'callNo' ,
          placeholder:'输入部门',
          decorator: ['callNo', { rules: [
                  {
                      required: true, 
                      message: '请输入部门' 
                  }
              ]
          }]
      },
      // select 
      {
          label: '活动日期' ,
          type: 'select' ,
          field: 'date' , 
          placeholder:'select date',
          selectOption: [
              { value : 1 , name : 'male' },
              { value : 2 , name : 'female' },
          ],
          decorator: [
              'gender',
              { rules: 
                  [
                      {
                          required: true, 
                          message: 'Please select your gender!' 
                      }
                  ]
              },
          ]
      },
      // time
      {
          label: '活动日期' ,
          type: 'date' ,
          field: 'date' , 
          placeholder:'请选择活动日期',
          format: 'YYYY-MM-DD' , 
          decorator: [
              'date', 
              { rules: 
                  [
                      {
                          required: true, 
                          message: '请选择日期' 
                      }
                  ]
              }
          ],
      },
      // 活动天数
      {
        label: '活动天数',
        type: 'inputNumber',
        field: 'day',
        placeholder: '输入活动天数' , 
        min: 0 ,
        decorator: [
          'day' , 
          { rules :[ { required : true , message:'请输入活动天数' } ] }
        ]
      }
    ]
  },
  { name: '生日费' , type: 2 },
  { name: '培训/考试费' , type: 3 },
  { name: '会议费' , type: 4 },
  { name: '其他' , type: 5 },
]


