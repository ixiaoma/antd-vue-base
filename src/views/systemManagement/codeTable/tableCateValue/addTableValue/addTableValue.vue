<style lang="less">
    @import './addTableValue.less';
</style>

<template>
    <div class="addTableValue">
        <a-modal
            v-model="tableModal"
            :title="modalTit"
            :width="pageType == 'add' ? 800 : '30%'"
            class="tableValueModal"
            @cancel="cancelFn">
            <a-spin fix size="large" :spinning="spinShow">
                <a-form>
                    <!-- 新建 -->
                    <a-row v-if="pageType == 'add'">
                        <!-- <a-col span="12" v-for="(item,index) in multiArr" :key="'a' + index">
                            <a-form-item :label="item.name" :required='true' :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }">
                                <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' filterOption v-model="item.fieldValue" >
                                    <a-select-option @click.native="loadNextData(ele.nodeLevel,ele)" v-for="(ele,index) in item.codes" :value="ele.codeKey" :key="ele.codeKey">{{ele.codeValue}}</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col> -->
                        <!-- 单选/多选/普通多级联动 -->
                        <a-col span="24" v-for="(item,index) in tableValueArr" :key="index">
                            <a-col span="12">
                                <a-form-item :label="'码表值排序' + (index + 1)" :required='true' :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }">
                                    <a-input-number style="width:100%;" :min="1" placeholder="码表值排序" v-model="item.sort"></a-input-number>
                                </a-form-item>
                            </a-col>
                            <a-col span="12">
                                <a-col :xxl="21" :lg="19">
                                    <a-form-item :label="'码表值' + (index + 1)" :required='true' :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }">
                                        <a-input allowClear placeholder="码表值" v-model="item.codeValue"></a-input>
                                    </a-form-item>
                                </a-col>
                                <a-col :xxl="3" :lg="5">
                                    <span @click="addTableValue(index)" class="btnWrap addTableValueBtn">
                                        <a-icon type="plus-circle" title="添加码表值"/>
                                    </span>
                                    <span @click="delTableValue(index)" class="btnWrap delTableValueBtn">
                                        <a-icon type="delete" title="删除码表值"/>
                                    </span>
                                </a-col>
                            </a-col>
                        </a-col>
                    </a-row>
                    <!-- 编辑 -->
                    <a-row v-else>
                        <a-col span="24">
                            <a-form-item label="码表值名称" :required='true' :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                <a-input allowClear v-model="editObj.codeValue"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col span="24">
                            <a-form-item label="排序" :required='true' :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                <a-input-number style="width:100%;" :min="1" placeholder="排序" v-model="editObj.sort"></a-input-number>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
            </a-spin>
            <div slot="footer">
                <a-button  @click="cancelFn">取消</a-button>
                <a-button  type="primary" @click="saveFn" :loading="btnLoading">保存</a-button>
            </div>
        </a-modal>
    </div>
</template>

<script src="./addTableValue.js"></script>
