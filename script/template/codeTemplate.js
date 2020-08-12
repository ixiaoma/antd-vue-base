const Code = compoenntName => {
    return `
    export const filterList = [
        {
          searchLabel: '员工工号',
          searchKey: 'staffCode'
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
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '规则编号',
          dataIndex: 'no'
        },
        {
          title: '描述',
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        },
        {
          title: '服务调用次数',
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + ' 次'
        },
        {
          title: '状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
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
            no:'HT20170823',
            name:'员工劳动合同',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreestatus:'生效中',
            isTrue:'已转正',
            status:0
          },
          {
            no:'BM20170823',
            name:'公司保密合同',
            staffName:'叶落森',
            staffDept:'研发中心',
            agreestatus:'生效中',
            isTrue:'已转正',
            status:0
          }
        ]
      }
    `
  };

  module.exports = {
    Code
  };