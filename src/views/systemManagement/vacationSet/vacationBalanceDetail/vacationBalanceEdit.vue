<template>
    <div class="vacationBalanceEdit">
        <a-modal :title="modaltitle" :visible="showModal" :width="600" @cancel="handleCancel">
            <a-form>
                <a-row type="flex">
                    <a-col :span="22">
                        <a-col span="20">
                        <a-form-item :label="username+'的年假余额修改为(天)'" :label-col="{ span: 14 }" :wrapper-col="{ span: 10 }">
                           <a-input-number style="width:100%" v-model="leaveBalance" :min="0" :max="5" :precision='0'/>
                        </a-form-item>
                        </a-col>
                        <a-col span="2"><p style="line-height:45px;margin-left:5px">天</p></a-col>
                    </a-col>
                    <a-col :span="22">
                        <a-form-item label="备注" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
                           <a-input style="width:100%" v-model="remark"/>
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

<script src="./vacationBalanceEdit"></script>