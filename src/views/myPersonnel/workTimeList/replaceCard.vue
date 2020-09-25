<template>
    <div>
        <a-modal title="申请补卡" :visible="showModal" :width="1000" @cancel="handleCancel">
            <a-form :form="formField">
                <a-row type="flex">
                    <a-col :span="12">
                        <a-form-item label="员工工号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            {{formItem.code}}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="姓名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            {{formItem.empName}}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="异常类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['exceptionType',validates.exceptionType]" style="width: 100%" allowClear>
                                <a-select-option v-for="k in replacecardList" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col> 

                     <a-col :span="12">
                        <a-form-item label="日期" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            {{formItem.attendanceDate}}
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
                exceptionType:{rules: [{ required: true, message: '请选择异常类型' }]},
                applyCause:{rules: [{ required: true, message: '请填写事由' }]}
            },
            replacecardList:[],
            formField : this.$form.createForm(this, { name: 'replacecard' }),
            confirmLoading:false,
            formItem:{},
            deptPrincipal:''
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
            
            e && e.preventDefault()
            this.formField.validateFields(async (err, values) => {
                if (!err) {
                    this.confirmLoading=true   
                    let saveData = [[
                        {"code":"empCode","value":[this.formItem.code]},
                        {"code":"empName","value":[this.formItem.empName]},
                        {"code":"exceptionType","value":[values.exceptionType]},
                        {"code":"period","value":[this.formItem.period]},
                        {"code":"deptPrincipal","value":[this.deptPrincipal]},
                        {"code":"applyTime","value":[this.formItem.attendanceDate]},
                        {"code":"applyCause","value":[values.applyCause]}
                    ]]
                    let params=saveData
                    applyReolaceCard(params).then(res=>{
                        this.$message.success('提交成功')
                        this.confirmLoading=false
                        this.showModal=false
                        this.$emit('refelsh')
                    })
                }      
            })
            
        },
        showModalLoad(item){
            this.formItem=item
            this.formItem.period=(item.startStatus=="缺卡"&&item.endStatus=="缺卡")||item.dayStatus=='旷工'?'全天':item.startStatus=="缺卡"&&item.endStatus!="缺卡"?'上班':item.startStatus!="缺卡"&&item.endStatus=="缺卡"?'下班':''
            this.showModal=true
            userToManager(item.code).then(res=>{
                this.deptPrincipal=res
            })
        }
    },
    created() { 
        this.codeLoad()
    }
}
</script>