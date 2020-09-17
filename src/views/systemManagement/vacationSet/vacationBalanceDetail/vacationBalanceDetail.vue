<style lang="less" scoped>
@import './vacationBalanceDetail.less';
</style>
<template>
  <div class="vacationBalanceDetail">
    <h1>
      {{username}}
      <span style="font-size:18px;color:#999">部门：{{deptName}}</span>
    </h1>
    <a-table :columns="columns" :data-source="userVacationList">
      <span slot="action" slot-scope="text, record">
        <template>
          <a @click="handleEdit(record)" style="margin:0 3px">修改</a>
        </template>
      </span>
    </a-table>
    <vacationBalanceEdit ref="vacationBalanceEdit" @reflash="detailLoad"></vacationBalanceEdit>
  </div>
</template>
<script>
import { userVacationDetail } from '@/api/user'
import vacationBalanceEdit from './vacationBalanceEdit.vue'
const columns = [
  {
    title: '请假类型',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '发放时长',
    dataIndex: 'grantBalance',
    key: 'grantBalance'
  },
  {
    title: '已用时长',
    dataIndex: 'usedBalance',
    key: 'usedBalance'
  },
  {
    title: '剩余时长',
    dataIndex: 'leaveBalance',
    key: 'leaveBalance'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '80px',
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  data() {
    return {
      userVacationList: [],
      userId:'',
      username: '',
      deptName: '',
      columns
    }
  },
  components: {
    vacationBalanceEdit
  },
  methods: {
    detailLoad() {
      userVacationDetail(this.$route.query.userId).then(res => {
        this.form = res
        this.userVacationList = res.userVacationVOList
        this.username = res.name
        this.userId=res.userId
        this.deptName = res.deptName
      })
    },
    handleEdit(record) {
      this.$refs.vacationBalanceEdit.openModal(this.userId,this.username,record)
    }
  },
  created() {
    this.detailLoad()
  }
}
</script>