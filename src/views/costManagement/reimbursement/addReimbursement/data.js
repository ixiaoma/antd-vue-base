export const typeList = [
    {
        name: '市内交通' , 
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
      { name: '差旅' , type: 2 },
      { name: '行政办公' , type: 3 },
]