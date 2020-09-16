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
  }
]
import roleModel from './roleModel.vue'
import { getFormDetail } from '@/api/approval'
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
        displayAll:false,
        onlyreadAll:false,
        editAll:false,
        nodeConfig:null,
        selectRadio:null,
        roleList:[],
        defaultValue:1
      };
    },
    components:{roleModel},
    methods: {
      async showDrawer(nodeConfig) {
        this.nodeConfig = nodeConfig
        var { nodeType, name, formAuthorityList, participantList } = nodeConfig
        if(name != "start_event"){
            this.drawerTitle = name+'设置'
        }
        if(nodeType == 'APPROVE'){
          if(!formAuthorityList.length){
            this.fieldList = await this.getFormDetailList()
          }else{
            this.fieldList = formAuthorityList.map(ele=>{
              return {...ele}
            })
          }
          this.checkSelectAll()
        }
        if(participantList.length){
          const type = participantList[0].type
          this.selectRadio = type
          if(type == 'ROLE'){
            this.roleList = participantList.map(ele=>{
              return {...ele}
            })
          }
        }
        this.nodeType = nodeType
        this.visible = true;
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
          if(!ele.display){
            displayAll = false
          }
          if(!ele.onlyread){
            onlyreadAll = false
          }
          if(!ele.edit){
            editAll = false
          }
        })
        this.displayAll = displayAll
        this.onlyreadAll = onlyreadAll
        this.editAll = editAll
      },
      selectAll(checked,field){
        console.log(checked)
        this.fieldList.forEach(ele=>{
          ele[field] = checked
        })
      },
      async getFormDetailList(){
        const { id } = this.$route.query
        this.layoutList = await getFormDetail({id})
        const fieldList = this.layoutList.map(ele=>{
            return {
                code:ele.code,
                name:ele.name,
                display:false,
                edit:false,
                onlyread:true
            }
        })
        return fieldList
      },
      setRoleData(list){
        this.roleList = list
      },
      deleteRole(index){//删除角色
        this.roleList.splice(index,1)
      },
      commitDrawer(){
        let { nodeType} = this.nodeConfig
        if(nodeType == 'APPROVE'){
          this.nodeConfig.formAuthorityList = this.fieldList
          if(this.selectRadio == 'ROLE'){
            this.nodeConfig.participantList = this.roleList
          }else if(this.selectRadio == 'APPLICANT'){
            this.nodeConfig.participantList = [
              {type:'APPLICANT',name:'申请人本人'}
            ]
          }
        }
        this.$emit("update:nodeConfig", this.nodeConfig);
        this.visible = false;
      }
    },
    created(){

    }
}