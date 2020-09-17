<style lang="less">
    @import './staffAchievements.less';
</style>
<template>
    <div class="staffAchievements">
        <a-form :class="readonly ? 'detail-style' : ''" layout="inline">
            <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
                <a-collapse-panel key="1" header="目标权重">
                    <a-row :gutter="56">
                        <a-col span="24" v-for="(item,index) in tableValueArr" :key="index">
                            <a-col :xxl="12" :lg="12">
                                <a-form-item :label="'目标内容' + (index + 1)" :required='!readonly' :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }">
                                    <span v-if="readonly">{{item.targetText}}</span>
                                    <a-input allowClear placeholder="目标内容" v-model="item.targetText" v-else></a-input>
                                </a-form-item>
                            </a-col>
                            <a-col :xxl="readonly?12:8" :lg="readonly?12:8">
                                <a-form-item :label="'权重' + (index + 1)" :required='!readonly' :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }">
                                    <span v-if="readonly">{{item.weight}}%</span>
                                    <!-- <a-input v-else allowClear placeholder="权重" v-model="item.weight"></a-input> -->
                                    <a-input-number
                                        style="width:100%"
                                        :default-value="100"
                                        v-model="item.weight"
                                        :min="0"
                                        :max="100"
                                        :precision='0'
                                        :formatter="value => `${value}%`"
                                        :parser="value => value.replace('%', '')"
                                    />
                                </a-form-item>
                            </a-col>
                            <a-col :xxl="4" :lg="4" v-if="!readonly">
                                <span @click="addTableValue(index)" class="btnWrap addTableValueBtn">
                                    <a-icon type="plus-circle" title="添加码表值"/>
                                </span>
                                <span @click="delTableValue(index)" class="btnWrap delTableValueBtn">
                                    <a-icon type="delete" title="删除码表值"/>
                                </span>
                            </a-col>
                        </a-col>
                    </a-row>
                </a-collapse-panel>
            </a-collapse>
        </a-form>
    </div>
</template>

<script src="./staffAchievements.js"></script>
