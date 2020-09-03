<template>
    <div class="addMenu">
        <a-modal :title="modaltitle" :visible="showModal" :width="1000" @cancel="handleCancel">
            <a-form :form="form">
                <a-row type="flex">
                    <a-col :span="12">
                        <a-form-item label="节点类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select v-decorator="['type',validates.type]" mode="default" placeholder="请选择节点类型" style="width: 100%" @change="selNodeType">
                                <a-select-option v-for="(k,index) in nodeTypeSelect" :key="index" :value="k.id">
                                {{ k.name }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="节点名称" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['title',validates.title]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="form.getFieldValue('type') == 1">
                        <a-form-item label="routerName" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['url',validates.url]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="form.getFieldValue('type') == 3">
                        <a-form-item label="code" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['code',validates.code]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="objectCode" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select mode="default" :getPopupContainer='triggerNode => triggerNode.parentNode' v-decorator="['objectCode',validates.objectCode]" placeholder="请选择objectCode" style="width: 100%" allowClear>
                                <a-select-option v-for="k in objectTypeList" :key="k.code" :value="k.code">
                                {{ k.name }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="form.getFieldValue('type') == 1">
                        <a-form-item label="图标" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['icon',validates.icon]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="排序" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input-number :min="1" v-decorator="['sort',validates.sort]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="是否启用" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-switch checkedChildren="启用" unCheckedChildren="禁用" v-decorator="['enabledBool', { valuePropName: 'checked' }]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-show="form.getFieldValue('type') == 1">
                        <a-form-item label="菜单节点" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-switch checkedChildren="启用" unCheckedChildren="禁用" v-decorator="['leafBool', { valuePropName: 'checked' }]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-show="form.getFieldValue('type') == 3">
                        <a-form-item label="是否列表展示" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-switch checkedChildren="是" unCheckedChildren="否" v-decorator="['listDisplay', { valuePropName: 'checked' }]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-show="form.getFieldValue('type') == 3">
                        <a-form-item label="是否详情展示" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-switch checkedChildren="是" unCheckedChildren="否" v-decorator="['detailsDisplay', { valuePropName: 'checked' }]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="角色权限" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select mode="multiple" :getPopupContainer='triggerNode => triggerNode.parentNode' v-decorator="['roleIds',validates.roleIds]" placeholder="请选择角色权限" style="width: 100%" allowClear>
                                <a-select-option v-for="k in roleData" :key="k.id" :value="k.id">
                                {{ k.name }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                     <a-col :span="12">
                        <a-form-item label="描述" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-textarea v-decorator="['description']" :autoSize="{ minRows: 2, maxRows: 6 }"/>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
             <template slot="footer">
                <a-button key="back" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary" :loading="confirmLoading" @click="handleOk">保存</a-button>
            </template>
        </a-modal>
    </div>
</template>

<script src="./addMenu"></script>

<style lang="less">
    @import './addMenu.less';
</style>   