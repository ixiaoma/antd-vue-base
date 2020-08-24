import addMenu from './addMenu/addMenu.vue'
import { Tree } from 'ant-design-vue'
import { menusList,menusListChild,menusDetail,rolesList,menusDel } from '@/api/user.js'
export default {
    name: 'menuManage',
    components: {
        addMenu,
        'a-tree': Tree
    },
    data() {
        return {
            defaultExpandedKeys: [],
            treeData: [],
            nodeTypeSelect:[{ id: "1", name: '菜单节点' }, { id: "3", name: '按钮节点' }],
            currentNode:null,
            currentId:[],
            nodeData:null,
            roleData:[]
        }
    },
    methods: {
        //左侧树
        selectNode(keys, node) {//点击树节点操作
            this.currentId=keys.length?keys[0]:''
            if(node.selectedNodes.length) {
                this.currentNode = node.selectedNodes[0].data.props;
            } else {
                this.currentNode = null;
            }
            this.currentId&&menusDetail(this.currentId).then(res=>{
                if(res.code==200){
                    this.nodeData=res.data
                    let arr=res.data.roleIds
                    let roleNameArr=[]
                    for(let i = 0;i < arr.length;i ++){
                        for(let j = 0;j < this.roleData.length; j++){
                            if(arr[i] == this.roleData[j].id){
                                roleNameArr.push(this.roleData[j].name)
                            }
                        }
                    }
                    this.roleName = roleNameArr.join(',')
                }
            })
        },
        
        addTreeNode() {//添加节点操作
            if(!this.currentId){
                this.$message.warning('请选择节点');
                return false
            }
            this.$refs.addMenu.openModal('add',null,this.currentId,this.roleData,null);
        },
        editTreeNode() {//编辑节点操作
            if(!this.currentId){
                this.$message.warning('请选择节点');
                return false
            }
            this.$refs.addMenu.openModal('edit',this.currentNode, this.currentId,this.roleData,this.nodeData);
        },
        delTreeNode() {//删除节点操作
            // if(this.currentNode.children&&this.currentNode.children.length){
            //     this.$message.warning('此节点下包含子节点，不可进行删除操作');
            // }else 
            if(!this.currentId){
                this.$message.warning('请选择节点');
            }else{
                let that = this;
                this.$confirm({
                    title: '温馨提示',
                    content: '确认删除？删除后数据无法恢复！',
                    okText: '确认',
                    okType: 'danger',
                    cancelText: '取消',
                    onOk() {
                        menusDel(that.currentId).then(res=>{
                            if(res.code == 200) {
                                that.$message.success('删除成功');
                                that.getFirstNodeData();
                            }else{
                                that.$message.warning(res.message);   
                            }
                        })
                    },
                    onCancel() { },
                });
            }
        },
        getFirstNodeData() {//菜单列表
            menusList().then(res=>{
                if(res && res.code == 200) {
                    let str = JSON.stringify(res.data);
                    str = str.replace(/id/g, "key")
                    this.treeData = str.length ? JSON.parse(str) : [];
                    this.treeData.forEach(ele=>{
                        this.expand('',ele);
                        if(ele.children){
                            ele.children = [{title:'暂无子节点'}];
                        }
                    })
                }
            })
        },
        // expand(keys) {//展开或者收起树节点
        //     this.defaultExpandedKeys = keys;
        // },
        expand(keys,node){//获取子节点
            let id=node.key?node.key:node.node.eventKey
            menusListChild(id).then(res=>{
                if(res.code == 200){
                    let str = JSON.stringify(res.data);
                    str = str.replace(/id/g, "key")
                    let treedata=JSON.parse(str)
                    let modelData = JSON.parse(JSON.stringify(this.treeData))
                    if(treedata.length){
                        treedata.forEach(ele=>{
                            if(ele.children){
                                ele.children = [{title:'暂无子节点',leafBool:true}];
                            }
                        }) 
                        this.deepLoad(modelData,treedata,id)
                    } else {
                        // if(!node.name) {//如果是删除节点
                        //     this.getFirstNodeData();
                        // }
                    }
                }
            })
            this.detailModal = false
            this.isClass = -1;
        },
        deepLoad(arr,newArr,key){//递归
            for(let i in arr){
                if(arr[i].key == key){
                    arr[i].children = newArr;
                    break;
                }else{
                    if(arr[i].children && arr[i].children.length){
                        this.deepLoad(arr[i].children,newArr,key);
                    }
                }
            }
            this.treeData = arr
        },
        getRoleArr() {//获取角色下拉框的值
            let params = {
                enabled: true
            }
            rolesList(params).then(res => {
                this.roleData = res.data;
            })
        },
    },
    created() {
        this.getFirstNodeData();
        this.getRoleArr()
    }
}