export default {
    props: ["childNodeP"],
    data() {
        return {
            visible: false
        }
    },
    methods: {
        addType(nodeType) {
            this.visible = false;
            let data = null;
            if (nodeType != 'EXCLUSIVE') {
                if (nodeType == 'APPROVE') {
                    data = {
                        name: "审核人",
                        nodeType,
                        childNode: this.childNodeP,
                        participantList:[]
                    }
                } else if (nodeType == 'CC') {
                    data = {
                        name: "抄送人",
                        nodeType,
                        "childNode": this.childNodeP,
                        participantList:[]
                    }
                }
            } else {
                data = {
                    name: "路由",
                    nodeType,
                    childNode: null,
                    conditionList: [{
                        name: "条件1",
                        nodeType: 'CONDITION',
                        priorityLevel: 1,
                        childNode: this.childNodeP,
                        participantList:[]
                    }, {
                        name: "条件2",
                        nodeType: 'CONDITION',
                        priorityLevel: 2,
                        childNode: null,
                        participantList:[]
                    }]
                }
            }
            data && this.$emit("update:childNodeP", data)
        }
    }
}