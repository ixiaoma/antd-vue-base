<template>
    <div class="menuManage">
        <a-row>
            <a-col span="11">
                <a-card size="small" title="菜单列表">
                    <a-button style="margin-right:10px" size="small" type="primary" slot="extra" @click="addTreeNode">添加</a-button>       
                    <a-button style="margin-right:10px" size="small" type="primary" slot="extra" @click="editTreeNode">编辑</a-button>
                    <a-button size="small" type="danger" slot="extra" @click="delTreeNode">删除</a-button>
                    <span v-if="!treeData.length">暂无节点信息</span>
                    <a-tree
                        v-else
                        :treeData="treeData"
                        @select="selectNode"
                        @expand="expand">
                    </a-tree>
                </a-card>
            </a-col>
            <a-col span="11" push="1">
                <a-card size="small" title="菜单详情">
                    <span v-if="!nodeData">（请点击左侧节点查看详情）</span>
                     <a-form v-else>
                        <a-row type="flex">
                            <a-col :span="24">
                                <a-form-item label="节点类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.type==1 ? '菜单' : nodeData.type==3 ? '按钮' : '对象'}}
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="名称" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.title}}
                                </a-form-item>
                            </a-col>
                            <a-col :span="24" v-if="nodeData.type != 3">
                                <a-form-item label="routerName" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.url}}
                                </a-form-item>
                            </a-col>
                            <a-col :span="24" v-if="nodeData.type == 3">
                                <a-form-item label="code" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.code}}
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="objectType" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.objectType}}
                                </a-form-item>
                            </a-col>
                             <a-col :span="24">
                                <a-form-item label="排序" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.sort}}
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="是否启用" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.enabledBool == true?"启用":"禁用"}}
                                </a-form-item>
                            </a-col>
                             <a-col :span="24" v-if="nodeData.type != 3">
                                <a-form-item label="菜单节点" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.leafBool == true?"启用":"禁用"}}
                                </a-form-item>
                            </a-col>
                             <a-col :span="24" v-if="nodeData.type == 3">
                                <a-form-item label="是否列表展示" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.listDisplay == 1?"是":"否"}}
                                </a-form-item>
                            </a-col>
                             <a-col :span="24" v-if="nodeData.type == 3">
                                <a-form-item label="是否详情展示" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    {{nodeData.detailsDisplay == 1?"是":"否"}}
                                </a-form-item>
                            </a-col>
                             <a-col :span="24" v-if="nodeData.type != 3">
                                <a-form-item label="菜单图标" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                    <a-icon style="font-size:18px;" :type="nodeData.icon" />
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="角色权限" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                   {{roleName}}
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="描述" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                                   {{nodeData.description}}
                                </a-form-item>
                            </a-col>      
                        </a-row>
                    </a-form>
                </a-card>
            </a-col>
        </a-row>
        <addMenu ref="addMenu" @refresh="refresh"></addMenu>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import './index.less';
</style>