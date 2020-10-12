<template>
    <div class="addMenu">
        <a-modal :title="modaltitle" :visible="showModal" :width="1000" @cancel="handleCancel">
            <a-form :form="form">
                <a-row type="flex">
                    <a-col :span="12">
                        <a-form-item label="节点类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-select v-decorator="['type',validates.type]" mode="default" placeholder="请选择节点类型" style="width: 100%" @change="selNodeType">
                                <a-select-option v-for="k in nodeTypeSelect" :key="k.id" :value="k.id">
                                {{ k.name }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="节点名称" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['name',validates.name]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="form.getFieldValue('type') == 1 || form.getFieldValue('type') == 5">
                        <a-form-item label="url" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['url',validates.url]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="form.getFieldValue('type') == 3">
                        <a-form-item label="code" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-input v-decorator="['code',validates.code]"/>
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
                        <a-form-item label="描述" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-textarea v-decorator="['remark']" :autosize="{ minRows: 2, maxRows: 6 }"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="是否启用" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-switch checkedChildren="启用" unCheckedChildren="禁用" v-decorator="['enabled', { valuePropName: 'checked' }]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="form.getFieldValue('type') == 3">
                        <a-form-item label="是否列表展示" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-switch checkedChildren="是" unCheckedChildren="否" v-decorator="['listDisplay', { valuePropName: 'checked' }]"/>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="form.getFieldValue('type') == 3">
                        <a-form-item label="是否详情展示" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                            <a-switch checkedChildren="是" unCheckedChildren="否" v-decorator="['detailDisplay', { valuePropName: 'checked' }]"/>
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