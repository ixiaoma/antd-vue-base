export const columns = [
    {
      title: '请假类型',
      dataIndex: 'name'
    },
    {
      title: '时间刻度',
      dataIndex: 'timeScale'
    },
    {
      title: '是否限额',
      dataIndex: 'isQuota'
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: '120px',
      scopedSlots: { customRender: 'action' }
    }
  ]