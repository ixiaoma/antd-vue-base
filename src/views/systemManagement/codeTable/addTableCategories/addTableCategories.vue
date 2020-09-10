<template>
    <div class="addTableCategories">
        <a-modal
            v-model="tableModal"
            :title="modalTitle"
            :width="pageType == 'add' ? 800 : 500"
            @cancel="cancelFn">
            <a-form>
                <a-row>
                    <a-col :span="12" v-if="pageType == 'add'">
                        <a-form-item :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }" :required='true' label="数据类型">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-model="formItem.type" @change="selectFieldValueType" allowClear>
                                <a-select-option v-for="item in fieldValueTypeList" :value="item.codeKey" :key="item.codeKey">{{item.codeValue}}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="pageType == 'add'">
                        <a-form-item :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }" label="父节点" v-if="formItem.type == '5'">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-model="formItem.parentId">
                                <a-select-option v-for="item in multiArr" :value="item.id" :key="item.id">{{item.name}}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="pageType == 'add' ? 12 : 24">
                        <a-form-item :label-col="{ span: pageType == 'add' ? 9 : 6 }" :wrapper-col="{ span: pageType == 'add' ? 15 : 18 }" :required='true' label="类别名称">
                           <a-input v-model="formItem.name"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="pageType == 'add'">
                        <a-form-item :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }" :required='true' label="类别编码生成方式">
                            <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-model="formItem.autoCreateCode">
                                <a-select-option v-for="item in autoCreateCodeList" :value="item.codeKey" :key="item.codeKey">{{item.codeValue}}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" v-if="pageType == 'add'">
                        <a-form-item :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }" :required='true' label="类别编码" v-if="formItem.autoCreateCode == '1'">
                           <a-input v-model="formItem.code"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            <div slot="footer">
                <a-button  @click="cancelFn">取消</a-button>
                <a-button  type="primary" @click="saveFn" :loading="btnLoading">保存</a-button>
            </div>
        </a-modal>
    </div>
</template>

<script src="./addTableCategories.js"></script>
