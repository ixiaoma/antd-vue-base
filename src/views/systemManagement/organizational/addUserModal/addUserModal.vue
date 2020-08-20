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
                            <a-input  v-decorator="['nickname',validates.nickname]" :placeholder="modaldisabled?'':'系统自动生成'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="员工工号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input  v-decorator="['staffNo',validates.staffNo]" :placeholder="modaldisabled?'':'请填写登录名'" disabled/>
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
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['theilCity',validates.theilCity]" :placeholder="modaldisabled?'':'请选择办公地址'" style="width: 100%" :disabled="modaldisabled" allowClear>
                                <a-select-option v-for="k in theilCityList" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="性别" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-radio-group :options="sexRadios"  v-decorator="['sex',validates.sex]" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="员工状态" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['newSales',validates.newSales]" :placeholder="modaldisabled?'':'请选择员工状态'" style="width: 100%" :disabled="modaldisabled" allowClear>
                                <a-select-option v-for="k in salesStatus" :key="k.codeKey" :value="k.codeKey">
                                {{ k.codeValue }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <!-- 经理 -->
                    <a-col :span="12">
                        <a-form-item label="主属部门" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <!-- <a-tree-select
                                :treeData="treeData"
                                style="width: 100%"
                                v-decorator="['deptId',validates.deptId]"
                                :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
                                allowClear
                                @change="treeDataChange"
                                :showSearch='true'
                                treeNodeFilterProp="title"
                                :placeholder="modaldisabled?'':'请选择员主属部门'" 
                                :disabled="modaldisabled"
                                :getPopupContainer="triggerNode => triggerNode.parentElement"
                            />     -->
                            <a-tree-select
                                :treeData="treeData"
                                style="width: 100%"
                                v-decorator="['dept',validates.dept]"
                                labelInValue
                                :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
                                @change="treeDataChange"
                                :showSearch='true'
                                treeNodeFilterProp="title"
                                :placeholder="modaldisabled?'':'请选择员主属部门'" 
                                :disabled="modaldisabled"
                                :getPopupContainer="triggerNode => triggerNode.parentElement"
                            />                
                        </a-form-item>
                    </a-col>
                     <a-col :span="12">
                        <a-form-item label="身份证号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['idCard',validates.idCard]" :placeholder="modaldisabled?'':'请填写身份证号'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="微信号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['wechat',validates.wechat]" :placeholder="modaldisabled?'':'请填写微信号'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                     <a-col :span="12">
                        <a-form-item label="QQ" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['qq',validates.qq]" :placeholder="modaldisabled?'':'请填写QQ号'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>
                     <a-col :span="12">
                        <a-form-item label="微博" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['weibo',validates.weibo]" :placeholder="modaldisabled?'':'请填写微博号'" :disabled="modaldisabled"/>
                        </a-form-item>
                    </a-col>   
                    <a-col :span="12">
                        <a-form-item label="出生日期" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-date-picker
                            :getCalendarContainer='triggerNode => triggerNode.parentNode'
                            v-decorator="['birthday',validates.birthday]"
                            format="YYYY-MM-DD"
                            style="width:100%"
                            :placeholder="modaldisabled?'':'请选择出生日期'"
                            :disabled="modaldisabled"
                            />
                        </a-form-item>
                    </a-col>
                     <a-col :span="12">
                        <a-form-item label="入职日期" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-date-picker
                            :getCalendarContainer='triggerNode => triggerNode.parentNode'
                            v-decorator="['employmentDate',validates.employmentDate]"
                            format="YYYY-MM-DD"
                            style="width:100%"
                            :placeholder="modaldisabled?'':'请选择入职日期'"
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