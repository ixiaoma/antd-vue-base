<template>
    <div class="roleManage">
        <a-row>
            <a-col span="8">
                <a-card size="small" title="角色列表">
                    <a-button class="addBtn" @click="addRole" slot="extra" size="small" type="primary">新建</a-button>
                    <ul class="roleWrap" v-if="roleList.length">
                        <li :class="item.id == currentRoleId ? 'currentRole roleItem' : 'roleItem'" v-for="(item,index) in roleList" :keys="index">
                            <div class="roleName" @click="setRole(item.id)">{{item.name}}</div>
                            <div v-if='item.code != "admin"'>
                                <a-switch v-if="InitializingRoles.indexOf(item.id) == -1" checkedChildren="启用" size="small" class="operatorBtn" @change="changeSwitch(item)" unCheckedChildren="禁用" :checked="item.enabled"/>
                                <a-icon v-if="InitializingRoles.indexOf(item.id) == -1" type="edit" title="编辑" class="but_type operatorBtn" @click.stop="editRole(item)" />
                                <a-icon v-if="InitializingRoles.indexOf(item.id) == -1" type="delete" title="删除" class="but_type operatorBtn" @click.stop="delRole(item)" />
                                <a-icon type="copy" title="复制" class="but_type operatorBtn" @click.stop="copyRole(item)" />
                            </div>
                        </li>
                    </ul>
                    <span v-else>暂无角色信息</span>
                </a-card>
            </a-col>
            <a-col span="15" push="1">
                <a-card size="small" title="角色配置">
                    <span v-if="!currentRoleId">请点击左侧要配置的角色</span>
                    <a-tabs :activeKey="activeKey" v-else defaultActiveKey="menu" size="small" @change="changeTabs">
                        <a-tab-pane tab="菜单配置" key="menu">
                            <a-tree
                            checkable
                            checkStrictly
                            :defaultExpandedKeys="defaultExpandedKeys"
                            @check="checkTree"
                            :checkedKeys="checkedKeys"
                            :treeData="treeData"/>
                            <div class="bottomBtn">
                                <a-button @click="saveSettingInfo" type="primary">保存</a-button>
                            </div>
                        </a-tab-pane>
                        <a-tab-pane tab="用户配置" key="user" forceRender>
                            <a-transfer
                                :data-source="userData"
                                show-search
                                :filter-option="userFilterOption"
                                :target-keys="userTargetKeys"
                                @change="userHandleChange"
                                :render="item=>item.title"
                                @search="handleSearch"
                                :listStyle="{width:'240px',height: '400px'}"
                                :titles='["用户源","已选用户"]'
                            />
                            <!-- <div class="bottomBtn">
                                <a-button @click="saveSettingInfo" type="primary">保存</a-button>
                            </div> -->
                        </a-tab-pane>
                    </a-tabs>
                </a-card>
            </a-col>
        </a-row>
        <addRole ref="addRole" @refresh="getRoleList"></addRole>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
 @import './index.less';
</style>