<template>
    <div>
        <div class="node-wrap" v-if="nodeConfig.nodeType!='EXCLUSIVE' && nodeConfig.name != 'end_event'">
            <div class="node-wrap-box" :class="(nodeConfig.name == 'start_event'?'start-node ':'')+(isTried&&nodeConfig.error?'active error':'')">
                <div>
                    <div class="title" :style="'background: rgb('+ ['87, 106, 149','255, 148, 62','50, 150, 250'][nodeConfig.nodeType] +');'">
                        <a-icon style='margin-right:5px' type="user" v-show="nodeConfig.nodeType=='APPROVE'"/>
                        <a-icon style='margin-right:5px' type="team" v-show="nodeConfig.nodeType==2"/>
                        <span v-if="nodeConfig.name == 'start_event'">发起人</span>
                        <input type="text" class="ant-input editable-title-input" v-if="nodeConfig.name != 'start_event' && isInput"
                            @blur="blurEvent()" @focus="$event.currentTarget.select()"
                            v-model="nodeConfig.name" :placeholder="placeholderList[nodeConfig.nodeType]">
                        <span class="editable-title" @click="clickEvent()" v-if="nodeConfig.name != 'start_event' && !isInput">{{nodeConfig.name || '条件'}}</span>
                        <a-icon type="close" class="close" v-if="nodeConfig.name != 'start_event'" @click="delNode()"/>
                    </div>
                    <div class="content" @click="setPerson">
                        <div class="text" v-if="nodeConfig.name == 'start_event'">{{arrToStr(flowPermission)?arrToStr(flowPermission):'所有人'}}</div>
                        <div class="text" v-if="nodeConfig.nodeType=='APPROVE'">
                            <span class="placeholder" v-if="!setApproverStr(nodeConfig)">请选择{{placeholderList[nodeConfig.nodeType]}}</span>
                            {{setApproverStr(nodeConfig)}}
                        </div>
                        <div class="text" v-if="nodeConfig.nodeType==2">
                            <span class="placeholder" v-if="!copyerStr(nodeConfig)">请选择{{placeholderList[nodeConfig.nodeType]}}</span>
                            {{copyerStr(nodeConfig)}}
                        </div>
                        <a-icon type="right" class="arrow"/>
                    </div>
                </div>
            </div>
            <add-node :childNodeP.sync="nodeConfig.childNode"></add-node>
        </div>
        <div class="branch-wrap" v-if="nodeConfig.nodeType=='EXCLUSIVE'">
            <div class="branch-box-wrap">
                <div class="branch-box">
                    <button class="add-branch" @click="addTerm">添加条件</button>
                    <div class="col-box" v-for="(item,index) in nodeConfig.conditionList" :key="index">
                        <div class="condition-node">
                            <div class="condition-node-box">
                                <div class="auto-judge" :class="isTried&&item.error?'error active':''">
                                    <div class="sort-left" v-if="index!=0" @click="arrTransfer(index,-1)">&lt;</div>
                                    <div class="title-wrapper">
                                        <input type="text" class="ant-input editable-title-input" v-if="isInputList[index]"
                                        @blur="blurEvent(index)" @focus="$event.currentTarget.select()" v-focus v-model="item.name">
                                        <span class="editable-title" @click="clickEvent(index)" v-if="!isInputList[index]">{{item.name}}</span>
                                        <span class="priority-title" @click="setPerson(item.priorityLevel)">优先级{{item.priorityLevel}}</span>
                                        <a-icon type="close" class="close" @click="delTerm(index)"/>
                                    </div>
                                    <div class="sort-right" v-if="index!=nodeConfig.conditionList.length-1"
                                        @click="arrTransfer(index)">&gt;</div>
                                    <div class="content" @click="setPerson(item.priorityLevel)">{{conditionStr(item,index)}}</div>
                                    <div class="error_tip" v-if="isTried&&item.error">
                                        <i class="anticon anticon-exclamation-circle" style="color: rgb(242, 86, 67);"></i>
                                    </div>
                                </div>
                                <add-node :childNodeP.sync="item.childNode"></add-node>
                            </div>
                        </div>
                        <nodeWrap v-if="item.childNode && item.childNode" :nodeConfig.sync="item.childNode" :tableId="tableId" :isTried.sync="isTried" :directorMaxLevel="directorMaxLevel"></nodeWrap>
                        <div class="top-left-cover-line" v-if="index==0"></div>
                        <div class="bottom-left-cover-line" v-if="index==0"></div>
                        <div class="top-right-cover-line" v-if="index==nodeConfig.conditionList.length-1"></div>
                        <div class="bottom-right-cover-line" v-if="index==nodeConfig.conditionList.length-1"></div>
                    </div>
                </div>
                <add-node :childNodeP.sync="nodeConfig.childNode"></add-node>
            </div>
        </div>
        <nodeWrap v-if="nodeConfig.childNode && nodeConfig.childNode" :nodeConfig.sync="nodeConfig.childNode" :tableId="tableId"
        :isTried.sync="isTried" :directorMaxLevel="directorMaxLevel"></nodeWrap>
        <drawer ref='drawer'/>
    </div>
</template>

<style lang="less" scoped>
  @import './nodeWrap.css';
</style>

<script src='./nodeWrap.js'></script>