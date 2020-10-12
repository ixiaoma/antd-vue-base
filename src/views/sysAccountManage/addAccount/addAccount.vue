<template>
    <div class="add-account">
        <a-modal :title="modaltitle" :visible="showModal" :width="1000" @cancel="handleCancel">
            <a-form :form="formField">
                <a-row type="flex">
                    <a-col :span="12">
                        <a-form-item label="姓名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input  v-decorator="['realName',validates.realName]" :placeholder="modaldisabled?'':'请填写姓名'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="登录名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input  v-decorator="['loginName',validates.loginName]" :placeholder="modaldisabled?'':'请填写登录名'" :disabled="modaldisabled"/>
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
                    <a-col :span="12" v-if="modaltitle=='新建账户'">
                        <a-form-item label="密码" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['password',validates.password]" type="password" :placeholder="modaldisabled?'':'请填写密码'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="用户类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" @change="userTypeChange" v-decorator="['userType',validates.userType]" :placeholder="modaldisabled?'':'请选择用户类型'" style="width: 100%" allowClear :disabled="modaldisabled">
                                <a-select-option v-for="k in usertypelist" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="所属企业" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <!-- <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default"  v-decorator="['companyId',validates.companyId]" placeholder="请选择所属公司" style="width: 100%" allowClear :disabled="modaldisabled">
                                <a-select-option v-for="k in companyList" :key="k.id" :value="k.id">
                                {{ k.companyName }}
                                </a-select-option>
                            </a-select> -->
                            <a-select
                                showSearch
                                v-decorator="['companyId',validates.companyId]" 
                                :placeholder="modaldisabled?'':'请输入企业关键字搜索选择所属企业'" 
                                style="width: 100%" 
                                allowClear 
                                :disabled="modaldisabled"
                                :defaultActiveFirstOption="false"
                                :showArrow="false"
                                :filterOption="false"
                                @search="handleSearch"
                                @change="handleChange"
                                :notFoundContent="null"
                            >
                                <a-select-option v-for="k in companyList" :key="k.id" :value="k.id">
                                {{ k.companyName }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <!-- <a-col :span="12">
                        <a-form-item label="上级经理" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['superiorManagerId',validates.superiorManagerId]" placeholder="请选择上级经理" style="width: 100%" allowClear>
                                <a-select-option v-for="k in selectOption" :key="k.id" :value="k.id">
                                {{ k.name }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col> -->
                    <a-col :span="12">
                        <a-form-item label="省份" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" @change="getCityAdress" v-decorator="['province',validates.province]" :placeholder="modaldisabled?'':'请选择省份'" style="width: 100%" allowClear :disabled="modaldisabled">
                                <a-select-option v-for="k in provincelist" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="城市" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" @change="getCountryAdress" v-decorator="['city',validates.city]" :placeholder="modaldisabled?'':'请选择城市'" style="width: 100%" allowClear :disabled="modaldisabled">
                                <a-select-option v-for="k in citylist" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="区县" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['district',validates.district]" :placeholder="modaldisabled?'':'请选择区县'" style="width: 100%" allowClear :disabled="modaldisabled">
                                <a-select-option v-for="k in countylist" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="地址" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['address',validates.address]" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <!-- <a-col :span="12">
                        <a-form-item label="是否为管理员" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-radio-group :options="isAdminRadios"  v-decorator="['isAdmin',validates.isAdmin]" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col> -->
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
                    
                    <!-- <a-col :span="12">
                        <a-form-item label="状态" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode'v-decorator="['state',validates.state]"  mode="default" placeholder="请选择状态" style="width: 100%" allowClear>
                                <a-select-option v-for="k in selectOption" :key="k.id" :value="k.id">
                                {{ k.name }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col> -->
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
                    <a-col :span="12">
                        <a-form-item label="性别" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-radio-group :options="sexRadios"  v-decorator="['gender',validates.gender]" :disabled="modaldisabled"/>
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

<script src="./addAccount"></script>

<style lang="less">
    @import './addAccount.less';
</style>   