<template>
    <div>
        <a-modal title="申请补卡" :visible="showModal" :width="1000" @cancel="handleCancel">
            <a-form :form="formField">
                <a-row type="flex">
                    <a-col :span="12">
                        <a-form-item label="员工工号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            {{empCode}}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="姓名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            {{empName}}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="异常类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['exceptionType',validates.exceptionType]" :placeholder="modaldisabled?'':'请选择标签'" style="width: 100%" :disabled="modaldisabled" allowClear>
                                <a-select-option v-for="k in replacecardList" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col> 

                     <a-col :span="12">
                        <a-form-item label="日期" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            {{applyTime}}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="部门负责人" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                           {{deptPrincipal}}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="事由" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-textarea :row="3" v-decorator="[ 'applyCause', validates.applyCause]" placeholder="请填写事由" />
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
             <template slot="footer">
                <a-button key="back" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary" :loading="confirmLoading" @click="handleOk">提交</a-button>
            </template>
        </a-modal>

    </div>
</template>
<script>
export default {
    name: 'replacecard',
    components:{
        
    },
    data() {
        return {
            showModal: false,
             validates:{
                exceptionType:{rules: [{ required: true, message: '请选择异常类型' }]},
                applyCause:{rules: [{ required: true, message: '请填写事由' }]}
            },
            replacecardList:[],
            formField : this.$form.createForm(this, { name: 'replacecard' }),
            confirmLoading:false
        }
    },
    methods: {
        codeLoad(){
            getCodeList('replacecard').then(res=>{
                this.replacecardList=res
            })
        },
        handleCancel(){
            this.showModal=false
        },
        handleOk(e){
            this.showModal=false
            this.confirmLoading=true
            this.confirmLoading=false
            e && e.preventDefault()
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    let saveData = []
                    [[
                        {"code":"empCode","value":[item.empCode]},
                        {"code":"empName","value":[item.empName]},
                        {"code":"exceptionType","value":[values.exceptionType]},
                        {"code":"period","value":[item.period]},
                        {"code":"deptPrincipal","value":[item.deptPrincipal]},
                        {"code":"applyTime","value":[item.applyTime]},
                        {"code":"applyCause","value":[values.applyCause]}
                    ]]
                }      
            })
        }
    },
    created() { 
        this.codeLoad()
    }
}
</script>