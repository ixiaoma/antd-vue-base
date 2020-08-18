<template>
    <div class="addUserModal">
        <a-modal :title="modaltitle" :visible="showModal" :width="1000" @cancel="handleCancel">
            <a-form :form="formField">
                <a-row type="flex">
                    <a-col :span="12">
                        <a-form-item label="姓名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input  v-decorator="['realName',validates.realName]" :placeholder="modaldisabled?'':'请填写姓名'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="登录名(昵称)" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input  v-decorator="['loginName',validates.loginName]" :placeholder="modaldisabled?'':'请填写登录名'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="员工工号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input  v-decorator="['staffNo',validates.staffNo]" :placeholder="modaldisabled?'':'请填写登录名'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="手机号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['cellphone',validates.cellphone]" :placeholder="modaldisabled?'':'请填写手机号'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="邮箱" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                             <a-input v-decorator="['email',validates.email]" :placeholder="modaldisabled?'':'请填写邮箱'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>          
                    <a-col :span="12">
                        <a-form-item label="办公地址" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['address',validates.address]" :placeholder="'请选择办公地址'" style="width: 100%" allowClear>
                                <a-select-option v-for="k in provincelist" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="性别" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-radio-group :options="sexRadios"  v-decorator="['gender',validates.gender]" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="是否启用" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-radio-group :options="enabledRadios"  v-decorator="['enabled',validates.enabled]" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="微信号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['wechatNumber',validates.wechatNumber]" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="身份证号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['idCard',validates.idCard]" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="出生日期" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-date-picker
                            :getCalendarContainer='triggerNode => triggerNode.parentNode'
                            v-decorator="['birthDate',validates.birthDate]"
                            format="YYYY-MM-DD"
                            style="width:100%"
                            :placeholder="modaldisabled?'':'请选择出生日期'"
                            :disabled="modaldisabled"
                            />
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

<script src="./addUserModal"></script>

<style lang="less">
    @import './addUserModal.less';
</style>   