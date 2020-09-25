export const columns = [
    {
      title: '类型',
      dataIndex: 'code'
    },
    {
      title: '总金额',
      dataIndex: 'title'
    },
    {
      title: '提交时间',
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