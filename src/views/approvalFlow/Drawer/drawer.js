const valueTypeList = [//participantList审批人抄送人；formAuthorityList权限设置
  {
    label:'指定成员',
    value:'ASSIGN'
  },{
    label:'指定上级',
    value:'LEADER'
  },{
    label:'指定标签',
    value:'ROLE'
  },{
    label:'申请人本人',
    value:'APPLICANT'
  },{
    label:'VONDER',
    value:'VONDER'
  }
]
const oprationList = ['=','!=','>','>=','<','<=']
import roleModel from './roleModel.vue'
import { getFormDetail } from '@/api/approval'
import { levelList } from '@/utils/commonCode'
export default {
    data() {
      return {
        form: this.$form.createForm(this),
        visible: false,
        drawerTitle:'发起人设置',
        radioStyle: {
          display: 'block',
          height: '36px',
          lineHeight: '36px',
        },
        valueTypeList,
        fieldList:[],
        nodeType:null,
        slectAllData:'onlyread',
        nodeConfig:null,
        selectRadio:null,
        roleList:[],
        defaultValue:1,
        ownerChecked:false,
        levelData:'ASSIGN',
        levelSelect:'1',
        firstSelect:'3',
        levelList,
        expressionList:[],
        backType:null,
        oprationList,
        result:null
      };
    },
    components:{roleModel},
    methods: {
      async showDrawer(nodeConfig) {
        this.nodeConfig = nodeConfig
        var { nodeType, name, formAuthorityList, participantList,backType } = nodeConfig
        this.drawerTitle = name+'设置'
        this.nodeType = nodeType
        if(nodeType == 'APPROVE'){
          let list = []
          if(!formAuthorityList || !formAuthorityList.length){
            list = await this.getFormDetailList()
          }else{
            list = formAuthorityList
          }
          this.fieldList = list.map(ele=>{
            return {
              code:ele.code,
              name:ele.name,
              selectData:ele.onlyread ? 'onlyread' : ele.display ? 'display' : 'edit'
            }
          })
          this.checkSelectAll()
          if(participantList && participantList.length){
            const type = participantList[0].type
            this.selectRadio = type
            if(type == 'ROLE'){
              this.roleList = participantList.map(ele=>{
                return {...ele}
              })
            }else if(type == 'LEADER'){
              this.levelData = participantList[0].hierarchyType
              if(this.levelData == 'ASSIGN'){
                const dataList = participantList[0].dataId.split(',')
                this.firstSelect = dataList[0]
                this.levelSelect = dataList[1]
              }else{
                this.levelSelect = participantList[0].dataId
              }
            }else{
              this.roleList = []
            }
          }
          this.backType = backType || null
        }else if(nodeType == 'CC'){
          if(participantList && participantList.length){
            this.roleList = participantList.filter(ele=>ele.type == 'ROLE')
            this.ownerChecked = participantList.filter(ele=>ele.type == 'APPLICANT').length > 0
          }
        }else{
          this.fieldList = await this.getFormDetailList()
          this.expressionList = nodeConfig.expressionList.map(ele=>{return {...ele}}) || []
        }
        this.visible = true;
      },
      selectDisable(level){
        return level <= this.firstSelect
      },
      onClose() {
        this.visible = false;
      },
      showModel(){
        this.$refs.selectModel.showModel(this.roleList)
      },
      checkSelectAll(){
        let displayAll = true
        let onlyreadAll = true
        let editAll = true
        this.fieldList.forEach(ele=>{
          if(ele.selectData != 'display'){
            displayAll = false
          }
          if(ele.selectData != 'onlyread'){
            onlyreadAll = false
          }
          if(ele.selectData != 'edit'){
            editAll = false
          }
        })
        this.slectAllData = displayAll ? 'display' : onlyreadAll ? 'onlyread' : editAll ? 'edit' : null
      },
      selectAll(){
        this.fieldList.forEach(ele=>{
          ele.selectData = this.slectAllData
        })
      },
      async getFormDetailList(){//权限字段
        const { id } = this.$route.query
        this.layoutList = await getFormDetail({id})
        const fieldList = this.layoutList.map(ele=>{
            return {
                code:ele.code,
                name:ele.name,
                slectData:'onlyread'
            }
        })
        return fieldList
      },
      setRoleData(list){//已选角色
        this.roleList = list
      },
      deleteRole(index){//删除角色
        this.roleList.splice(index,1)
      },
      disabledSelect(code){//已选条件禁用
        return this.expressionList.filter(ele=>ele.code == code).length > 0
      },
      addCondition(){//添加条件
        this.expressionList.push({
          code:null,
          operator:'=',
          value:''
        })
      },
      deleteCondition(index){//删除条件
        this.expressionList.splice(index,1)
      },
      commitDrawer(){
        let { nodeType} = this.nodeConfig
        if(nodeType == 'APPROVE'){
          this.nodeConfig.formAuthorityList = this.fieldList.map(ele=>{
            return {
              name:ele.name,
              code:ele.code,
              display:ele.selectData == 'display',
              onlyread:ele.selectData == 'onlyread',
              edit:ele.selectData == 'edit'
            }
          })
          this.nodeConfig.backType = this.backType
          if(this.selectRadio == 'ROLE'){
            this.nodeConfig.participantList = this.roleList
          }else if(this.selectRadio == 'LEADER'){
            this.nodeConfig.participantList = [
              {hierarchyType : this.levelData,type:this.selectRadio,name:'指定上级',dataId:this.levelData == 'ASSIGN' ? `${this.firstSelect},${this.levelSelect}` : this.levelSelect}
            ]
          }else{
            this.nodeConfig.participantList = [
              {type:this.selectRadio,name:this.selectRadio == 'APPLICANT' ? '申请人本人' : 'VONDER'}
            ]
          }
        }else if(nodeType == 'CC'){
          let arr = []
          if(this.roleList.length){
            arr = [...this.roleList]
          }
          if(this.ownerChecked){
            arr.push({type:'APPLICANT',name:'申请人本人'})
          }
          this.nodeConfig.participantList = arr
        }
        if(nodeType == 'CONDITION'){
          let list = []
          if(this.result){
            list = [{code: "result", operator: "=", value: this.result ? 'APPROVE' : 'REJECT'}]
          }else{
            list = this.expressionList.filter(ele=> ele.code && (ele.value || ele.value == 0))
          }
          this.$emit('backCondition',list)
        }else{  
          this.$emit("update:nodeConfig", this.nodeConfig);
        }
        this.visible = false;
      }
    },
    created(){

    }
}