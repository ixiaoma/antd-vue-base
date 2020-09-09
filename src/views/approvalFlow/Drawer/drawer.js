export default {
    data() {
      return {
        form: this.$form.createForm(this),
        visible: false,
        drawerTitle:'发起人设置'
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
    },
}