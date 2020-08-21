<template>
    <div class="addRole">
        <a-modal :title="modaltitle" :visible="showModal" :width="600" @cancel="handleCancel">
            <a-form :form="form">
                <a-row type="flex">
                    <a-col :span="24">
                        <a-form-item label="名称" :label-col="{ span: 4 }" :wrapper-col="{ span: 19 }">
                            <a-input v-decorator="['name',validates.name]"/>
                        </a-form-item>
                    </a-col>
                    <!-- <a-col :span="24">
                        <a-form-item label="是否启用" :label-col="{ span: 4 }" :wrapper-col="{ span: 19 }">
                            <a-switch checkedChildren="启用" unCheckedChildren="禁用" v-decorator="['enabled', { valuePropName: 'checked' }]"/>
                        </a-form-item>
                    </a-col> -->
                    <a-col :span="24">
                        <a-form-item label="描述" :label-col="{ span: 4 }" :wrapper-col="{ span: 19 }">
                            <a-textarea v-decorator="['description']" :autosize="{ minRows: 2, maxRows: 6 }"/>
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

<script src="./addRole"></script>

<style lang="less">
    @import './addRole.less';
</style>   