import addNode from '../AddCode/addNode.vue'
import drawer from '../Drawer/drawer.vue'
export default {
    name:'nodeWrap',
    props: ["nodeConfig", "flowPermission", "directorMaxLevel", "isTried", "tableId"],
    data() {
        return {
            isInputList: [],
            isInput: false,
            promoterVisible: false,
            promoterDrawer: false,
            departments: {},
            checkedDepartmentList: [],
            checkedEmployessList: [],
            promoterSearchName: "",
            flowPermission1: this.flowPermission,
            approverDrawer: false,
            approverVisible: false,
            approverRoleVisible: false,
            approverConfig: {},
            approverEmplyessList: [],
            approverSearchName: "",
            roles: [],
            roleList: [],
            approverRoleSearchName: "",
            copyerDrawer: false,
            copyerVisible: false,
            copyerConfig: {},
            copyerSearchName: "",
            activeName: "1",
            copyerEmployessList: [],
            copyerRoleList: [],
            ccSelfSelectFlag: [],
            conditionDrawer: false,
            conditionVisible: false,
            conditionConfig: {},
            conditionsConfig: {
                conditionList: [],
            },
            bPriorityLevel: "",
            conditions: [],
            conditionList: [],
            conditionRoleVisible: false,
            conditionRoleSearchName: "",
            conditionDepartmentList: [],
            conditionEmployessList: [],
            conditionRoleList: [],
        }
    },
    components:{
        addNode,
        drawer
    },
    methods: {
        setTitleColor(type){//设置title颜色
            let number = 0
            switch (type){
                case 'APPROVE' :
                    number  = 1
                break;
                default:
                    number = 0
            }
            return number
        },
        clickEvent(index) {//点击修改title
            if (index || index === 0) {
                this.$set(this.isInputList, index, true)
            } else {
                this.isInput = true;
            }
        },
        blurEvent(index) {//失焦保存title
            if (index || index === 0) {
                this.$set(this.isInputList, index, false)
                this.nodeConfig.conditionList[index].nodeName = this.nodeConfig.conditionList[index].nodeName ? this.nodeConfig.conditionList[index].nodeName : "条件"
            } else {
                this.isInput = false;
                this.nodeConfig.nodeName = this.nodeConfig.nodeName ? this.nodeConfig.nodeName : this.placeholderList[this.nodeConfig.type]
            }
        },
        conditionStr(item, index) {//条件设置
            var { expressionList, participantList } = item;
            let str = ''
            expressionList.forEach(ele=>{
                str += ele.code + '=' + ele.value
            })
            return str || '请设置条件'
            // if(!expressionList ){
            //     return '请设置条件'
            // }else if (expressionList.length == 0) {
            //     return (index == this.nodeConfig.expressionList.length - 1) && this.nodeConfig.expressionList[0].expressionList.length != 0 ? '其他条件进入此流程' : '请设置条件'
            // } else {
            //     let str = ""
            //     for (var i = 0; i < expressionList.length; i++) {
            //         var { columnId, columnType, showType, showName, optType, zdy1, opt1, zdy2, opt2, fixedDownBoxValue } = expressionList[i];
            //         if (columnId == 0) {
            //             if (participantList.length != 0) {
            //                 str += '发起人属于：'
            //                 str += participantList.map(item => { return item.name }).join("或") + " 并且 "
            //             }
            //         }
            //         if (columnType == "String" && showType == "3") {
            //             if (zdy1) {
            //                 str += showName + '属于：' + this.dealStr(zdy1, JSON.parse(fixedDownBoxValue)) + " 并且 "
            //             }
            //         }
            //         if (columnType == "Double") {
            //             if (optType != 6 && zdy1) {
            //                 var optTypeStr = ["", "<", ">", "≤", "=", "≥"][optType]
            //                 str += `${showName} ${optTypeStr} ${zdy1} 并且 `
            //             } else if (optType == 6 && zdy1 && zdy2) {
            //                 str += `${zdy1} ${opt1} ${showName} ${opt2} ${zdy2} 并且 `
            //             }
            //         }
            //     }
            //     return str ? str.substring(0, str.length - 4) : '请设置条件'
            // }
        },
        delNode() {//删除节点
            this.$emit("update:nodeConfig", this.nodeConfig.childNode);
        },
        addTerm() {//添加条件
            let len = this.nodeConfig.conditionList.length + 1
            this.nodeConfig.conditionList.push({
                name: "条件" + len,
                nodeType: 'CONDITION',
                priorityLevel: len,
                conditionList: [],
                participantList: [],
                conditionList:[],
                expressionList:[],
                childNode: null
            });
            for (var i = 0; i < this.nodeConfig.conditionList.length; i++) {
                // this.nodeConfig.conditionList[i].error = this.conditionStr(this.nodeConfig.conditionList[i], i) == "请设置条件" && i != this.nodeConfig.conditionList.length - 1
            }
            this.$emit("update:nodeConfig", this.nodeConfig);
        },
        delTerm(index) {//删除条件
            this.nodeConfig.conditionList.splice(index, 1)
            for (var i = 0; i < this.nodeConfig.conditionList.length; i++) {
                // this.nodeConfig.conditionList[i].error = this.conditionStr(this.nodeConfig.conditionList[i], i) == "请设置条件" && i != this.nodeConfig.conditionList.length - 1
            }
            this.$emit("update:nodeConfig", this.nodeConfig);
            if (this.nodeConfig.conditionList.length == 1) {
                if (this.nodeConfig.childNode) {
                    if (this.nodeConfig.conditionList[0].childNode) {
                        this.reData(this.nodeConfig.conditionList[0].childNode, this.nodeConfig.childNode)
                    } else {
                        this.nodeConfig.conditionList[0].childNode = this.nodeConfig.childNode
                    }
                }
                this.$emit("update:nodeConfig", this.nodeConfig.conditionList[0].childNode);
            }
        },
        setPerson() {//设置审批人、抄送人等（点击块的操作）
            this.$refs.drawer.showDrawer(this.nodeConfig)
        },
        setCondition(condition){//设置条件
            // console.log(condition)
            this.$refs.drawer.showDrawer(condition)
            this.bPriorityLevel = condition.priorityLevel;
            // this.conditionsConfig = JSON.parse(JSON.stringify(this.nodeConfig))
            // this.conditionConfig = this.conditionsConfig.conditionNodes[priorityLevel - 1]
        },
        backCondition(list){
            this.nodeConfig.conditionList[this.bPriorityLevel -1].expressionList = list
            this.$emit("update:nodeConfig", this.nodeConfig);
        },
        arrTransfer(index, type = 1) {//条件向左-1,向右1
            this.nodeConfig.conditionList[index] = this.nodeConfig.conditionList.splice(index + type, 1, this.nodeConfig.conditionList[index])[0];
            this.nodeConfig.conditionList.map((item, index) => {
                item.priorityLevel = index + 1
            })
            for (var i = 0; i < this.nodeConfig.conditionList.length; i++) {
                // this.nodeConfig.conditionList[i].error = this.conditionStr(this.nodeConfig.conditionList[i], i) == "请设置条件" && i != this.nodeConfig.conditionList.length - 1
            }
            this.$emit("update:nodeConfig", this.nodeConfig);
        },
        dealStr(str, obj) {
            let arr = [];
            let list = str.split(",");
            for (var elem in obj) {
                list.map(item => {
                    if (item == elem) {
                        arr.push(obj[elem].value)
                    }
                })
            }
            return arr.join("或")
        },
        reData(data, addData) {
            if (!data.childNode) {
                data.childNode = addData
            } else {
                this.reData(data.childNode, addData)
            }
        },
        addConditionRole() {
            this.conditionRoleSearchName = "";
            this.conditionRoleVisible = true;
            this.activeName = "1";
            this.getDepartmentList();
            this.conditionDepartmentList = [];
            this.conditionEmployessList = [];
            this.conditionRoleList = [];
            for (var i = 0; i < this.conditionConfig.participantList.length; i++) {
                var { type, name, targetId } = this.conditionConfig.participantList[i];
                if (type == 1) {
                    this.conditionEmployessList.push({
                        employeeName: name,
                        id: targetId
                    });
                } else if (type == 2) {
                    this.conditionRoleList.push({
                        roleName: name,
                        roleId: targetId
                    });
                } else if (type == 3) {
                    this.conditionDepartmentList.push({
                        departmentName: name,
                        id: targetId
                    });
                }
            }
        },
        sureConditionRole() {
            this.conditionConfig.participantList = [];
            this.conditionRoleList.map(item => {
                this.conditionConfig.participantList.push({
                    type: 2,
                    targetId: item.roleId,
                    name: item.roleName
                })
            });
            this.conditionDepartmentList.map(item => {
                this.conditionConfig.participantList.push({
                    type: 3,
                    targetId: item.id,
                    name: item.departmentName
                })
            });
            this.conditionEmployessList.map(item => {
                this.conditionConfig.participantList.push({
                    type: 1,
                    targetId: item.id,
                    name: item.employeeName
                })
            });
            this.conditionRoleVisible = false;
        },
        addCondition() {
            this.conditionList = [];
            this.conditionVisible = true;
            this.$axios.get(`${process.env.BASE_URL}conditions.json?tableId=${this.tableId}`).then(res => {
                this.conditions = res.data;
                if (this.conditionConfig.conditionList) {
                    for (var i = 0; i < this.conditionConfig.conditionList.length; i++) {
                        var { columnId } = this.conditionConfig.conditionList[i]
                        if (columnId == 0) {
                            this.conditionList.push({ columnId: 0 })
                        } else {
                            this.conditionList.push(this.conditions.filter(item => { return item.columnId == columnId; })[0])
                        }
                    }
                }
            })
        },
        changeOptType(item) {
            if (item.optType == 1) {
                item.zdy1 = 2;
            } else {
                item.zdy1 = 1;
                item.zdy2 = 2;
            }
        },
        sureCondition() {
            //1.弹窗有，外面无+
            //2.弹窗有，外面有不变
            for (var i = 0; i < this.conditionList.length; i++) {
                var { columnId, showName, columnName, showType, columnName, columnType, fixedDownBoxValue } = this.conditionList[i];
                if (this.toggleClass(this.conditionConfig.conditionList, this.conditionList[i], "columnId")) {
                    continue;
                }
                if (columnId == 0) {
                    this.conditionConfig.participantList == [];
                    this.conditionConfig.conditionList.push({
                        "type": 1,
                        "columnId": columnId,
                        "showName": '发起人'
                    });
                } else {
                    if (columnType == "Double") {
                        this.conditionConfig.conditionList.push({
                            "showType": showType,
                            "columnId": columnId,
                            "type": 2,
                            "showName": showName,
                            "optType": "1",
                            "zdy1": "2",
                            "opt1": "<",
                            "zdy2": "",
                            "opt2": "<",
                            "columnDbname": columnName,
                            "columnType": columnType,
                        })
                    } else if (columnType == "String" && showType == "3") {
                        this.conditionConfig.conditionList.push({
                            "showType": showType,
                            "columnId": columnId,
                            "type": 2,
                            "showName": showName,
                            "zdy1": "",
                            "columnDbname": columnName,
                            "columnType": columnType,
                            "fixedDownBoxValue": fixedDownBoxValue
                        })
                    }
                }
            }
            ////3.弹窗无，外面有-
            for (var i = this.conditionConfig.conditionList.length - 1; i >= 0; i--) {
                if (!this.toggleClass(this.conditionList, this.conditionConfig.conditionList[i], "columnId")) {
                    this.conditionConfig.conditionList.splice(i, 1);
                }
            }
            this.conditionConfig.conditionList.sort(function (a, b) { return a.columnId - b.columnId; });
            this.conditionVisible = false;
        },
        saveCondition() {
            this.conditionDrawer = false;
            var a = this.conditionsConfig.conditionList.splice(this.bPriorityLevel - 1, 1)//截取旧下标
            this.conditionsConfig.conditionList.splice(this.conditionConfig.priorityLevel - 1, 0, a[0])//填充新下标
            this.conditionsConfig.conditionList.map((item, index) => {
                item.priorityLevel = index + 1
            });
            for (var i = 0; i < this.conditionsConfig.conditionList.length; i++) {
                // this.conditionsConfig.conditionList[i].error = this.conditionStr(this.conditionsConfig.conditionList[i], i) == "请设置条件" && i != this.conditionsConfig.conditionList.length - 1
            }
            this.$emit("update:nodeConfig", this.conditionsConfig);
        },
        getDebounceData(event, type = 1) {
            this.$func.debounce(function () {
                if (event.target.value) {
                    if (type == 1) {
                        this.departments.childDepartments = [];
                        this.$axios.get(`${process.env.BASE_URL}employees.json?searchName=${event.target.value}&pageNum=1&pageSize=30`).then(res => {
                            this.departments.employees = res.data.list
                        })
                    } else {
                        this.$axios.get(`${process.env.BASE_URL}roles.json?searchName=${event.target.value}&pageNum=1&pageSize=30`).then(res => {
                            this.roles = res.data.list
                        })
                    }
                } else {
                    type == 1 ? this.getDepartmentList() : this.getRoleList();
                }
            }.bind(this))()
        },
        handleClick() {
            this.copyerSearchName = "";
            this.conditionRoleSearchName = "";
            if (this.activeName == 1) {
                this.getDepartmentList();
            } else {
                this.getRoleList();
            }
        },
        addCopyer() {
            this.copyerSearchName = "";
            this.copyerVisible = true;
            this.activeName = "1";
            this.getDepartmentList();
            this.copyerEmployessList = [];
            this.copyerRoleList = [];
            for (var i = 0; i < this.copyerConfig.participantList.length; i++) {
                var { type, name, targetId } = this.copyerConfig.participantList[i];
                if (type == 1) {
                    this.copyerEmployessList.push({
                        employeeName: name,
                        id: targetId
                    });
                } else if (type == 2) {
                    this.copyerRoleList.push({
                        roleName: name,
                        roleId: targetId
                    });
                }
            }
        },
        sureCopyer() {
            this.copyerConfig.participantList = [];
            this.copyerEmployessList.map(item => {
                this.copyerConfig.participantList.push({
                    type: 1,
                    targetId: item.id,
                    name: item.employeeName
                })
            });
            this.copyerRoleList.map(item => {
                this.copyerConfig.participantList.push({
                    type: 2,
                    targetId: item.roleId,
                    name: item.roleName
                })
            });
            this.copyerVisible = false;
        },
        saveCopyer() {
            this.copyerConfig.ccSelfSelectFlag = this.ccSelfSelectFlag.length == 0 ? 0 : 1;
            // this.copyerConfig.error = !this.copyerStr(this.copyerConfig);
            this.$emit("update:nodeConfig", this.copyerConfig);
            this.copyerDrawer = false;
        },
        copyerStr(nodeConfig) {
            if (nodeConfig.participantList && nodeConfig.participantList.length != 0) {
                return this.arrToStr(nodeConfig.participantList)
            } else {
                if (nodeConfig.ccSelfSelectFlag == 1) {
                    return "发起人自选"
                }
            }
        },
        changeRange(val) {
            this.approverConfig.participantList = [];
        },
        changeType(val) {
            this.approverConfig.participantList = [];
            this.approverConfig.examineMode = 1;
            this.approverConfig.noHanderAction = 2;
            if (val == 2) {
                this.approverConfig.directorLevel = 1;
            } else if (val == 4) {
                this.approverConfig.selectMode = 1;
                this.approverConfig.selectRange = 1;
            } else if (val == 7) {
                this.approverConfig.examineEndDirectorLevel = 1
            }
        },
        addApprover() {
            this.approverVisible = true;
            this.approverSearchName = "";
            this.getDepartmentList();
            this.approverEmplyessList = [];
            for (var i = 0; i < this.approverConfig.participantList.length; i++) {
                var { name, targetId } = this.approverConfig.participantList[i];
                this.approverEmplyessList.push({
                    employeeName: name,
                    id: targetId
                });
            }
        },
        addRoleApprover() {
            this.approverRoleVisible = true;
            this.approverRoleSearchName = "";
            this.getRoleList();
            this.roleList = [];
            for (var i = 0; i < this.approverConfig.participantList.length; i++) {
                var { name, targetId } = this.approverConfig.participantList[i];
                this.roleList.push({
                    roleName: name,
                    roleId: targetId
                });
            }
        },
        sureApprover() {
            this.approverConfig.participantList = [];
            if (this.approverConfig.settype == 1 || (this.approverConfig.settype == 4 && this.approverConfig.selectRange == 2)) {
                this.approverEmplyessList.map(item => {
                    this.approverConfig.participantList.push({
                        type: 1,
                        targetId: item.id,
                        name: item.employeeName
                    })
                });
                this.approverVisible = false;
            } else if (this.approverConfig.settype == 4 && this.approverConfig.selectRange == 3) {
                this.roleList.map(item => {
                    this.approverConfig.participantList.push({
                        type: 2,
                        targetId: item.roleId,
                        name: item.roleName
                    })
                });
                this.approverRoleVisible = false;
            }
        },
        arrToStr(arr) {//数组转字符
            if (arr) {
                return arr.map(item => { return item.name }).toString()
            }
        },
        setApproverStr(nodeConfig) {//设置信息
            const { participantList, nodeType } = nodeConfig
            if(nodeType=='APPROVE'){
                let title = ''
                let content = ''
                participantList && participantList.forEach(ele=>{
                    if(!title && ele.type == 'ROLE'){
                        title = '指定标签:'
                    }
                    content += ele.name+'\n'
                })
                return title+content
            }
        },
        saveApprover() {
            // this.approverConfig.error = !this.setApproverStr(this.approverConfig)
            this.$emit("update:nodeConfig", this.approverConfig);
            this.approverDrawer = false;
        },
        addPromoter() {
            this.promoterVisible = true;
            this.getDepartmentList();
            this.promoterSearchName = "";
            this.checkedEmployessList = [];
            this.checkedDepartmentList = [];
            for (var i = 0; i < this.flowPermission1.length; i++) {
                var { type, name, targetId } = this.flowPermission1[i];
                if (type == 1) {
                    this.checkedEmployessList.push({
                        employeeName: name,
                        id: targetId
                    });
                } else if (type == 3) {
                    this.checkedDepartmentList.push({
                        departmentName: name,
                        id: targetId
                    });
                }
            }
        },
        surePromoter() {
            this.flowPermission1 = [];
            this.checkedDepartmentList.map(item => {
                this.flowPermission1.push({
                    type: 3,
                    targetId: item.id,
                    name: item.departmentName
                })
            });
            this.checkedEmployessList.map(item => {
                this.flowPermission1.push({
                    type: 1,
                    targetId: item.id,
                    name: item.employeeName
                })
            });
            this.promoterVisible = false;
        },
        savePromoter() {
            this.$emit("update:flowPermission", this.flowPermission1);
            this.promoterDrawer = false;
        },
        
        toggleStrClass(item, key) {
            let a = item.zdy1 ? item.zdy1.split(",") : []
            return a.some(item => { return item == key });
        },
        toStrChecked(item, key) {
            let a = item.zdy1 ? item.zdy1.split(",") : []
            var isIncludes = this.toggleStrClass(item, key);
            if (!isIncludes) {
                a.push(key)
                item.zdy1 = a.toString()
            } else {
                this.removeStrEle(item, key);
            }
        },
        removeStrEle(item, key) {
            let a = item.zdy1 ? item.zdy1.split(",") : []
            var includesIndex;
            a.map((item, index) => {
                if (item == key) {
                    includesIndex = index
                }
            });
            a.splice(includesIndex, 1);
            item.zdy1 = a.toString()
        },
        toggleClass(arr, elem, key = 'id') {
            return arr.some(item => { return item[key] == elem[key] });
        },
        toChecked(arr, elem, key = 'id') {
            var isIncludes = this.toggleClass(arr, elem, key);
            !isIncludes ? arr.push(elem) : this.removeEle(arr, elem, key);
        },
        removeEle(arr, elem, key = 'id') {
            var includesIndex;
            arr.map((item, index) => {
                if (item[key] == elem[key]) {
                    includesIndex = index
                }
            });
            arr.splice(includesIndex, 1);
        },
        getRoleList() {
            this.$axios.get(`${process.env.BASE_URL}roles.json`).then(res => {
                this.roles = res.data.list;
            })
        },
        getDepartmentList(parentId = 0) {
            this.$axios.get(`${process.env.BASE_URL}departments.json?parentId=${parentId}`).then(res => {
                this.departments = res.data;
            })
        }
    },
    mounted() {
        // if (this.nodeConfig.nodeType == 'APPROVE') {
        //     this.nodeConfig.error = !this.setApproverStr(this.nodeConfig)
        // } else if (this.nodeConfig.nodeType == 2) {
        //     this.nodeConfig.error = !this.copyerStr(this.nodeConfig)
        // } else if (this.nodeConfig.nodeType == 4) {
        //     for (var i = 0; i < this.nodeConfig.conditionList.length; i++) {
        //         this.nodeConfig.conditionList[i].error = this.conditionStr(this.nodeConfig.conditionList[i], i) == "请设置条件" && i != this.nodeConfig.conditionList.length - 1
        //     }
        // }
    }
}