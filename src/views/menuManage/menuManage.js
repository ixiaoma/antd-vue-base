import addMenu from './addMenu/addMenu.vue'
import { menusList,deleteMenus } from '@/api/systemManage'
export default {
    name: 'menuManage',
    components: {
        addMenu
    },
    data() {
        return {
            defaultExpandedKeys: [],
            treeData: [
                {
                    parentId:0,
                    key:0,
                    title:'系统菜单',
                    name:'系统菜单',
                    url:'system',
                    type:1,
                    enabled:0,
                    listDisplay:1,
                    detailsDisplay:1,
                    children:[
                      {
                        id:1,
                        key:1,
                        type:1,
                        enabled:0,
                        listDisplay:1,
                        detailsDisplay:1,
                        title:'角色管理',
                        name:'角色管理',
                        url:'roleManage'
                      }
                    ]
                  }
            ],
            nodeTypeSelect:[{ id: "1", name: '菜单节点' }, { id: "3", name: '按钮节点' }],
            currentNode:null
        }
    },
    methods: {
        //左侧树
        selectNode(keys, node) {//点击树节点操作
            console.log(node)
            if(node.selectedNodes.length) {
                node.selectedNodes[0].data.props.type = node.selectedNodes[0].data.props.type.toString();
                node.selectedNodes[0].data.props.enabled = node.selectedNodes[0].data.props.enabled == '1' ? true : false;
                node.selectedNodes[0].data.props.listDisplay = node.selectedNodes[0].data.props.listDisplay == '1' ? true : false;
                node.selectedNodes[0].data.props.detailsDisplay = node.selectedNodes[0].data.props.detailsDisplay == '1' ? true : false;
                this.currentNode = node.selectedNodes[0].data.props;
            } else {
                this.currentNode = null;
            }
        },
        expand(keys) {//展开或者收起树节点
            this.defaultExpandedKeys = keys;
        },
        addTreeNode(node) {//添加节点操作
            this.$refs.addMenu.openModal('add',null,node.id);
        },
        editTreeNode(node) {//编辑节点操作
            this.$refs.addMenu.openModal('edit',node, node.parentId);
        },
        delTreeNode(node) {//删除节点操作
            if(node.children.length){
                this.$message.warning('此节点下包含子节点，不可进行删除操作🙅');
            }else{
                let ids = [node.id];
                let that = this;
                this.$confirm({
                    title: '温馨提示',
                    content: '确认删除？删除后数据无法恢复！',
                    okText: '确认',
                    okType: 'danger',
                    cancelText: '取消',
                    onOk() {
                        deleteMenus(ids).then(res=>{
                            if(res.code == 200) {
                                that.$message.success('删除成功');
                                that.getMenusList();
                            }
                        })
                    },
                    onCancel() { },
                });
            }
        },
        getMenusList() {//菜单列表
            menusList().then(res=>{
                if(res && res.code == 200) {
                    let str = JSON.stringify(res.data);
                    str = str.replace(/childList/g, "children");
                    this.treeData = str.length ? JSON.parse(str) : [];
                    this.treeData.length && this.addSlotForAllTreeNode(this.treeData);
                }
            })
        },
        addSlotForAllTreeNode(node) {//循环所有树节点给其添加slot
            node.length && node.forEach(ele => {
                ele.scopedSlots = { title: "custom" };
                ele.title = ele.name;
                ele.value = ele.key + '';//树选择框需要用的数据
                if (ele.children && ele.children.length) {
                    this.addSlotForAllTreeNode(ele.children)
                }
            })
        }
    },
    created() {
        // this.getMenusList();
    }
}