<template>
    <div>
        <a-modal title="申请补卡" :visible="showModal" @cancel="handleCancel">
            <a-form :form="formField">
                <a-row type="flex">
                    <!-- <a-col :span="22">
                        <a-form-item label="异常类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['exceptionType',validates.exceptionType]" style="width: 100%" allowClear>
                                <a-select-option v-for="k in replacecardList" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>  -->
                     <a-col :span="22">
                        <a-form-item label="考勤时间段" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['period',validates.period]" style="width: 100%" allowClear>
                                <a-select-option v-for="k in periodList" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col> 
                    <!-- <a-col :span="22">
                        <a-form-item label="事由" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-textarea :row="3" v-decorator="[ 'applyCause', validates.applyCause]" placeholder="请填写事由" />
                        </a-form-item>
                    </a-col> -->
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
import { applyReolaceCard } from '@/api/apply'
import { userToManager,getCodeList } from '@/api/user'

export default {
    name: 'replacecard',
    components:{
        
    },
    data() {
        return {
            showModal: false,
             validates:{
                // exceptionType:{rules: [{ required: true, message: '请选择异常类型' }]},
                period:{rules: [{ required: true, message: '请选择考勤时间段' }]},
                // applyCause:{rules: [{ required: false, message: '请填写事由' }]}
            },
            replacecardList:[],
            periodList:[],
            formField : this.$form.createForm(this, { name: 'replacecard' }),
            confirmLoading:false,
     
            selectedRows:[]
        }
    },
    methods: {
        codeLoad(){
            getCodeList('replacecard').then(res=>{
                this.replacecardList=res
            })
            getCodeList('replace').then(res=>{
                this.periodList=res
            })
        },
        handleCancel(){
            this.showModal=false
        },
        handleOk(e){
            
          
            
            e && e.preventDefault()
            this.formField.validateFields(async (err, values) => {
                if (!err) {
                      this.confirmLoading=true
                    let saveData = []
                    this.selectedRows.forEach(item=>{
                        let arr=[
                            {"code":"empCode","value":[item.code]},
                            {"code":"empName","value":[item.empName]},
                            // {"code":"exceptionType","value":[values.exceptionType]},
                            {"code":"period","value":[values.period]},
                            // {"code":"deptPrincipal","value":[item.deptPrincipal]},
                            {"code":"applyTime","value":[item.attendanceDate]},
                            // {"code":"applyCause","value":[values.applyCause]}
                        ]
                        saveData.push(arr)
                    })
                   
                
                    applyReolaceCard(saveData).then(res=>{
                        this.$message.success('提交成功')
                        this.confirmLoading=false
                        this.showModal=false
                        this.$emit('refelsh')
                    })
                }      
            })
            
        },
        showModalLoad(item){
            this.showModal=true
        }
    },
    created() { 
        this.codeLoad()
    }
}
</script>