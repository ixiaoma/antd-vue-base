export default {
    props: ["childNodeP"],
    data() {
        return {
            visible: false
        }
    },
    methods: {
        addType(type) {
            this.visible = false;
            if (type != 4) {
                var data;
                if (type == 1) {
                    data = {
                        "nodeName": "审核人",
                        "error": true,
                        "type": 1,
                        "settype": 1,
                        "selectMode": 0,
                        "selectRange": 0,
                        "directorLevel": 1,
                        "replaceByUp": 0,
                        "examineMode": 1,
                        "noHanderAction": 1,
                        "examineEndDirectorLevel": 0,
                        "childNode": this.childNodeP,
                        "nodeUserList": []
                    }
                } else if (type == 2) {
                    data = {
                        "nodeName": "抄送人",
                        "type": 2,
                        "ccSelfSelectFlag": 1,
                        "childNode": this.childNodeP,
                        "nodeUserList": []
                    }
                }
                this.$emit("update:childNodeP", data)
            } else {
                this.$emit("update:childNodeP", {
                    "nodeName": "路由",
                    "type": 4,
                    "childNode": null,
                    "conditionNodes": [{
                        "nodeName": "条件1",
                        "error": true,
                        "type": 3,
                        "priorityLevel": 1,
                        "conditionList": [],
                        "nodeUserList": [],
                        "childNode": this.childNodeP,
                    }, {
                        "nodeName": "条件2",
                        "type": 3,
                        "priorityLevel": 2,
                        "conditionList": [],
                        "nodeUserList": [],
                        "childNode": null
                    }]
                })
            }
        }
    }
}