<template>
    <div class="addLeaveType">
        <a-modal :title="modaltitle" :visible="showModal" :width="600" @cancel="handleCancel">
            <a-form :form="formField">
                <a-row type="flex">
                    <a-col :span="22">
                        <a-form-item label="类型名称" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input  v-decorator="['name',validates.name]" :placeholder="modaldisabled?'':'请填写类型名称'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="22">
                        <a-form-item label="时间刻度" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['timeScale',validates.timeScale]" :placeholder="modaldisabled?'':'请选择时间刻度'" style="width: 100%" :disabled="modaldisabled" allowClear>
                                <a-select-option v-for="k in timeScaleList" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>  
                    <a-col :span="22">
                        <a-form-item label="是否限额" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['isQuota',validates.isQuota]" :placeholder="modaldisabled?'':'请选择是否限额'" style="width: 100%" :disabled="modaldisabled" allowClear>
                                <a-select-option v-for="k in isQuotaList" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>        
                </a-row>
            </a-form>
             <template slot="footer">
                <a-button key="back" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary" :loading="confirmLoading" @click="handleOk" v-if="!modaldisabled">保存</a-button>
            </template>
        </a-modal>
    </div>
</template>

<script src="./addLeaveType"></script>