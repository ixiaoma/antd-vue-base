export default {
    name: 'staffAchievements',
    data() {
        return {
            activeKey: ['1'],
            tableValueArr:[{//码表值
                targetText:'',
                weight : '',
            }],
        }
    },
    props:['readonly'],
    methods: {
        addTableValue(index) {//添加码表值
            let obj = {
                targetText:'',
                weight : '',
            }
            this.tableValueArr.splice(index + 1,0,obj);
        },
        delTableValue(index) {//删除码表值
            if(this.tableValueArr.length == 1) {
                this.tableValueArr = [{
                    targetText:'',
                    weight : '',
                }];
            } else {
                this.tableValueArr.splice(index,1);
            }
        }  
    }
}