import { addCodeValue,editCodeValue,queryParentList,loadNextData } from '@/api/user'
export default {
    name: 'addTableValue',
    data() {
        return {
            fieldValueType:'',//(3:单选/多选  5:多级联动)
            id:'',//码表类别的id
            nodeLevel:'',//多级联动的层级
            categoryCode:'',
            tableModal:false,
            multiArr:[],
            tableValueArr:[{//码表值
                sort : 1,
                codeValue : '',
            }],
            btnLoading:false,
            spinShow:false,
            pageType:'add',
            modalTit:'新建码表值',
            editObj:null
        }
    },
    methods: {
        showModal(pageType,data) {//如果是多级联动类型的需要先去请求该层级以上的所有层级数据
            this.pageType = pageType;
            this.clearFormData();
            if(pageType == 'add') {
                this.modalTit = '新建码表值'
                this.fieldValueType = this.$route.query.fieldValueType;
                this.id = this.$route.query.codeCategoryId;
                this.nodeLevel = this.$route.query.nodeLevel;
                this.categoryCode = this.$route.query.categoryCode;
                if(this.fieldValueType == 5 && this.nodeLevel > 1) {//如果是多级联动则去加载所有层级
                    this.spinShow = true;
                    queryParentList(this.id).then(res=>{
                        if(res.code == 200) {
                            var arr = [];
                            Object.keys(res.data).forEach((ele,index)=>{//设置该层级以上所有层级的数据
                                let obj = {
                                    name: ele,
                                    codes: index == 0 ? res.data[ele] : [],
                                    fieldValue: '',
                                    categoryCode: res.data[ele][0].categoryCode
                                }
                                arr.push(obj);
                            })
                            this.multiArr = arr;
                        } else {
                            this.spinShow = false;
                        }
                    }).then(res=>{
                        this.spinShow = false;
                    }).catch(()=>{
                        this.spinShow = false;
                    })
                }
            } else {
                this.modalTit = '编辑码表值'
                this.editObj = JSON.parse(JSON.stringify(data));
            }
            this.tableModal = true;
        },
        // loadNextData(flag,item) {//多级联动加载下一级的值
        //     if(flag != this.multiArr.length) {//最后一级不请求接口
        //         loadNextData(this.multiArr[flag].categoryCode,item.codeKey).then(res => {
        //             if(res.code == 200) {
        //                 this.multiArr[flag].codes = res.data;
        //             }
        //         })
        //     }
        // },
        addTableValue(index) {//添加码表值
            let obj = {
                sort : 1,
                codeValue : ''
            }
            this.tableValueArr.splice(index + 1,0,obj);
        },
        delTableValue(index) {//删除码表值
            if(this.tableValueArr.length == 1) {
                this.tableValueArr = [{
                    sort : 1,
                    codeValue : ''
                }];
            } else {
                this.tableValueArr.splice(index,1);
            }
        },
        saveFn() {//保存
            if(this.pageType == 'add') {
                for(let i = 0;i < this.multiArr.length;i ++) {//如果是多级联动判断是否选择了该层级之前的所有层级的值
                    if(!this.multiArr[i].fieldValue) {
                        this.$message.warning('请选择"' + this.multiArr[i].name + '"字段的值')
                        return ;
                    }
                } 
                //单选/多选/普通多级联动的参数验证
                for(let i = 0;i < this.tableValueArr.length;i ++) {
                    if(!this.tableValueArr[i].sort) {//判断是否填写了码表值编码
                        this.$message.warning('请填写"码表值排序' + (i + 1) + '"的值')
                        return ;
                    }
                    if(!this.tableValueArr[i].codeValue) {//判断是否填写了码表值
                        this.$message.warning('请填写"码表值' + (i + 1) + '"的值')
                        return ;
                    }
                }
                this.btnLoading = true;
                // let params = {
                //     codeCategoryId : this.id,
                // }
                // let params={}
                // if(this.fieldValueType == 5 && this.multiArr.length) {//多级联动并且不是第一级数据，所需要传的参数
                //     params.parentCodeKey = this.multiArr[this.multiArr.length - 1].fieldValue;
                // }
                // params.codeList = JSON.parse(JSON.stringify(this.tableValueArr));
                let codeList = JSON.parse(JSON.stringify(this.tableValueArr));
                codeList.forEach(item=>{
                    item.categoryCode=this.$route.query.categoryCode
                    item.categoryName=this.$route.query.categoryName         
                    item.nodeLevel=this.$route.query.nodeLevel
                })
                addCodeValue(codeList).then(res=>{
                    // if(res.code == 200) {
                        this.$message.success('成功');
                        this.tableModal = false;
                        this.$emit('refresh');
                        this.btnLoading = false;
                    // } else {
                    //     this.btnLoading = false;
                    // }
                }).catch(()=>{
                    this.btnLoading = false;
                })
            } else {
                if (!this.editObj.codeValue) {
                    this.$message.warning('请填写码表值');
                    return;
                }
                if (!this.editObj.sort) {
                    this.$message.warning('请填写排序字段值');
                    return;
                }
                this.btnLoading = true;
                let params = {
                    codeValue:this.editObj.codeValue,
                    sort: this.editObj.sort,
                    id: this.editObj.id
                }
                editCodeValue(params).then(res => {
                    // if (res.code == 200) {
                        this.$message.success('成功');
                        this.tableModal = false;
                        this.$emit('refresh');
                        this.btnLoading = false;
                    // } else {
                    //     this.btnLoading = false;
                    // }
                }).catch(() => {
                    this.btnLoading = false;
                })
            }
        },
        cancelFn() {//取消
            this.tableModal=false;
            this.clearFormData();
        },
        clearFormData() {//清空表单数据
            this.tableValueArr = [{
                sort : 1,
                codeValue : ''
            }];
            this.btnLoading = false;
            this.multiArr = [];
        }
    }
}