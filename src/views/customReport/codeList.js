export const columns = [
    {
      title: '报表名称',
      dataIndex: 'name'
    },
    {
      title: '报表模板',
      dataIndex: 'templete'
    },
    {
      title: '排序',
      dataIndex: 'sort'
    },
    {
        title: '所有人',
        dataIndex: 'owner'
      },
    {
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
      width: '180px',
      scopedSlots: { customRender: 'action' }
    }
  ]