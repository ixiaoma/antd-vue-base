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
        valueTypeList
      };
    },
    methods: {
      showDrawer(nodeConfig) {
        console.log(nodeConfig)
        var { nodeType, name } = nodeConfig
        if(name != "start_event"){
            this.drawerTitle = name+'设置'
        }
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
      showModel(){
        this.modelVisible = true
      }
    },
}