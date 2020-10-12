<template>
    <div class="menuManage">
        <a-row>
            <a-col span="11">
                <a-card size="small" title="菜单列表">
                    <a-button size="small" type="primary" slot="extra" @click="addTreeNode">添加根节点</a-button>
                    <span v-if="!treeData.length">暂无节点信息</span>
                    <a-tree
                        v-else
                        :treeData="treeData"
                        @select="selectNode"
                        @expand="expand"
                        :defaultExpandedKeys=defaultExpandedKeys>
                        <template slot="custom" slot-scope="item">
                            <div class="treeSlotWrap">
                                <span class="treeTit" :title="item.title">{{ item.title }}</span>
                                <div class="operatorIcon">
                                    <a-icon type="plus" title="新建" class="but_type operatorBtn" @click.stop="addTreeNode(item)" />
                                    <a-icon type="edit" title="编辑" class="but_type operatorBtn" @click.stop="editTreeNode(item)" />
                                    <a-icon type="delete" title="删除" class="but_type operatorBtn" @click.stop="delTreeNode(item)" />
                                </div>
                            </div>
                        </template>
                    </a-tree>
                </a-card>
            </a-col>
            <a-col span="11" push="1">
                <a-card size="small" title="菜单详情">
                    <span v-if="!currentNode">（请点击左侧节点查看详情）</span>
                     <a-form v-else>
                        <a-row type="flex">
                            <a-col :span="24">
                                <a-form-item label="节点类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-select disabled v-model="currentNode.type" mode="default" placeholder="请选择节点类型" style="width: 100%" allowClear>
                                        <a-select-option v-for="k in nodeTypeSelect" :key="k.id" :value="k.id">
                                        {{ k.name }}
                                        </a-select-option>
                                    </a-select>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="名称" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-input disabled v-model="currentNode.name"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24" v-if="currentNode.type == 1 || currentNode.type == 5">
                                <a-form-item label="url" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-input disabled v-model="currentNode.url"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24" v-if="currentNode.type == 3">
                                <a-form-item label="code" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-input disabled v-model="currentNode.code"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24" v-if="currentNode.type == 1">
                                <a-form-item label="图标" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-input disabled v-model="currentNode.icon"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="排序" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-input-number disabled :min="1" v-model="currentNode.sort"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="描述" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-textarea disabled v-model="currentNode.remark" :autosize="{ minRows: 2, maxRows: 6 }"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="是否启用" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <!-- <a-switch disabled checkedChildren="启用" unCheckedChildren="禁用" :checked="currentNode.enabled == 1"/> -->
                                    <a-input disabled :value="currentNode.enabled == 1 ? '启用' : '禁用' "/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24" v-if="currentNode.type == 3">
                                <a-form-item label="是否列表展示" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-switch disabled checkedChildren="是" unCheckedChildren="否" :checked="currentNode.listDisplay  == 1"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24" v-if="currentNode.type == 3">
                                <a-form-item label="是否详情展示" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-switch disabled checkedChildren="是" unCheckedChildren="否" :checked="currentNode.detailDisplay  == 1"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </a-card>
            </a-col>
        </a-row>
        <addMenu ref="addMenu" @refresh="getMenusList"></addMenu>
    </div>
</template>

<script src="./menuManage.js"></script>

<style lang="less">
@import './menuManage.less';
</style>