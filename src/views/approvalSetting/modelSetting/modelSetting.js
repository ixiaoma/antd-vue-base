import { valueTypeList } from '@/utils/commonCode'
import { saveForm, getFormDetail } from '@/api/approval'
import { codeTableList } from '@/api/user'
export default {
    data(){
        return {
            valueTypeList,
            visible:false,
            showSetting:false,
            currentIndex:null,
            validateStatus:'success',
            validateCategoryCode:'success',
            currentItem:{},
            layoutList:[] , 
            codeList3: [] , // 单选 / 多选 关联码表下拉
        }
    },
    computed:{
        // 是否选择关联码表值
        isSelectCode(){
            let { currentItem } = this ; 
            let arr = ['RADIO','CHECKBOX']
            return currentItem.valueType && arr.indexOf(currentItem.valueType) > -1 
        },
    },
    methods:{
        // 是否选择关联码表值
        isSelectCodeMethod(valueType){
            let { currentItem } = this ; 
            let arr = ['RADIO','CHECKBOX']
            return valueType && arr.indexOf(valueType) > -1 
        },

        // 码表列表
        getCodeList(type){
            let params = {
                "pageNo": 1,
                "pageSize": 1000,
                "filter": {
                    "filters": [
                        {
                            "field": "type",
                            "operator": "eq",
                            "value": type  // 3 单选 多选  5 多级联动
                        }
                    ],
                    "logic": "and"
                }
            }
            codeTableList(params).then(res => {
                this[`codeList${type}`] = res.records;
            })
        },

        addField(item){
            this.currentItem = {valueType:item.label,name:item.value,required:false,description:item.valueType == 'RADIO' || item.valueType == 'CHECKBOX' || item.valueType == 'SELECT' || item.valueType == 'DATETIME' ? '请选择' : '请输入',conditionField:false}
            this.layoutList.push(this.currentItem)
            this.currentIndex = this.layoutList.length-1
            this.showSetting = true
            this.visible = false
        },
        editField(item,index){
            this.showSetting = true
            this.currentItem = item
            this.currentIndex = index
        },
        deleteField(index){
            this.layoutList.splice(index,1)
        },
        async commit(){
            if(this.layoutList.length){
                for(let i = 0 ; i < this.layoutList.length ; i++){
                    if(!this.layoutList[i].name){
                        this.$message.warning('控件名称不能为空')
                        this.validateStatus = 'error'
                        return;
                    }
                    if( !this.layoutList[i].categoryCode && this.isSelectCodeMethod(this.layoutList[i].valueType)){
                        this.$message.warning('请选择关联码表值')
                        this.validateCategoryCode = 'error'
                        return 
                    }
                }
                const { id } = this.$route.query
                const parameter = {
                    id,
                    params:this.layoutList
                }
                const res = await saveForm(parameter)
                if(res){
                    this.$emit('nextStep')
                }
            }else{
                this.$message.warning('请维护控件模板')
            }
        },
        async getFormDetailList(){
            const { id } = this.$route.query
            this.layoutList = await getFormDetail({id})
        }
    },
    created(){
        this.getFormDetailList()
        this.getCodeList(3)
    }
}