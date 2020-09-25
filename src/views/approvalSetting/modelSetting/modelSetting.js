import { valueTypeList } from '@/utils/commonCode'
import { saveForm, getFormDetail } from '@/api/approval'
import { codeTableList } from '@/api/user'
import fieldSettingMixin from '@/mixins/fieldSetting'
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
            codeList: [] , // 单选 / 多选 关联码表下拉
            categoryList:[],//多级联动下拉
            categoryCodeList:[
                {
                    codeCategory:'',
                    sort:1
                }
            ]
        }
    },
    mixins:[fieldSettingMixin],
    computed:{
        // 是否选择关联码表值
        isSelectCode(){
            let { currentItem } = this ; 
            let arr = ['RADIO','CHECKBOX']
            return currentItem.valueType && arr.indexOf(currentItem.valueType) > -1 
        },
    },
    methods:{
        // 码表列表
        async getCodeList(type){
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
            const res = await codeTableList(params)
            return res.records
        },
        addField(item){
            this.currentItem = {
                valueType:item.label,
                name:item.value,
                required:false,
                serverApi:null,
                referObjectSetField:null,
                conditionField:false,
                referObjectField:null,
                referObjectCode:null,
                description:null,
                search:false,
                tableHead:false,
                display:false
            }
            if(item.label == 'RADIO' || item.label == 'CHECKBOX' || item.label == 'SELECT'){
                this.currentItem.categoryCodes = [
                    {
                        codeCategory:null,
                        sort:1
                    }
                ]
            }
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
        async getFormDetailList(){
            const { id } = this.$route.query
            this.layoutList = await getFormDetail({id})
        },
        async getInitCodeList(){
            this.codeList = await this.getCodeList(3)
            this.categoryList = await this.getCodeList(5)
        },
        async commit(){
            if(this.layoutList.length){
                for(let i = 0 ; i < this.layoutList.length ; i++){
                    const pre = this.layoutList[i]
                    if(!pre.name){
                        this.$message.warning('控件名称不能为空')
                        this.validateStatus = 'error'
                        return;
                    }
                    if((pre.valueType == 'RADIO' || pre.valueType == 'CHECKBOX') && pre.categoryCodes){
                        const noSelect =  pre.categoryCodes.filter(ele=>!ele.codeCategory)
                        if(noSelect.length){
                            this.$message.warning('请选择关联码表值')
                            this.validateCategoryCode = 'error'
                            return 
                        }
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
        }
    },
    created(){
        this.getFormDetailList()
        this.getInitCodeList()
    }
}