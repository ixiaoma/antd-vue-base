

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
            count: 1
          },
          {
            staffCode:'BM20170823',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreestatus:'生效中',
            isTrue:'已转正',
            status:0,
            count: 2
          },
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
  { name: '生日费' , type: 2 , 
    
  },
  { name: '培训/考试费' , type: 3 },
  { name: '会议费' , type: 4 },
  { name: '其他' , type: 5 , 
    columns:[
      {
        title: '日期',
        dataIndex: 'travelDate'
      },
      {
        title: '金额',
        dataIndex: 'expenses'
      },
      {
        title: '备注',
        dataIndex: 'remark'
      },
    ],
    fieldList:[
      {
        label: '日期' ,
        type: 'date' ,
        field: 'travelDate' , 
        placeholder:'请选择日期',
        format: 'YYYY-MM-DD' , 
        decorator: [
            'travelDate', 
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
      {
        label: '金额' , 
        type: 'inputNumber' ,
        field: 'expenses' ,
        placeholder:'输入金额',
        decorator: ['expenses', { rules: [
                {
                    required: true, 
                    message: '请输入金额' 
                }
            ]
        }]
      },
      {
          label: '备注' , 
          type: 'input' ,
          field: 'remark' ,
          placeholder:'输入备注',
          decorator: ['remark', { rules: [
                  {
                      required: true, 
                      message: '请输入备注' 
                  }
              ]
          }]
      },
    ]
  },
]


