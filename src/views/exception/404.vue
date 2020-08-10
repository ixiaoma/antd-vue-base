<template>
  <div id="approve" class="module-container">
    <div class="approveSet-wrap" style="width: 1040px;">
      <div class="stages-container">
        <div class="stage-wrapper">
          <div class="stage special">
            <p class="root-title">提交审批</p>
          </div>
          <end-line/>
        </div>
        <div>
          <approval-tag/>
        </div>
        <div class="stage-wrapper parallel-stage">
          <div class="branches">
            <div class="branch">
              <div class="start-line">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <div class="branch-stages">
                <stage-wrapper/>
                <approval-tag/>
              </div>
              <div class="end-line">
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </div>
            <div class="branch">
              <div class="start-line">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <div class="branch-stages">
                <stage-wrapper/>
                <div class="stage-wrapper parallel-stage">
                  <div class="branches">
                    <div class="branch">
                      <div class="start-line">
                        <div class="left"></div>
                        <div class="right"></div>
                      </div>
                      <div class="branch-stages">
                        <div class="stage-wrapper stage-wrapper-9">
                          <!---->
                          <!---->
                          <div class="stage stage-branch">
                            <div>
                              <div class="branch-title">一般条件</div>
                              <i data-id="9" class="icon icon-edit"></i>
                              <i data-id="9" class="icon deleteItem icon-delete5"></i>
                              <div>
                                <div class="branch-condition">类型：满足其一</div>
                                <p title="请假时长 ≤ 1天" class="desc">请假时长 ≤ 1天</p>
                                <p title="聘用形式 = 顾问" class="desc">聘用形式 = 顾问</p>
                              </div>
                            </div>
                            <!---->
                            <!---->
                          </div>
                          <!---->
                          <div class="end-line">
                            <div class="left"></div>
                            <div class="right"></div>
                            <div class="stage-operation new-stage-operation">
                              <i data-id="9" class="icon addBtn icon-add4"></i>
                              <!---->
                            </div>
                            <div
                              class="el-dialog__wrapper step-dialog"
                              style="display: none;"
                            >
                              <div class="el-dialog el-dialog--small" style="top: 15%;">
                                <div class="el-dialog__header">
                                  <span class="el-dialog__title">添加审批步骤</span>
                                  <button
                                    type="button"
                                    aria-label="Close"
                                    class="el-dialog__headerbtn"
                                  >
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                  </button>
                                </div>
                                <!---->
                                <div class="el-dialog__footer">
                                  <span class="dialog-footer">
                                    <button
                                      type="button"
                                      class="el-button cancel el-button--default"
                                    >
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <span>确定</span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="el-dialog__wrapper branch-dialog"
                              style="display: none;"
                            >
                              <div class="el-dialog el-dialog--small" style="top: 15%;">
                                <div class="el-dialog__header">
                                  <span class="el-dialog__title">创建分支</span>
                                  <button
                                    type="button"
                                    aria-label="Close"
                                    class="el-dialog__headerbtn"
                                  >
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                  </button>
                                </div>
                                <!---->
                                <div class="el-dialog__footer">
                                  <span class="dialog-footer">
                                    <button
                                      type="button"
                                      class="el-button cancel el-button--default"
                                    >
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <span>确定</span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="end-line">
                        <div class="left"></div>
                        <div class="right"></div>
                      </div>
                    </div>
                    <div class="branch">
                      <div class="start-line">
                        <div class="left"></div>
                        <div class="right"></div>
                      </div>
                      <div class="branch-stages">
                        <div class="stage-wrapper">
                          <!---->
                          <!---->
                          <div class="stage stage-branch">
                            <div>
                              <div class="branch-title">一般条件</div>
                              <i data-id="10" class="icon icon-edit"></i>
                              <i data-id="10" class="icon deleteItem icon-delete5"></i>
                              <div>
                                <div class="branch-condition">类型：满足全部</div>
                                <p title="聘用形式 = 返聘" class="desc">聘用形式 = 返聘</p>
                              </div>
                            </div>
                            <!---->
                            <!---->
                          </div>
                          <!---->
                          <div class="end-line">
                            <div class="left"></div>
                            <div class="right"></div>
                            <div class="stage-operation new-stage-operation">
                              <a-icon data-id="10" class="icon addBtn icon-add4" type="plus-circle" />
                              <!---->
                            </div>
                            <div
                              class="el-dialog__wrapper step-dialog"
                              style="display: none;"
                            >
                              <div class="el-dialog el-dialog--small" style="top: 15%;">
                                <div class="el-dialog__header">
                                  <span class="el-dialog__title">添加审批步骤</span>
                                  <button
                                    type="button"
                                    aria-label="Close"
                                    class="el-dialog__headerbtn"
                                  >
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                  </button>
                                </div>
                                <!---->
                                <div class="el-dialog__footer">
                                  <span class="dialog-footer">
                                    <button
                                      type="button"
                                      class="el-button cancel el-button--default"
                                    >
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <span>确定</span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="el-dialog__wrapper branch-dialog"
                              style="display: none;"
                            >
                              <div class="el-dialog el-dialog--small" style="top: 15%;">
                                <div class="el-dialog__header">
                                  <span class="el-dialog__title">创建分支</span>
                                  <button
                                    type="button"
                                    aria-label="Close"
                                    class="el-dialog__headerbtn"
                                  >
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                  </button>
                                </div>
                                <!---->
                                <div class="el-dialog__footer">
                                  <span class="dialog-footer">
                                    <button
                                      type="button"
                                      class="el-button cancel el-button--default"
                                    >
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <span>确定</span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="end-line">
                        <div class="left"></div>
                        <div class="right"></div>
                      </div>
                    </div>
                    <div class="branch">
                      <div class="start-line">
                        <div class="left"></div>
                        <div class="right"></div>
                      </div>
                      <div class="branch-stages">
                        <div class="stage-wrapper stage-wrapper-12">
                          <!---->
                          <!---->
                          <div class="stage stage-branch">
                            <div>
                              <div class="branch-title">一般条件</div>
                              <i data-id="12" class="icon icon-edit"></i>
                              <i data-id="12" class="icon deleteItem icon-delete5"></i>
                              <div>
                                <div class="branch-condition">类型：满足全部</div>
                                <p title="职级 = 无职级" class="desc">职级 = 无职级</p>
                              </div>
                            </div>
                            <!---->
                            <!---->
                          </div>
                          <!---->
                          <div class="end-line">
                            <div class="left"></div>
                            <div class="right"></div>
                            <div class="stage-operation new-stage-operation">
                              <i data-id="12" class="icon addBtn icon-add4"></i>
                              <!---->
                            </div>
                            <div
                              class="el-dialog__wrapper step-dialog"
                              style="display: none;"
                            >
                              <div class="el-dialog el-dialog--small" style="top: 15%;">
                                <div class="el-dialog__header">
                                  <span class="el-dialog__title">添加审批步骤</span>
                                  <button
                                    type="button"
                                    aria-label="Close"
                                    class="el-dialog__headerbtn"
                                  >
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                  </button>
                                </div>
                                <!---->
                                <div class="el-dialog__footer">
                                  <span class="dialog-footer">
                                    <button
                                      type="button"
                                      class="el-button cancel el-button--default"
                                    >
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <span>确定</span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="el-dialog__wrapper branch-dialog"
                              style="display: none;"
                            >
                              <div class="el-dialog el-dialog--small" style="top: 15%;">
                                <div class="el-dialog__header">
                                  <span class="el-dialog__title">创建分支</span>
                                  <button
                                    type="button"
                                    aria-label="Close"
                                    class="el-dialog__headerbtn"
                                  >
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                  </button>
                                </div>
                                <!---->
                                <div class="el-dialog__footer">
                                  <span class="dialog-footer">
                                    <button
                                      type="button"
                                      class="el-button cancel el-button--default"
                                    >
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <span>确定</span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="end-line">
                        <div class="left"></div>
                        <div class="right"></div>
                      </div>
                    </div>
                  </div>
                  <div class="end-line">
                    <div class="left"></div>
                    <div class="right"></div>
                    <div class="stage-operation new-stage-operation">
                      <i data-id="11" class="icon addBtn icon-add4"></i>
                    </div>
                    <div class="el-dialog__wrapper step-dialog" style="display: none;">
                      <div class="el-dialog el-dialog--small" style="top: 15%;">
                        <div class="el-dialog__header">
                          <span class="el-dialog__title">添加审批步骤</span>
                          <button
                            type="button"
                            aria-label="Close"
                            class="el-dialog__headerbtn"
                          >
                            <i class="el-dialog__close el-icon el-icon-close"></i>
                          </button>
                        </div>
                        <div class="el-dialog__footer">
                          <span class="dialog-footer">
                            <button
                              type="button"
                              class="el-button cancel el-button--default"
                            >
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <span>确定</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="el-dialog__wrapper branch-dialog"
                      style="display: none;"
                    >
                      <div class="el-dialog el-dialog--small" style="top: 15%;">
                        <div class="el-dialog__header">
                          <span class="el-dialog__title">创建分支</span>
                          <button
                            type="button"
                            aria-label="Close"
                            class="el-dialog__headerbtn"
                          >
                            <i class="el-dialog__close el-icon el-icon-close"></i>
                          </button>
                        </div>
                        <div class="el-dialog__footer">
                          <span class="dialog-footer">
                            <button
                              type="button"
                              class="el-button cancel el-button--default"
                            >
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <span>确定</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="end-line">
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </div>
          </div>
          <div class="end-line">
            <div class="left"></div>
            <div class="right"></div>
            <div class="stage-operation new-stage-operation">
              <a-popover>
                <template slot="content">
                  <div class="el-dialog__wrapper step-dialog">
                    <div class="el-dialog el-dialog--small" style="top: 15%;">
                      <div class="el-dialog__header">
                        <span class="el-dialog__title">添加审批步骤</span>
                      </div>
                    </div>
                  </div>
                </template>
                <a-icon data-id="10" class="icon addBtn icon-add4" type="plus-circle" />
              </a-popover>
            </div>
          </div>
        </div>
        <approval-tag/>
        <div class="stage-wrapper">
          <div class="stage special">
            <p class="root-title">结束审批</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import approvalTag from './approvalTag'
import stageWrapper from './stageWrapper'
import endLine from './endLine'
export default {
  components:{
    approvalTag,
    stageWrapper,
    endLine
  }
}
</script>
<style lang="less" scoped>
    @import './index.less';
</style>