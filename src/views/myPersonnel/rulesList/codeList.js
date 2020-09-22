
export const filterList = []

export const columns = [
  {
    title: '编号',
    dataIndex: 'code'
  },
  {
    title: '标题',
    dataIndex: 'title'
  },
  {
    title: '所属公司',
    dataIndex: 'company'
  },
  {
    title: '类型',
    dataIndex: 'basicType'
  },
  {
    title: '规章制度类型',
    dataIndex: 'type'
  },
  {
    title: '创建人',
    dataIndex: 'createName'
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    sorter: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    fixed: 'right',
    width: '180px',
    scopedSlots: { customRender: 'action' }
  }
]

export const result = {
  pageNo: 1,
  pageSize: 10,
  totalCount: 2,
  totalPage: 1,
  data: []
}
