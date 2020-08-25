
export const filterList = []

export const columns = [
  {
    title: '公告编号',
    dataIndex: 'code'
  },
  {
    title: '公告标题',
    dataIndex: 'title'
  },
  {
    title: '公告类型',
    dataIndex: 'customerTypeName'
  },
  {
    title: '发布时间',
    dataIndex: 'publishDate',
    sorter: true
  },
  {
    title: '失效时间',
    dataIndex: 'expiryDate',
    sorter: true
  },
  {
    title: '创建人',
    dataIndex: 'createdBy'
  },
  {
    title: '创建时间',
    dataIndex: 'createdDate',
    sorter: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' }
  }
]

export const result = {
  pageNo: 1,
  pageSize: 10,
  totalCount: 2,
  totalPage: 1,
  data: [{
    "id": "1270277379603828737",
    "lastModifiedBy": "admin",
    "lastModifiedDate": "2020-06-09 08:51:43",
    "createdBy": "admin",
    "createdDate": "2020-06-09 08:51:43",
    "deleted": 0,
    "take": 0,
    "skip": 0,
    "searchFilter": null,
    "conditionId": null,
    "code": "NT_20200609_001",
    "title": "65656",
    "content": "PHA+NjU2NTY8L3A+",
    "publishDate": "2020-06-10 09:00:00",
    "spublishDate": null,
    "epublishDate": null,
    "isRevoke": null,
    "isRead": null,
    "revokeDate": null,
    "expiryDate": "2020-06-10 11:00:00",
    "isDelete": null,
    "deleteDate": null,
    "priority": "c2-public",
    "objectType": 3,
    "customerType": "all",
    "customerTypeName": "所有",
    "customerIds": null,
    "userList": [],
    "unReadNoticeIds": [],
    "readNoticeIds": [],
    "pageStart": 0,
    "page": 1,
    "pageSize": 10,
    "userToken": null,
    "justPageStart": null
  }, {
    "id": "1268000475429474305",
    "lastModifiedBy": "admin",
    "lastModifiedDate": "2020-06-03 02:04:06",
    "createdBy": "admin",
    "createdDate": "2020-06-03 02:04:06",
    "deleted": 0,
    "take": 0,
    "skip": 0,
    "searchFilter": null,
    "conditionId": null,
    "code": "NT_20200603_001",
    "title": "44434",
    "content": "PHA+NDM0NDM0MzQ8L3A+",
    "publishDate": "2020-06-04 00:00:00",
    "spublishDate": null,
    "epublishDate": null,
    "isRevoke": null,
    "isRead": null,
    "revokeDate": null,
    "expiryDate": "2020-06-05 00:00:00",
    "isDelete": null,
    "deleteDate": null,
    "priority": "c2-public",
    "objectType": 4,
    "customerType": "department",
    "customerTypeName": "部门",
    "customerIds": null,
    "userList": [],
    "unReadNoticeIds": [],
    "readNoticeIds": [],
    "pageStart": 0,
    "page": 1,
    "pageSize": 10,
    "userToken": null,
    "justPageStart": null
  }]
}
