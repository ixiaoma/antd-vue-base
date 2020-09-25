export const columns = [
    {
      title: '类型',
      dataIndex: 'type'
    },
    {
      title: '总金额',
      dataIndex: 'amount'
    },
    {
      title: '提交时间',
      dataIndex: 'submissionTime',
 
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: '150px',
      scopedSlots: { customRender: 'action' }
    }
  ]