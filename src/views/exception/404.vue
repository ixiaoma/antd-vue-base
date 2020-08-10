<template>
  <div id="approve" class="module-container">
    <div class="approveSet-wrap" style="width: 1040px;">
      <div class="stages-container">
        <div class="stage-wrapper stage-wrapper-1">
          <div class="stage special">
            <p class="root-title">提交审批</p>
          </div>
          <!---->
          <!---->
          <!---->
          <div class="end-line">
            <div class="left"></div>
            <div class="right"></div>
            <div class="stage-operation new-stage-operation">
              <i data-id="1" class="icon addBtn icon-add4"></i>
              <!---->
            </div>
            <div class="el-dialog__wrapper step-dialog" style="display: none;">
              <div class="el-dialog el-dialog--small" style="top: 15%;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">添加审批步骤</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!---->
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button cancel el-button--default">
                      <!---->
                      <!---->
                      <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--primary">
                      <!---->
                      <!---->
                      <span>确定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="el-dialog__wrapper branch-dialog" style="display: none;">
              <div class="el-dialog el-dialog--small" style="top: 15%;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">创建分支</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!---->
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button cancel el-button--default">
                      <!---->
                      <!---->
                      <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--primary">
                      <!---->
                      <!---->
                      <span>确定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="stage-wrapper stage-wrapper-2">
          <!---->
          <div class="stage">
            <div>
              <p class="passType">审批人</p>
              <i class="icon icon-edit"></i>
              <i class="icon deleteItem icon-delete5"></i>
              <div class="approve-peo-new clearfix ellipsis approve-margin">
                <div class="el-row">
                  <div class="el-col el-col-6 line-height">审批人：</div>
                  <div class="el-col el-col-18">
                    <span title="发起人所在部门负责人" class="approve-text">发起人所在部门负责人</span>
                  </div>
                </div>
                <!---->
              </div>
            </div>
            <!---->
          </div>
          <!---->
          <!---->
          <div class="end-line">
            <div class="left"></div>
            <div class="right"></div>
            <div class="stage-operation new-stage-operation">
              <i data-id="2" class="icon addBtn icon-add4"></i>
              <!---->
            </div>
            <div class="el-dialog__wrapper step-dialog" style="display: none;">
              <div class="el-dialog el-dialog--small" style="top: 15%;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">添加审批步骤</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!---->
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button cancel el-button--default">
                      <!---->
                      <!---->
                      <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--primary">
                      <!---->
                      <!---->
                      <span>确定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="el-dialog__wrapper branch-dialog"
              style="z-index: 2002; display: none;"
            >
              <div class="el-dialog el-dialog--small" style="top: 15%;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">创建分支</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <div class="el-dialog__body">
                  <div>
                    <div class="new-set-branch">
                      <p class="title">
                        第1分支
                        <span class="branch-delete">
                          <i class="icon icon-delete5"></i>
                        </span>
                      </p>
                      <form
                        class="el-form branch-content clearfix el-form--label-right"
                      >
                        <div class="row-margin el-row">
                          <div class="el-col el-col-20">
                            <div class="el-form-item">
                              <!---->
                              <div class="el-form-item__content">
                                <div class="el-select qj-select">
                                  <!---->
                                  <div class="el-input">
                                    <!---->
                                    <i class="el-input__icon el-icon-caret-top"></i>
                                    <input
                                      autocomplete="off"
                                      placeholder="请选择"
                                      readonly="readonly"
                                      icon="caret-top"
                                      type="text"
                                      rows="2"
                                      class="el-input__inner"
                                    />
                                    <!---->
                                    <!---->
                                  </div>
                                  <div
                                    class="el-select-dropdown"
                                    style="display: none;"
                                  >
                                    <div class="el-scrollbar" style>
                                      <div
                                        class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                      >
                                        <ul
                                          class="el-scrollbar__view el-select-dropdown__list"
                                          style="position: relative;"
                                        >
                                          <!---->
                                          <li class="el-select-dropdown__item selected">
                                            <span>一般条件</span>
                                          </li>
                                          <li class="el-select-dropdown__item">
                                            <span>其他条件（排除其余分支中的条件）</span>
                                          </li>
                                          <div class="resize-triggers">
                                            <div class="expand-trigger">
                                              <div style="width: 1px; height: 1px;"></div>
                                            </div>
                                            <div class="contract-trigger"></div>
                                          </div>
                                        </ul>
                                      </div>
                                      <div class="el-scrollbar__bar is-horizontal">
                                        <div
                                          class="el-scrollbar__thumb"
                                          style="transform: translateX(0%);"
                                        ></div>
                                      </div>
                                      <div class="el-scrollbar__bar is-vertical">
                                        <div
                                          class="el-scrollbar__thumb"
                                          style="transform: translateY(0%);"
                                        ></div>
                                      </div>
                                    </div>
                                    <!---->
                                  </div>
                                  <div class="resize-triggers">
                                    <div class="expand-trigger">
                                      <div style="width: 1px; height: 1px;"></div>
                                    </div>
                                    <div class="contract-trigger"></div>
                                  </div>
                                </div>
                                <!---->
                              </div>
                            </div>
                          </div>
                          <div class="el-col el-col-2">
                            <span class="branch-popover">
                              <div
                                class="el-popover"
                                style="width: 600px; display: none;"
                              >
                                <!---->
                                <div class="approve-branch-popover">
                                  <div class="title">审批说明</div>

                                </div>
                              </div>
                              <i class="icon icon-question" style="margin-left: 10px;"></i>
                            </span>
                          </div>
                        </div>
                        <div>
                          <div class="row-margin el-row">
                            <div class="el-col el-col-3">
                              <span>条件类型</span>
                            </div>
                            <div class="el-col el-col-10">
                              <label class="el-radio">
                                <span class="el-radio__input is-checked">
                                  <span class="el-radio__inner"></span>
                                  <input
                                    type="radio"
                                    class="el-radio__original"
                                    value="0"
                                  />
                                </span>
                                <span class="el-radio__label">
                                  满足全部
                                  <!---->
                                </span>
                              </label>
                              <label class="el-radio">
                                <span class="el-radio__input">
                                  <span class="el-radio__inner"></span>
                                  <input
                                    type="radio"
                                    class="el-radio__original"
                                    value="1"
                                  />
                                </span>
                                <span class="el-radio__label">
                                  满足其一
                                  <!---->
                                </span>
                              </label>
                            </div>
                          </div>
                          <div class="branch-select-wrap">
                            <div class="el-row-margin el-row">
                              <form class="el-form rule-form">
                                <div class="el-col el-col-5">
                                  <div class="el-form-item">
                                    <!---->
                                    <div class="el-form-item__content">
                                      <div class="el-select qj-select">
                                        <!---->
                                        <div class="el-input">
                                          <!---->
                                          <i class="el-input__icon el-icon-caret-top"></i>
                                          <input
                                            autocomplete="off"
                                            placeholder="请选择"
                                            readonly="readonly"
                                            icon="caret-top"
                                            type="text"
                                            rows="2"
                                            class="el-input__inner"
                                          />
                                          <!---->
                                          <!---->
                                        </div>
                                        <div
                                          class="el-select-dropdown"
                                          style="display: none;"
                                        >
                                          <div class="el-scrollbar" style>
                                            <div
                                              class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                            >
                                              <ul
                                                class="el-scrollbar__view el-select-dropdown__list"
                                                style="position: relative;"
                                              >
                                                <!---->
                                                <li class="el-select-dropdown__item">
                                                  <span>员工</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>聘用形式</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>职级</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>工作城市</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>请假类型</span>
                                                </li>
                                                <li
                                                  class="el-select-dropdown__item selected is-disabled"
                                                >
                                                  <span>请假时长</span>
                                                </li>
                                                <li
                                                  class="el-select-dropdown__item is-disabled"
                                                >
                                                  <span>现合同主体</span>
                                                </li>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 1px; height: 1px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </ul>
                                            </div>
                                            <div
                                              class="el-scrollbar__bar is-horizontal"
                                            >
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateX(0%);"
                                              ></div>
                                            </div>
                                            <div class="el-scrollbar__bar is-vertical">
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateY(0%);"
                                              ></div>
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="resize-triggers">
                                          <div class="expand-trigger">
                                            <div style="width: 1px; height: 1px;"></div>
                                          </div>
                                          <div class="contract-trigger"></div>
                                        </div>
                                      </div>
                                      <!---->
                                    </div>
                                  </div>
                                  <!---->
                                </div>
                                <div class="el-col-padding-10 el-col el-col-4">
                                  <!---->
                                  <div class="el-form-item">
                                    <!---->
                                    <div class="el-form-item__content">
                                      <div class="el-select qj-select">
                                        <!---->
                                        <div class="el-input">
                                          <!---->
                                          <i class="el-input__icon el-icon-caret-top"></i>
                                          <input
                                            autocomplete="off"
                                            placeholder="请选择"
                                            readonly="readonly"
                                            icon="caret-top"
                                            type="text"
                                            rows="2"
                                            class="el-input__inner"
                                          />
                                          <!---->
                                          <!---->
                                        </div>
                                        <div
                                          class="el-select-dropdown"
                                          style="display: none;"
                                        >
                                          <div class="el-scrollbar" style>
                                            <div
                                              class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                            >
                                              <ul
                                                class="el-scrollbar__view el-select-dropdown__list"
                                                style="position: relative;"
                                              >
                                                <!---->
                                                <li class="el-select-dropdown__item">
                                                  <span>=</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>&gt;</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>&lt;</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>≤</span>
                                                </li>
                                                <li
                                                  class="el-select-dropdown__item selected"
                                                >
                                                  <span>≥</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>区间</span>
                                                </li>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 1px; height: 1px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </ul>
                                            </div>
                                            <div
                                              class="el-scrollbar__bar is-horizontal"
                                            >
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateX(0%);"
                                              ></div>
                                            </div>
                                            <div class="el-scrollbar__bar is-vertical">
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateY(0%);"
                                              ></div>
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="resize-triggers">
                                          <div class="expand-trigger">
                                            <div style="width: 1px; height: 1px;"></div>
                                          </div>
                                          <div class="contract-trigger"></div>
                                        </div>
                                      </div>
                                      <!---->
                                    </div>
                                  </div>
                                  <!---->
                                </div>
                                <div class="el-col-padding-10 el-col el-col-3">
                                  <!---->
                                  <!---->
                                  <div class="el-form-item is-required">
                                    <!---->
                                    <div class="el-form-item__content">
                                      <div class="el-input">
                                        <!---->
                                        <!---->
                                        <input
                                          autocomplete="off"
                                          type="number"
                                          rows="2"
                                          validateevent="true"
                                          class="el-input__inner"
                                        />
                                        <!---->
                                        <!---->
                                      </div>
                                      <!---->
                                    </div>
                                  </div>
                                  <!---->
                                  <!---->
                                </div>
                                <!---->
                                <div
                                  class="el-col-padding-10 subtracter el-col el-col-2"
                                >
                                  <span class="icon icon-subtracter"></span>
                                </div>
                              </form>
                            </div>
                            <div class="el-row-margin el-row">
                              <form class="el-form rule-form">
                                <div class="el-col el-col-5">
                                  <div class="el-form-item">
                                    <!---->
                                    <div class="el-form-item__content">
                                      <div class="el-select qj-select">
                                        <!---->
                                        <div class="el-input">
                                          <!---->
                                          <i class="el-input__icon el-icon-caret-top"></i>
                                          <input
                                            autocomplete="off"
                                            placeholder="请选择"
                                            readonly="readonly"
                                            icon="caret-top"
                                            type="text"
                                            rows="2"
                                            class="el-input__inner"
                                          />
                                          <!---->
                                          <!---->
                                        </div>
                                        <div
                                          class="el-select-dropdown"
                                          style="display: none;"
                                        >
                                          <div class="el-scrollbar" style>
                                            <div
                                              class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                            >
                                              <ul
                                                class="el-scrollbar__view el-select-dropdown__list"
                                                style="position: relative;"
                                              >
                                                <!---->
                                                <li class="el-select-dropdown__item">
                                                  <span>员工</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>聘用形式</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>职级</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>工作城市</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>请假类型</span>
                                                </li>
                                                <li
                                                  class="el-select-dropdown__item is-disabled"
                                                >
                                                  <span>请假时长</span>
                                                </li>
                                                <li
                                                  class="el-select-dropdown__item selected is-disabled"
                                                >
                                                  <span>现合同主体</span>
                                                </li>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 1px; height: 1px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </ul>
                                            </div>
                                            <div
                                              class="el-scrollbar__bar is-horizontal"
                                            >
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateX(0%);"
                                              ></div>
                                            </div>
                                            <div class="el-scrollbar__bar is-vertical">
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateY(0%);"
                                              ></div>
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="resize-triggers">
                                          <div class="expand-trigger">
                                            <div style="width: 1px; height: 1px;"></div>
                                          </div>
                                          <div class="contract-trigger"></div>
                                        </div>
                                      </div>
                                      <!---->
                                    </div>
                                  </div>
                                  <!---->
                                </div>
                                <div class="el-col-padding-10 el-col el-col-4">
                                  <div class="el-select qj-select">
                                    <!---->
                                    <div class="el-input is-disabled">
                                      <!---->
                                      <i class="el-input__icon el-icon-caret-top"></i>
                                      <input
                                        autocomplete="off"
                                        placeholder="请选择"
                                        readonly="readonly"
                                        icon="caret-top"
                                        disabled="disabled"
                                        type="text"
                                        rows="2"
                                        class="el-input__inner"
                                      />
                                      <!---->
                                      <!---->
                                    </div>
                                    <div
                                      class="el-select-dropdown"
                                      style="display: none;"
                                    >
                                      <div
                                        class="el-scrollbar is-empty"
                                        style="display: none;"
                                      >
                                        <div
                                          class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                        >
                                          <ul
                                            class="el-scrollbar__view el-select-dropdown__list"
                                            style="position: relative;"
                                          >
                                            <!---->
                                            <option value="=" label="="></option>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div style="width: 1px; height: 1px;"></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </ul>
                                        </div>
                                        <div class="el-scrollbar__bar is-horizontal">
                                          <div
                                            class="el-scrollbar__thumb"
                                            style="transform: translateX(0%);"
                                          ></div>
                                        </div>
                                        <div class="el-scrollbar__bar is-vertical">
                                          <div
                                            class="el-scrollbar__thumb"
                                            style="transform: translateY(0%);"
                                          ></div>
                                        </div>
                                      </div>
                                      <p class="el-select-dropdown__empty">无数据</p>
                                    </div>
                                    <div class="resize-triggers">
                                      <div class="expand-trigger">
                                        <div style="width: 1px; height: 1px;"></div>
                                      </div>
                                      <div class="contract-trigger"></div>
                                    </div>
                                  </div>
                                  <!---->
                                  <!---->
                                </div>
                                <div class="el-col-padding-10 el-col el-col-13">
                                  <!---->
                                  <div class="el-select multiple-select">
                                    <div class="el-select__tags">
                                      <span>
                                        <span class="el-tag el-tag--primary">
                                          <span class="el-select__tags-text">111</span>
                                          <i class="el-tag__close el-icon-close"></i>
                                        </span>
                                      </span>
                                      <input
                                        type="text"
                                        debounce="0"
                                        class="el-select__input is-small"
                                        style="width: 20px;"
                                      />
                                    </div>
                                    <div class="el-input el-input--small">
                                      <!---->
                                      <i class="el-input__icon el-icon-caret-top"></i>
                                      <input
                                        autocomplete="off"
                                        placeholder
                                        size="small"
                                        readonly="readonly"
                                        icon="caret-top"
                                        type="text"
                                        rows="2"
                                        class="el-input__inner"
                                        style="height: 30px;"
                                      />
                                      <!---->
                                      <!---->
                                    </div>
                                    <div
                                      class="el-select-dropdown is-multiple"
                                      style="display: none;"
                                    >
                                      <div class="el-scrollbar" style>
                                        <div
                                          class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                        >
                                          <ul
                                            class="el-scrollbar__view el-select-dropdown__list"
                                            style="position: relative;"
                                          >
                                            <!---->
                                            <li
                                              class="el-select-dropdown__item selected"
                                            >
                                              <span>111</span>
                                            </li>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div style="width: 1px; height: 1px;"></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </ul>
                                        </div>
                                        <div class="el-scrollbar__bar is-horizontal">
                                          <div
                                            class="el-scrollbar__thumb"
                                            style="transform: translateX(0%);"
                                          ></div>
                                        </div>
                                        <div class="el-scrollbar__bar is-vertical">
                                          <div
                                            class="el-scrollbar__thumb"
                                            style="transform: translateY(0%);"
                                          ></div>
                                        </div>
                                      </div>
                                      <!---->
                                    </div>
                                    <div class="resize-triggers">
                                      <div class="expand-trigger">
                                        <div style="width: 1px; height: 1px;"></div>
                                      </div>
                                      <div class="contract-trigger"></div>
                                    </div>
                                  </div>
                                  <!---->
                                  <!---->
                                  <!---->
                                </div>
                                <!---->
                                <div
                                  class="el-col-padding-10 subtracter el-col el-col-2"
                                >
                                  <span class="icon icon-subtracter"></span>
                                </div>
                              </form>
                            </div>
                            <div class="add-rule el-row">
                              <span>
                                <i class="icon icon-add3 fl"></i>
                                <span class="text">添加条件</span>
                              </span>
                              <!---->
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="new-set-branch">
                      <p class="title">
                        第2分支
                        <span class="branch-delete">
                          <i class="icon icon-delete5"></i>
                        </span>
                      </p>
                      <form
                        class="el-form branch-content clearfix el-form--label-right"
                      >
                        <div class="row-margin el-row">
                          <div class="el-col el-col-20">
                            <div class="el-form-item">
                              <!---->
                              <div class="el-form-item__content">
                                <div class="el-select qj-select">
                                  <!---->
                                  <div class="el-input">
                                    <!---->
                                    <i class="el-input__icon el-icon-caret-top"></i>
                                    <input
                                      autocomplete="off"
                                      placeholder="请选择"
                                      readonly="readonly"
                                      icon="caret-top"
                                      type="text"
                                      rows="2"
                                      class="el-input__inner"
                                    />
                                    <!---->
                                    <!---->
                                  </div>
                                  <div
                                    class="el-select-dropdown"
                                    style="display: none;"
                                  >
                                    <div class="el-scrollbar" style>
                                      <div
                                        class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                      >
                                        <ul
                                          class="el-scrollbar__view el-select-dropdown__list"
                                          style="position: relative;"
                                        >
                                          <!---->
                                          <li class="el-select-dropdown__item selected">
                                            <span>一般条件</span>
                                          </li>
                                          <li class="el-select-dropdown__item">
                                            <span>其他条件（排除其余分支中的条件）</span>
                                          </li>
                                          <div class="resize-triggers">
                                            <div class="expand-trigger">
                                              <div style="width: 1px; height: 1px;"></div>
                                            </div>
                                            <div class="contract-trigger"></div>
                                          </div>
                                        </ul>
                                      </div>
                                      <div class="el-scrollbar__bar is-horizontal">
                                        <div
                                          class="el-scrollbar__thumb"
                                          style="transform: translateX(0%);"
                                        ></div>
                                      </div>
                                      <div class="el-scrollbar__bar is-vertical">
                                        <div
                                          class="el-scrollbar__thumb"
                                          style="transform: translateY(0%);"
                                        ></div>
                                      </div>
                                    </div>
                                    <!---->
                                  </div>
                                  <div class="resize-triggers">
                                    <div class="expand-trigger">
                                      <div style="width: 1px; height: 1px;"></div>
                                    </div>
                                    <div class="contract-trigger"></div>
                                  </div>
                                </div>
                                <!---->
                              </div>
                            </div>
                          </div>
                          <div class="el-col el-col-2">
                            <span class="branch-popover">
                              <div
                                class="el-popover"
                                style="width: 600px; display: none;"
                              >
                                <!---->
                                <div class="approve-branch-popover">
                                  <div class="title">审批说明</div>
                                </div>
                              </div>
                              <i class="icon icon-question" style="margin-left: 10px;"></i>
                            </span>
                          </div>
                        </div>
                        <div>
                          <div class="row-margin el-row">
                            <div class="el-col el-col-3">
                              <span>条件类型</span>
                            </div>
                            <div class="el-col el-col-10">
                              <label class="el-radio">
                                <span class="el-radio__input is-checked">
                                  <span class="el-radio__inner"></span>
                                  <input
                                    type="radio"
                                    class="el-radio__original"
                                    value="0"
                                  />
                                </span>
                                <span class="el-radio__label">
                                  满足全部
                                  <!---->
                                </span>
                              </label>
                              <label class="el-radio">
                                <span class="el-radio__input">
                                  <span class="el-radio__inner"></span>
                                  <input
                                    type="radio"
                                    class="el-radio__original"
                                    value="1"
                                  />
                                </span>
                                <span class="el-radio__label">
                                  满足其一
                                  <!---->
                                </span>
                              </label>
                            </div>
                          </div>
                          <div class="branch-select-wrap">
                            <div class="el-row-margin el-row">
                              <form class="el-form rule-form">
                                <div class="el-col el-col-5">
                                  <div class="el-form-item">
                                    <!---->
                                    <div class="el-form-item__content">
                                      <div class="el-select qj-select">
                                        <!---->
                                        <div class="el-input">
                                          <!---->
                                          <i class="el-input__icon el-icon-caret-top"></i>
                                          <input
                                            autocomplete="off"
                                            placeholder="请选择"
                                            readonly="readonly"
                                            icon="caret-top"
                                            type="text"
                                            rows="2"
                                            class="el-input__inner"
                                          />
                                          <!---->
                                          <!---->
                                        </div>
                                        <div
                                          class="el-select-dropdown"
                                          style="display: none;"
                                        >
                                          <div class="el-scrollbar" style>
                                            <div
                                              class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                            >
                                              <ul
                                                class="el-scrollbar__view el-select-dropdown__list"
                                                style="position: relative;"
                                              >
                                                <!---->
                                                <li
                                                  class="el-select-dropdown__item is-disabled"
                                                >
                                                  <span>员工</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>聘用形式</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>职级</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>工作城市</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>请假类型</span>
                                                </li>
                                                <li
                                                  class="el-select-dropdown__item selected is-disabled"
                                                >
                                                  <span>请假时长</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>现合同主体</span>
                                                </li>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 1px; height: 1px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </ul>
                                            </div>
                                            <div
                                              class="el-scrollbar__bar is-horizontal"
                                            >
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateX(0%);"
                                              ></div>
                                            </div>
                                            <div class="el-scrollbar__bar is-vertical">
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateY(0%);"
                                              ></div>
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="resize-triggers">
                                          <div class="expand-trigger">
                                            <div style="width: 1px; height: 1px;"></div>
                                          </div>
                                          <div class="contract-trigger"></div>
                                        </div>
                                      </div>
                                      <!---->
                                    </div>
                                  </div>
                                  <!---->
                                </div>
                                <div class="el-col-padding-10 el-col el-col-4">
                                  <!---->
                                  <div class="el-form-item">
                                    <!---->
                                    <div class="el-form-item__content">
                                      <div class="el-select qj-select">
                                        <!---->
                                        <div class="el-input">
                                          <!---->
                                          <i class="el-input__icon el-icon-caret-top"></i>
                                          <input
                                            autocomplete="off"
                                            placeholder="请选择"
                                            readonly="readonly"
                                            icon="caret-top"
                                            type="text"
                                            rows="2"
                                            class="el-input__inner"
                                          />
                                          <!---->
                                          <!---->
                                        </div>
                                        <div
                                          class="el-select-dropdown"
                                          style="display: none;"
                                        >
                                          <div class="el-scrollbar" style>
                                            <div
                                              class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                            >
                                              <ul
                                                class="el-scrollbar__view el-select-dropdown__list"
                                                style="position: relative;"
                                              >
                                                <!---->
                                                <li class="el-select-dropdown__item">
                                                  <span>=</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>&gt;</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>&lt;</span>
                                                </li>
                                                <li
                                                  class="el-select-dropdown__item selected"
                                                >
                                                  <span>≤</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>≥</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>区间</span>
                                                </li>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 1px; height: 1px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </ul>
                                            </div>
                                            <div
                                              class="el-scrollbar__bar is-horizontal"
                                            >
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateX(0%);"
                                              ></div>
                                            </div>
                                            <div class="el-scrollbar__bar is-vertical">
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateY(0%);"
                                              ></div>
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="resize-triggers">
                                          <div class="expand-trigger">
                                            <div style="width: 1px; height: 1px;"></div>
                                          </div>
                                          <div class="contract-trigger"></div>
                                        </div>
                                      </div>
                                      <!---->
                                    </div>
                                  </div>
                                  <!---->
                                </div>
                                <div class="el-col-padding-10 el-col el-col-3">
                                  <!---->
                                  <!---->
                                  <div class="el-form-item is-required">
                                    <!---->
                                    <div class="el-form-item__content">
                                      <div class="el-input">
                                        <!---->
                                        <!---->
                                        <input
                                          autocomplete="off"
                                          type="number"
                                          rows="2"
                                          validateevent="true"
                                          class="el-input__inner"
                                        />
                                        <!---->
                                        <!---->
                                      </div>
                                      <!---->
                                    </div>
                                  </div>
                                  <!---->
                                  <!---->
                                </div>
                                <!---->
                                <div
                                  class="el-col-padding-10 subtracter el-col el-col-2"
                                >
                                  <span class="icon icon-subtracter"></span>
                                </div>
                              </form>
                            </div>
                            <div class="el-row-margin el-row">
                              <form class="el-form rule-form">
                                <div class="el-col el-col-5">
                                  <div class="el-form-item">
                                    <!---->
                                    <div class="el-form-item__content">
                                      <div class="el-select qj-select">
                                        <!---->
                                        <div class="el-input">
                                          <!---->
                                          <i class="el-input__icon el-icon-caret-top"></i>
                                          <input
                                            autocomplete="off"
                                            placeholder="请选择"
                                            readonly="readonly"
                                            icon="caret-top"
                                            type="text"
                                            rows="2"
                                            class="el-input__inner"
                                          />
                                          <!---->
                                          <!---->
                                        </div>
                                        <div
                                          class="el-select-dropdown"
                                          style="display: none;"
                                        >
                                          <div class="el-scrollbar" style>
                                            <div
                                              class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                            >
                                              <ul
                                                class="el-scrollbar__view el-select-dropdown__list"
                                                style="position: relative;"
                                              >
                                                <!---->
                                                <li
                                                  class="el-select-dropdown__item selected is-disabled"
                                                >
                                                  <span>员工</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>聘用形式</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>职级</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>工作城市</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>请假类型</span>
                                                </li>
                                                <li
                                                  class="el-select-dropdown__item is-disabled"
                                                >
                                                  <span>请假时长</span>
                                                </li>
                                                <li class="el-select-dropdown__item">
                                                  <span>现合同主体</span>
                                                </li>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 1px; height: 1px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </ul>
                                            </div>
                                            <div
                                              class="el-scrollbar__bar is-horizontal"
                                            >
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateX(0%);"
                                              ></div>
                                            </div>
                                            <div class="el-scrollbar__bar is-vertical">
                                              <div
                                                class="el-scrollbar__thumb"
                                                style="transform: translateY(0%);"
                                              ></div>
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="resize-triggers">
                                          <div class="expand-trigger">
                                            <div style="width: 1px; height: 1px;"></div>
                                          </div>
                                          <div class="contract-trigger"></div>
                                        </div>
                                      </div>
                                      <!---->
                                    </div>
                                  </div>
                                  <!---->
                                </div>
                                <div class="el-col-padding-10 el-col el-col-4">
                                  <div class="el-select qj-select">
                                    <!---->
                                    <div class="el-input is-disabled">
                                      <!---->
                                      <i class="el-input__icon el-icon-caret-top"></i>
                                      <input
                                        autocomplete="off"
                                        placeholder="请选择"
                                        readonly="readonly"
                                        icon="caret-top"
                                        disabled="disabled"
                                        type="text"
                                        rows="2"
                                        class="el-input__inner"
                                      />
                                      <!---->
                                      <!---->
                                    </div>
                                    <div
                                      class="el-select-dropdown"
                                      style="display: none;"
                                    >
                                      <div
                                        class="el-scrollbar is-empty"
                                        style="display: none;"
                                      >
                                        <div
                                          class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                        >
                                          <ul
                                            class="el-scrollbar__view el-select-dropdown__list"
                                            style="position: relative;"
                                          >
                                            <!---->
                                            <option value="=" label="="></option>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div style="width: 1px; height: 1px;"></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </ul>
                                        </div>
                                        <div class="el-scrollbar__bar is-horizontal">
                                          <div
                                            class="el-scrollbar__thumb"
                                            style="transform: translateX(0%);"
                                          ></div>
                                        </div>
                                        <div class="el-scrollbar__bar is-vertical">
                                          <div
                                            class="el-scrollbar__thumb"
                                            style="transform: translateY(0%);"
                                          ></div>
                                        </div>
                                      </div>
                                      <p class="el-select-dropdown__empty">无数据</p>
                                    </div>
                                    <div class="resize-triggers">
                                      <div class="expand-trigger">
                                        <div style="width: 1px; height: 1px;"></div>
                                      </div>
                                      <div class="contract-trigger"></div>
                                    </div>
                                  </div>
                                  <!---->
                                  <!---->
                                </div>
                                <div class="el-col-padding-10 el-col el-col-13">
                                  <p class="select-tags">
                                    <span class="el-tag fl tags" title="111">
                                      111
                                      <i class="el-tag__close el-icon-close"></i>
                                    </span>
                                  </p>
                                  <div class="select-employee">
                                    <div
                                      class="lenovo-body"
                                      style="display: inline-block;"
                                    >
                                      <div class="slot-elem clearfix">
                                        <div class="slot-fire-lenovo">
                                          <span class="add-box fl">
                                            <div>
                                              <i class="icon icon-add3 fl"></i>
                                              <span>添加员工</span>
                                            </div>
                                          </span>
                                        </div>
                                        <!---->
                                      </div>
                                      <div class="lenovo-box" style="display: none;">
                                        <di class="lenovo-box-wrap">
                                          <i class="icon icon-search"></i>
                                          <i
                                            class="icon icon-close"
                                            style="display: none;"
                                          ></i>
                                          <input
                                            placeholder="请输入部门名称／员工的姓名或手机号"
                                            type="text"
                                            class="lenovo-input"
                                          />
                                          <div class="lenovo-box-content">
                                            <div>
                                              <div class="tree-list">
                                                <ul>
                                                  <li
                                                    class="lenovo-department-li no-child root"
                                                  >
                                                    <p
                                                      title="111"
                                                      class="clearfix lenovo-department-content"
                                                    >
                                                      <span class="fl">
                                                        <i class="icon-framework"></i>
                                                        <!---->
                                                        <i class="line"></i>
                                                        111
                                                      </span>
                                                      <i class="icon icon-people"></i>
                                                    </p>
                                                    <!---->
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <ul class="lenovo-list display-none">
                                              <li>
                                                <em class="clearfix">暂无搜索结果...</em>
                                              </li>
                                              <li>
                                                <!---->
                                              </li>
                                            </ul>
                                          </div>
                                          <div
                                            class="el-dialog__wrapper"
                                            id="lenovo-employee-dialog"
                                            style="display: none;"
                                          >
                                            <div
                                              class="el-dialog el-dialog--large"
                                              style="top: 15%;"
                                            >
                                              <div class="el-dialog__header">
                                                <span class="el-dialog__title"></span>
                                                <button
                                                  type="button"
                                                  aria-label="Close"
                                                  class="el-dialog__headerbtn"
                                                >
                                                  <i
                                                    class="el-dialog__close el-icon el-icon-close"
                                                  ></i>
                                                </button>
                                              </div>
                                              <!---->
                                              <div class="el-dialog__footer">
                                                <div>
                                                  <button
                                                    type="button"
                                                    class="el-button cancel el-button--default"
                                                  >
                                                    <!---->
                                                    <!---->
                                                    <span>取消</span>
                                                  </button>
                                                  <button
                                                    type="button"
                                                    class="el-button el-button--primary"
                                                  >
                                                    <!---->
                                                    <!---->
                                                    <span>确定</span>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </di>
                                      </div>
                                    </div>
                                  </div>
                                  <!---->
                                  <!---->
                                  <!---->
                                  <!---->
                                </div>
                                <!---->
                                <div
                                  class="el-col-padding-10 subtracter el-col el-col-2"
                                >
                                  <span class="icon icon-subtracter"></span>
                                </div>
                              </form>
                            </div>
                            <div class="add-rule el-row">
                              <span>
                                <i class="icon icon-add3 fl"></i>
                                <span class="text">添加条件</span>
                              </span>
                              <!---->
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="add-branch-type">添加分支类型</div>
                  </div>
                </div>
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button cancel el-button--default">
                      <!---->
                      <!---->
                      <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--primary">
                      <!---->
                      <!---->
                      <span>确定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="stage-wrapper stage-wrapper-7 parallel-stage">
          <!---->
          <!---->
          <!---->
          <div class="branches">
            <div class="branch">
              <div class="start-line">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <div class="branch-stages">
                <div class="stage-wrapper stage-wrapper-5">
                  <!---->
                  <!---->
                  <div class="stage stage-branch">
                    <div>
                      <div class="branch-title">一般条件</div>
                      <i data-id="5" class="icon icon-edit"></i>
                      <i data-id="5" class="icon deleteItem icon-delete5"></i>
                      <div>
                        <div class="branch-condition">类型：满足全部</div>
                        <p title="请假时长 ≥ 12天" class="desc">请假时长 ≥ 12天</p>
                        <p title="现合同主体 = 111" class="desc">现合同主体 = 111</p>
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
                      <i data-id="5" class="icon addBtn icon-add4"></i>
                      <!---->
                    </div>
                    <div
                      class="el-dialog__wrapper step-dialog"
                      style="z-index: 2011; display: none;"
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
                        <div class="el-dialog__body"></div>
                        <div class="el-dialog__footer">
                          <span class="dialog-footer">
                            <button
                              type="button"
                              class="el-button cancel el-button--default"
                            >
                              <!---->
                              <!---->
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <!---->
                              <!---->
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
                              <!---->
                              <!---->
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <!---->
                              <!---->
                              <span>确定</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="stage-wrapper stage-wrapper-8">
                  <!---->
                  <div class="stage">
                    <div>
                      <p class="passType">审批人</p>
                      <i class="icon icon-edit"></i>
                      <i class="icon deleteItem icon-delete5"></i>
                      <div class="approve-peo-new clearfix ellipsis approve-margin">
                        <div class="el-row">
                          <div class="el-col el-col-6 line-height">审批人：</div>
                          <div class="el-col el-col-18">
                            <span title="发起人所在部门负责人" class="approve-text">发起人所在部门负责人</span>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <!---->
                  </div>
                  <!---->
                  <!---->
                  <div class="end-line">
                    <div class="left"></div>
                    <div class="right"></div>
                    <div class="stage-operation new-stage-operation">
                      <i data-id="8" class="icon addBtn icon-add4"></i>
                      <!---->
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
                        <!---->
                        <div class="el-dialog__footer">
                          <span class="dialog-footer">
                            <button
                              type="button"
                              class="el-button cancel el-button--default"
                            >
                              <!---->
                              <!---->
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <!---->
                              <!---->
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
                              <!---->
                              <!---->
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <!---->
                              <!---->
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
                <div class="stage-wrapper stage-wrapper-6">
                  <!---->
                  <!---->
                  <div class="stage stage-branch">
                    <div>
                      <div class="branch-title">一般条件</div>
                      <i data-id="6" class="icon icon-edit"></i>
                      <i data-id="6" class="icon deleteItem icon-delete5"></i>
                      <div>
                        <div class="branch-condition">类型：满足全部</div>
                        <p title="请假时长 ≤ 1天" class="desc">请假时长 ≤ 1天</p>
                        <p title="员工 属于 111" class="desc">员工 属于 111</p>
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
                      <i data-id="6" class="icon addBtn icon-add4"></i>
                      <!---->
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
                        <!---->
                        <div class="el-dialog__footer">
                          <span class="dialog-footer">
                            <button
                              type="button"
                              class="el-button cancel el-button--default"
                            >
                              <!---->
                              <!---->
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <!---->
                              <!---->
                              <span>确定</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="el-dialog__wrapper branch-dialog"
                      style="z-index: 2013; display: none;"
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
                        <div class="el-dialog__body">
                          <div>
                            <div class="new-set-branch">
                              <p class="title">
                                第1分支
                                <span class="branch-delete">
                                  <i class="icon icon-delete5"></i>
                                </span>
                              </p>
                              <form
                                class="el-form branch-content clearfix el-form--label-right"
                              >
                                <div class="row-margin el-row">
                                  <div class="el-col el-col-20">
                                    <div class="el-form-item">
                                      <!---->
                                      <div class="el-form-item__content">
                                        <div class="el-select qj-select">
                                          <!---->
                                          <div class="el-input">
                                            <!---->
                                            <i class="el-input__icon el-icon-caret-top"></i>
                                            <input
                                              autocomplete="off"
                                              placeholder="请选择"
                                              readonly="readonly"
                                              icon="caret-top"
                                              type="text"
                                              rows="2"
                                              class="el-input__inner"
                                            />
                                            <!---->
                                            <!---->
                                          </div>
                                          <div
                                            class="el-select-dropdown"
                                            style="display: none; min-width: 574.984px;"
                                          >
                                            <div class="el-scrollbar" style>
                                              <div
                                                class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                              >
                                                <ul
                                                  class="el-scrollbar__view el-select-dropdown__list"
                                                  style="position: relative;"
                                                >
                                                  <!---->
                                                  <li
                                                    class="el-select-dropdown__item selected"
                                                  >
                                                    <span>一般条件</span>
                                                  </li>
                                                  <li class="el-select-dropdown__item">
                                                    <span>其他条件（排除其余分支中的条件）</span>
                                                  </li>
                                                  <div class="resize-triggers">
                                                    <div class="expand-trigger">
                                                      <div
                                                        style="width: 1px; height: 1px;"
                                                      ></div>
                                                    </div>
                                                    <div class="contract-trigger"></div>
                                                  </div>
                                                </ul>
                                              </div>
                                              <div
                                                class="el-scrollbar__bar is-horizontal"
                                              >
                                                <div
                                                  class="el-scrollbar__thumb"
                                                  style="transform: translateX(0%);"
                                                ></div>
                                              </div>
                                              <div
                                                class="el-scrollbar__bar is-vertical"
                                              >
                                                <div
                                                  class="el-scrollbar__thumb"
                                                  style="transform: translateY(0%);"
                                                ></div>
                                              </div>
                                            </div>
                                            <!---->
                                          </div>
                                          <div class="resize-triggers">
                                            <div class="expand-trigger">
                                              <div style="width: 576px; height: 39px;"></div>
                                            </div>
                                            <div class="contract-trigger"></div>
                                          </div>
                                        </div>
                                        <!---->
                                      </div>
                                    </div>
                                  </div>
                                  <div class="el-col el-col-2">
                                    <span class="branch-popover">
                                      <div
                                        class="el-popover"
                                        style="width: 600px; display: none;"
                                      >
                                        <!---->
                                        <div class="approve-branch-popover">
                                          <div class="title">审批说明</div>
                                        </div>
                                      </div>
                                      <i
                                        class="icon icon-question"
                                        style="margin-left: 10px;"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <div class="row-margin el-row">
                                    <div class="el-col el-col-3">
                                      <span>条件类型</span>
                                    </div>
                                    <div class="el-col el-col-10">
                                      <label class="el-radio">
                                        <span class="el-radio__input">
                                          <span class="el-radio__inner"></span>
                                          <input
                                            type="radio"
                                            class="el-radio__original"
                                            value="0"
                                          />
                                        </span>
                                        <span class="el-radio__label">
                                          满足全部
                                          <!---->
                                        </span>
                                      </label>
                                      <label class="el-radio">
                                        <span class="el-radio__input is-checked">
                                          <span class="el-radio__inner"></span>
                                          <input
                                            type="radio"
                                            class="el-radio__original"
                                            value="1"
                                          />
                                        </span>
                                        <span class="el-radio__label">
                                          满足其一
                                          <!---->
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                  <div class="branch-select-wrap">
                                    <div class="el-row-margin el-row">
                                      <form class="el-form rule-form">
                                        <div class="el-col el-col-5">
                                          <div class="el-form-item">
                                            <!---->
                                            <div class="el-form-item__content">
                                              <div class="el-select qj-select">
                                                <!---->
                                                <div class="el-input">
                                                  <!---->
                                                  <i
                                                    class="el-input__icon el-icon-caret-top"
                                                  ></i>
                                                  <input
                                                    autocomplete="off"
                                                    placeholder="请选择"
                                                    readonly="readonly"
                                                    icon="caret-top"
                                                    type="text"
                                                    rows="2"
                                                    class="el-input__inner"
                                                  />
                                                  <!---->
                                                  <!---->
                                                </div>
                                                <div
                                                  class="el-select-dropdown"
                                                  style="display: none; min-width: 143.734px;"
                                                >
                                                  <div class="el-scrollbar" style>
                                                    <div
                                                      class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                    >
                                                      <ul
                                                        class="el-scrollbar__view el-select-dropdown__list"
                                                        style="position: relative;"
                                                      >
                                                        <!---->
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>员工</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item is-disabled"
                                                        >
                                                          <span>聘用形式</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>职级</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>工作城市</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>请假类型</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item selected is-disabled"
                                                        >
                                                          <span>请假时长</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>现合同主体</span>
                                                        </li>
                                                        <div class="resize-triggers">
                                                          <div class="expand-trigger">
                                                            <div
                                                              style="width: 1px; height: 1px;"
                                                            ></div>
                                                          </div>
                                                          <div class="contract-trigger"></div>
                                                        </div>
                                                      </ul>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-horizontal"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateX(0%);"
                                                      ></div>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-vertical"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateY(0%);"
                                                      ></div>
                                                    </div>
                                                  </div>
                                                  <!---->
                                                </div>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 145px; height: 39px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </div>
                                              <!---->
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="el-col-padding-10 el-col el-col-4">
                                          <!---->
                                          <div class="el-form-item">
                                            <!---->
                                            <div class="el-form-item__content">
                                              <div class="el-select qj-select">
                                                <!---->
                                                <div class="el-input">
                                                  <!---->
                                                  <i
                                                    class="el-input__icon el-icon-caret-top"
                                                  ></i>
                                                  <input
                                                    autocomplete="off"
                                                    placeholder="请选择"
                                                    readonly="readonly"
                                                    icon="caret-top"
                                                    type="text"
                                                    rows="2"
                                                    class="el-input__inner"
                                                  />
                                                  <!---->
                                                  <!---->
                                                </div>
                                                <div
                                                  class="el-select-dropdown"
                                                  style="display: none; min-width: 105px;"
                                                >
                                                  <div class="el-scrollbar" style>
                                                    <div
                                                      class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                    >
                                                      <ul
                                                        class="el-scrollbar__view el-select-dropdown__list"
                                                        style="position: relative;"
                                                      >
                                                        <!---->
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>=</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>&gt;</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>&lt;</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item selected"
                                                        >
                                                          <span>≤</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>≥</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>区间</span>
                                                        </li>
                                                        <div class="resize-triggers">
                                                          <div class="expand-trigger">
                                                            <div
                                                              style="width: 1px; height: 1px;"
                                                            ></div>
                                                          </div>
                                                          <div class="contract-trigger"></div>
                                                        </div>
                                                      </ul>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-horizontal"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateX(0%);"
                                                      ></div>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-vertical"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateY(0%);"
                                                      ></div>
                                                    </div>
                                                  </div>
                                                  <!---->
                                                </div>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 106px; height: 39px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </div>
                                              <!---->
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="el-col-padding-10 el-col el-col-3">
                                          <!---->
                                          <!---->
                                          <div class="el-form-item is-required">
                                            <!---->
                                            <div class="el-form-item__content">
                                              <div class="el-input">
                                                <!---->
                                                <!---->
                                                <input
                                                  autocomplete="off"
                                                  type="number"
                                                  rows="2"
                                                  validateevent="true"
                                                  class="el-input__inner"
                                                />
                                                <!---->
                                                <!---->
                                              </div>
                                              <!---->
                                            </div>
                                          </div>
                                          <!---->
                                          <!---->
                                        </div>
                                        <!---->
                                        <div
                                          class="el-col-padding-10 subtracter el-col el-col-2"
                                        >
                                          <span class="icon icon-subtracter"></span>
                                        </div>
                                      </form>
                                    </div>
                                    <div class="el-row-margin el-row">
                                      <form class="el-form rule-form">
                                        <div class="el-col el-col-5">
                                          <div class="el-form-item">
                                            <!---->
                                            <div class="el-form-item__content">
                                              <div class="el-select qj-select">
                                                <!---->
                                                <div class="el-input">
                                                  <!---->
                                                  <i
                                                    class="el-input__icon el-icon-caret-top"
                                                  ></i>
                                                  <input
                                                    autocomplete="off"
                                                    placeholder="请选择"
                                                    readonly="readonly"
                                                    icon="caret-top"
                                                    type="text"
                                                    rows="2"
                                                    class="el-input__inner"
                                                  />
                                                  <!---->
                                                  <!---->
                                                </div>
                                                <div
                                                  class="el-select-dropdown"
                                                  style="display: none; min-width: 143.734px;"
                                                >
                                                  <div class="el-scrollbar" style>
                                                    <div
                                                      class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                    >
                                                      <ul
                                                        class="el-scrollbar__view el-select-dropdown__list"
                                                        style="position: relative;"
                                                      >
                                                        <!---->
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>员工</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item selected is-disabled"
                                                        >
                                                          <span>聘用形式</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>职级</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>工作城市</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>请假类型</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item is-disabled"
                                                        >
                                                          <span>请假时长</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>现合同主体</span>
                                                        </li>
                                                        <div class="resize-triggers">
                                                          <div class="expand-trigger">
                                                            <div
                                                              style="width: 1px; height: 1px;"
                                                            ></div>
                                                          </div>
                                                          <div class="contract-trigger"></div>
                                                        </div>
                                                      </ul>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-horizontal"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateX(0%);"
                                                      ></div>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-vertical"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateY(0%);"
                                                      ></div>
                                                    </div>
                                                  </div>
                                                  <!---->
                                                </div>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 145px; height: 39px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </div>
                                              <!---->
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="el-col-padding-10 el-col el-col-4">
                                          <div class="el-select qj-select">
                                            <!---->
                                            <div class="el-input is-disabled">
                                              <!---->
                                              <i
                                                class="el-input__icon el-icon-caret-top"
                                              ></i>
                                              <input
                                                autocomplete="off"
                                                placeholder="请选择"
                                                readonly="readonly"
                                                icon="caret-top"
                                                disabled="disabled"
                                                type="text"
                                                rows="2"
                                                class="el-input__inner"
                                              />
                                              <!---->
                                              <!---->
                                            </div>
                                            <div
                                              class="el-select-dropdown"
                                              style="display: none; min-width: 105px;"
                                            >
                                              <div
                                                class="el-scrollbar is-empty"
                                                style="display: none;"
                                              >
                                                <div
                                                  class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                >
                                                  <ul
                                                    class="el-scrollbar__view el-select-dropdown__list"
                                                    style="position: relative;"
                                                  >
                                                    <!---->
                                                    <option value="=" label="="></option>
                                                    <div class="resize-triggers">
                                                      <div class="expand-trigger">
                                                        <div
                                                          style="width: 1px; height: 1px;"
                                                        ></div>
                                                      </div>
                                                      <div class="contract-trigger"></div>
                                                    </div>
                                                  </ul>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-horizontal"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateX(0%);"
                                                  ></div>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-vertical"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateY(0%);"
                                                  ></div>
                                                </div>
                                              </div>
                                              <p class="el-select-dropdown__empty">无数据</p>
                                            </div>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div
                                                  style="width: 106px; height: 39px;"
                                                ></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </div>
                                          <!---->
                                          <!---->
                                        </div>
                                        <div class="el-col-padding-10 el-col el-col-13">
                                          <!---->
                                          <div class="el-select multiple-select">
                                            <div
                                              class="el-select__tags"
                                              style="max-width: 331.75px;"
                                            >
                                              <span>
                                                <span class="el-tag el-tag--primary">
                                                  <span class="el-select__tags-text">顾问</span>
                                                  <i
                                                    class="el-tag__close el-icon-close"
                                                  ></i>
                                                </span>
                                              </span>
                                              <input
                                                type="text"
                                                debounce="0"
                                                class="el-select__input is-small"
                                                style="width: 20px; max-width: 321.75px;"
                                              />
                                            </div>
                                            <div class="el-input el-input--small">
                                              <!---->
                                              <i
                                                class="el-input__icon el-icon-caret-top"
                                              ></i>
                                              <input
                                                autocomplete="off"
                                                placeholder
                                                size="small"
                                                readonly="readonly"
                                                icon="caret-top"
                                                type="text"
                                                rows="2"
                                                class="el-input__inner"
                                                style="height: 38px;"
                                              />
                                              <!---->
                                              <!---->
                                            </div>
                                            <div
                                              class="el-select-dropdown is-multiple"
                                              style="display: none; min-width: 363.75px;"
                                            >
                                              <div class="el-scrollbar" style>
                                                <div
                                                  class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                >
                                                  <ul
                                                    class="el-scrollbar__view el-select-dropdown__list"
                                                    style="position: relative;"
                                                  >
                                                    <!---->
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>正式</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>实习</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>劳务</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item selected"
                                                    >
                                                      <span>顾问</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>返聘</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>外包</span>
                                                    </li>
                                                    <div class="resize-triggers">
                                                      <div class="expand-trigger">
                                                        <div
                                                          style="width: 1px; height: 1px;"
                                                        ></div>
                                                      </div>
                                                      <div class="contract-trigger"></div>
                                                    </div>
                                                  </ul>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-horizontal"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateX(0%);"
                                                  ></div>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-vertical"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateY(0%);"
                                                  ></div>
                                                </div>
                                              </div>
                                              <!---->
                                            </div>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div
                                                  style="width: 365px; height: 39px;"
                                                ></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </div>
                                          <!---->
                                          <!---->
                                          <!---->
                                        </div>
                                        <!---->
                                        <div
                                          class="el-col-padding-10 subtracter el-col el-col-2"
                                        >
                                          <span class="icon icon-subtracter"></span>
                                        </div>
                                      </form>
                                    </div>
                                    <div class="add-rule el-row">
                                      <span>
                                        <i class="icon icon-add3 fl"></i>
                                        <span class="text">添加条件</span>
                                      </span>
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div class="new-set-branch">
                              <p class="title">
                                第2分支
                                <span class="branch-delete">
                                  <i class="icon icon-delete5"></i>
                                </span>
                              </p>
                              <form
                                class="el-form branch-content clearfix el-form--label-right"
                              >
                                <div class="row-margin el-row">
                                  <div class="el-col el-col-20">
                                    <div class="el-form-item">
                                      <!---->
                                      <div class="el-form-item__content">
                                        <div class="el-select qj-select">
                                          <!---->
                                          <div class="el-input">
                                            <!---->
                                            <i class="el-input__icon el-icon-caret-top"></i>
                                            <input
                                              autocomplete="off"
                                              placeholder="请选择"
                                              readonly="readonly"
                                              icon="caret-top"
                                              type="text"
                                              rows="2"
                                              class="el-input__inner"
                                            />
                                            <!---->
                                            <!---->
                                          </div>
                                          <div
                                            class="el-select-dropdown"
                                            style="display: none; min-width: 574.984px;"
                                          >
                                            <div class="el-scrollbar" style>
                                              <div
                                                class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                              >
                                                <ul
                                                  class="el-scrollbar__view el-select-dropdown__list"
                                                  style="position: relative;"
                                                >
                                                  <!---->
                                                  <li
                                                    class="el-select-dropdown__item selected"
                                                  >
                                                    <span>一般条件</span>
                                                  </li>
                                                  <li class="el-select-dropdown__item">
                                                    <span>其他条件（排除其余分支中的条件）</span>
                                                  </li>
                                                  <div class="resize-triggers">
                                                    <div class="expand-trigger">
                                                      <div
                                                        style="width: 1px; height: 1px;"
                                                      ></div>
                                                    </div>
                                                    <div class="contract-trigger"></div>
                                                  </div>
                                                </ul>
                                              </div>
                                              <div
                                                class="el-scrollbar__bar is-horizontal"
                                              >
                                                <div
                                                  class="el-scrollbar__thumb"
                                                  style="transform: translateX(0%);"
                                                ></div>
                                              </div>
                                              <div
                                                class="el-scrollbar__bar is-vertical"
                                              >
                                                <div
                                                  class="el-scrollbar__thumb"
                                                  style="transform: translateY(0%);"
                                                ></div>
                                              </div>
                                            </div>
                                            <!---->
                                          </div>
                                          <div class="resize-triggers">
                                            <div class="expand-trigger">
                                              <div style="width: 576px; height: 39px;"></div>
                                            </div>
                                            <div class="contract-trigger"></div>
                                          </div>
                                        </div>
                                        <!---->
                                      </div>
                                    </div>
                                  </div>
                                  <div class="el-col el-col-2">
                                    <span class="branch-popover">
                                      <div
                                        class="el-popover"
                                        style="width: 600px; display: none;"
                                      >
                                        <!---->
                                        <div class="approve-branch-popover">
                                          <div class="title">审批说明</div>
                                        </div>
                                      </div>
                                      <i
                                        class="icon icon-question"
                                        style="margin-left: 10px;"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <div class="row-margin el-row">
                                    <div class="el-col el-col-3">
                                      <span>条件类型</span>
                                    </div>
                                    <div class="el-col el-col-10">
                                      <label class="el-radio">
                                        <span class="el-radio__input is-checked">
                                          <span class="el-radio__inner"></span>
                                          <input
                                            type="radio"
                                            class="el-radio__original"
                                            value="0"
                                          />
                                        </span>
                                        <span class="el-radio__label">
                                          满足全部
                                          <!---->
                                        </span>
                                      </label>
                                      <label class="el-radio">
                                        <span class="el-radio__input">
                                          <span class="el-radio__inner"></span>
                                          <input
                                            type="radio"
                                            class="el-radio__original"
                                            value="1"
                                          />
                                        </span>
                                        <span class="el-radio__label">
                                          满足其一
                                          <!---->
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                  <div class="branch-select-wrap">
                                    <div class="el-row-margin el-row">
                                      <form class="el-form rule-form">
                                        <div class="el-col el-col-5">
                                          <div class="el-form-item">
                                            <!---->
                                            <div class="el-form-item__content">
                                              <div class="el-select qj-select">
                                                <!---->
                                                <div class="el-input">
                                                  <!---->
                                                  <i
                                                    class="el-input__icon el-icon-caret-top"
                                                  ></i>
                                                  <input
                                                    autocomplete="off"
                                                    placeholder="请选择"
                                                    readonly="readonly"
                                                    icon="caret-top"
                                                    type="text"
                                                    rows="2"
                                                    class="el-input__inner"
                                                  />
                                                  <!---->
                                                  <!---->
                                                </div>
                                                <div
                                                  class="el-select-dropdown"
                                                  style="display: none; min-width: 143.734px;"
                                                >
                                                  <div class="el-scrollbar" style>
                                                    <div
                                                      class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                    >
                                                      <ul
                                                        class="el-scrollbar__view el-select-dropdown__list"
                                                        style="position: relative;"
                                                      >
                                                        <!---->
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>员工</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item selected is-disabled"
                                                        >
                                                          <span>聘用形式</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>职级</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>工作城市</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>请假类型</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>请假时长</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>现合同主体</span>
                                                        </li>
                                                        <div class="resize-triggers">
                                                          <div class="expand-trigger">
                                                            <div
                                                              style="width: 1px; height: 1px;"
                                                            ></div>
                                                          </div>
                                                          <div class="contract-trigger"></div>
                                                        </div>
                                                      </ul>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-horizontal"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateX(0%);"
                                                      ></div>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-vertical"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateY(0%);"
                                                      ></div>
                                                    </div>
                                                  </div>
                                                  <!---->
                                                </div>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 145px; height: 39px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </div>
                                              <!---->
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="el-col-padding-10 el-col el-col-4">
                                          <div class="el-select qj-select">
                                            <!---->
                                            <div class="el-input is-disabled">
                                              <!---->
                                              <i
                                                class="el-input__icon el-icon-caret-top"
                                              ></i>
                                              <input
                                                autocomplete="off"
                                                placeholder="请选择"
                                                readonly="readonly"
                                                icon="caret-top"
                                                disabled="disabled"
                                                type="text"
                                                rows="2"
                                                class="el-input__inner"
                                              />
                                              <!---->
                                              <!---->
                                            </div>
                                            <div
                                              class="el-select-dropdown"
                                              style="display: none; min-width: 105px;"
                                            >
                                              <div
                                                class="el-scrollbar is-empty"
                                                style="display: none;"
                                              >
                                                <div
                                                  class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                >
                                                  <ul
                                                    class="el-scrollbar__view el-select-dropdown__list"
                                                    style="position: relative;"
                                                  >
                                                    <!---->
                                                    <option value="=" label="="></option>
                                                    <div class="resize-triggers">
                                                      <div class="expand-trigger">
                                                        <div
                                                          style="width: 1px; height: 1px;"
                                                        ></div>
                                                      </div>
                                                      <div class="contract-trigger"></div>
                                                    </div>
                                                  </ul>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-horizontal"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateX(0%);"
                                                  ></div>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-vertical"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateY(0%);"
                                                  ></div>
                                                </div>
                                              </div>
                                              <p class="el-select-dropdown__empty">无数据</p>
                                            </div>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div
                                                  style="width: 106px; height: 39px;"
                                                ></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </div>
                                          <!---->
                                          <!---->
                                        </div>
                                        <div class="el-col-padding-10 el-col el-col-13">
                                          <!---->
                                          <div class="el-select multiple-select">
                                            <div
                                              class="el-select__tags"
                                              style="max-width: 331.75px;"
                                            >
                                              <span>
                                                <span class="el-tag el-tag--primary">
                                                  <span class="el-select__tags-text">返聘</span>
                                                  <i
                                                    class="el-tag__close el-icon-close"
                                                  ></i>
                                                </span>
                                              </span>
                                              <input
                                                type="text"
                                                debounce="0"
                                                class="el-select__input is-small"
                                                style="width: 20px; max-width: 321.75px;"
                                              />
                                            </div>
                                            <div class="el-input el-input--small">
                                              <!---->
                                              <i
                                                class="el-input__icon el-icon-caret-top"
                                              ></i>
                                              <input
                                                autocomplete="off"
                                                placeholder
                                                size="small"
                                                readonly="readonly"
                                                icon="caret-top"
                                                type="text"
                                                rows="2"
                                                class="el-input__inner"
                                                style="height: 38px;"
                                              />
                                              <!---->
                                              <!---->
                                            </div>
                                            <div
                                              class="el-select-dropdown is-multiple"
                                              style="display: none; min-width: 363.75px;"
                                            >
                                              <div class="el-scrollbar" style>
                                                <div
                                                  class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                >
                                                  <ul
                                                    class="el-scrollbar__view el-select-dropdown__list"
                                                    style="position: relative;"
                                                  >
                                                    <!---->
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>正式</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>实习</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>劳务</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>顾问</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item selected"
                                                    >
                                                      <span>返聘</span>
                                                    </li>
                                                    <li
                                                      class="el-select-dropdown__item"
                                                    >
                                                      <span>外包</span>
                                                    </li>
                                                    <div class="resize-triggers">
                                                      <div class="expand-trigger">
                                                        <div
                                                          style="width: 1px; height: 1px;"
                                                        ></div>
                                                      </div>
                                                      <div class="contract-trigger"></div>
                                                    </div>
                                                  </ul>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-horizontal"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateX(0%);"
                                                  ></div>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-vertical"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateY(0%);"
                                                  ></div>
                                                </div>
                                              </div>
                                              <!---->
                                            </div>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div
                                                  style="width: 365px; height: 39px;"
                                                ></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </div>
                                          <!---->
                                          <!---->
                                          <!---->
                                        </div>
                                        <!---->
                                        <div
                                          class="el-col-padding-10 subtracter el-col el-col-2"
                                        >
                                          <span class="icon icon-subtracter"></span>
                                        </div>
                                      </form>
                                    </div>
                                    <div class="add-rule el-row">
                                      <span>
                                        <i class="icon icon-add3 fl"></i>
                                        <span class="text">添加条件</span>
                                      </span>
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div class="new-set-branch">
                              <p class="title">
                                第3分支
                                <span class="branch-delete">
                                  <i class="icon icon-delete5"></i>
                                </span>
                              </p>
                              <form
                                class="el-form branch-content clearfix el-form--label-right"
                              >
                                <div class="row-margin el-row">
                                  <div class="el-col el-col-20">
                                    <div class="el-form-item">
                                      <!---->
                                      <div class="el-form-item__content">
                                        <div class="el-select qj-select">
                                          <!---->
                                          <div class="el-input">
                                            <!---->
                                            <i class="el-input__icon el-icon-caret-top"></i>
                                            <input
                                              autocomplete="off"
                                              placeholder="请选择"
                                              readonly="readonly"
                                              icon="caret-top"
                                              type="text"
                                              rows="2"
                                              class="el-input__inner"
                                            />
                                            <!---->
                                            <!---->
                                          </div>
                                          <div
                                            class="el-select-dropdown"
                                            style="display: none; min-width: 574.984px;"
                                          >
                                            <div class="el-scrollbar" style>
                                              <div
                                                class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                              >
                                                <ul
                                                  class="el-scrollbar__view el-select-dropdown__list"
                                                  style="position: relative;"
                                                >
                                                  <!---->
                                                  <li
                                                    class="el-select-dropdown__item selected"
                                                  >
                                                    <span>一般条件</span>
                                                  </li>
                                                  <li class="el-select-dropdown__item">
                                                    <span>其他条件（排除其余分支中的条件）</span>
                                                  </li>
                                                  <div class="resize-triggers">
                                                    <div class="expand-trigger">
                                                      <div
                                                        style="width: 1px; height: 1px;"
                                                      ></div>
                                                    </div>
                                                    <div class="contract-trigger"></div>
                                                  </div>
                                                </ul>
                                              </div>
                                              <div
                                                class="el-scrollbar__bar is-horizontal"
                                              >
                                                <div
                                                  class="el-scrollbar__thumb"
                                                  style="transform: translateX(0%);"
                                                ></div>
                                              </div>
                                              <div
                                                class="el-scrollbar__bar is-vertical"
                                              >
                                                <div
                                                  class="el-scrollbar__thumb"
                                                  style="transform: translateY(0%);"
                                                ></div>
                                              </div>
                                            </div>
                                            <!---->
                                          </div>
                                          <div class="resize-triggers">
                                            <div class="expand-trigger">
                                              <div style="width: 576px; height: 39px;"></div>
                                            </div>
                                            <div class="contract-trigger"></div>
                                          </div>
                                        </div>
                                        <!---->
                                      </div>
                                    </div>
                                  </div>
                                  <div class="el-col el-col-2">
                                    <span class="branch-popover">
                                      <div
                                        class="el-popover"
                                        style="width: 600px; display: none;"
                                      >
                                        <!---->
                                        <div class="approve-branch-popover">
                                          <div class="title">审批说明</div>
                                        </div>
                                      </div>
                                      <i
                                        class="icon icon-question"
                                        style="margin-left: 10px;"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <div class="row-margin el-row">
                                    <div class="el-col el-col-3">
                                      <span>条件类型</span>
                                    </div>
                                    <div class="el-col el-col-10">
                                      <label class="el-radio">
                                        <span class="el-radio__input is-checked">
                                          <span class="el-radio__inner"></span>
                                          <input
                                            type="radio"
                                            class="el-radio__original"
                                            value="0"
                                          />
                                        </span>
                                        <span class="el-radio__label">
                                          满足全部
                                          <!---->
                                        </span>
                                      </label>
                                      <label class="el-radio">
                                        <span class="el-radio__input">
                                          <span class="el-radio__inner"></span>
                                          <input
                                            type="radio"
                                            class="el-radio__original"
                                            value="1"
                                          />
                                        </span>
                                        <span class="el-radio__label">
                                          满足其一
                                          <!---->
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                  <div class="branch-select-wrap">
                                    <div class="el-row-margin el-row">
                                      <form class="el-form rule-form">
                                        <div class="el-col el-col-5">
                                          <div class="el-form-item">
                                            <!---->
                                            <div class="el-form-item__content">
                                              <div class="el-select qj-select">
                                                <!---->
                                                <div class="el-input">
                                                  <!---->
                                                  <i
                                                    class="el-input__icon el-icon-caret-top"
                                                  ></i>
                                                  <input
                                                    autocomplete="off"
                                                    placeholder="请选择"
                                                    readonly="readonly"
                                                    icon="caret-top"
                                                    type="text"
                                                    rows="2"
                                                    class="el-input__inner"
                                                  />
                                                  <!---->
                                                  <!---->
                                                </div>
                                                <div
                                                  class="el-select-dropdown"
                                                  style="display: none; min-width: 143.734px;"
                                                >
                                                  <div class="el-scrollbar" style>
                                                    <div
                                                      class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                    >
                                                      <ul
                                                        class="el-scrollbar__view el-select-dropdown__list"
                                                        style="position: relative;"
                                                      >
                                                        <!---->
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>员工</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>聘用形式</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item selected is-disabled"
                                                        >
                                                          <span>职级</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>工作城市</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>请假类型</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>请假时长</span>
                                                        </li>
                                                        <li
                                                          class="el-select-dropdown__item"
                                                        >
                                                          <span>现合同主体</span>
                                                        </li>
                                                        <div class="resize-triggers">
                                                          <div class="expand-trigger">
                                                            <div
                                                              style="width: 1px; height: 1px;"
                                                            ></div>
                                                          </div>
                                                          <div class="contract-trigger"></div>
                                                        </div>
                                                      </ul>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-horizontal"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateX(0%);"
                                                      ></div>
                                                    </div>
                                                    <div
                                                      class="el-scrollbar__bar is-vertical"
                                                    >
                                                      <div
                                                        class="el-scrollbar__thumb"
                                                        style="transform: translateY(0%);"
                                                      ></div>
                                                    </div>
                                                  </div>
                                                  <!---->
                                                </div>
                                                <div class="resize-triggers">
                                                  <div class="expand-trigger">
                                                    <div
                                                      style="width: 145px; height: 39px;"
                                                    ></div>
                                                  </div>
                                                  <div class="contract-trigger"></div>
                                                </div>
                                              </div>
                                              <!---->
                                            </div>
                                          </div>
                                          <!---->
                                        </div>
                                        <div class="el-col-padding-10 el-col el-col-4">
                                          <div class="el-select qj-select">
                                            <!---->
                                            <div class="el-input is-disabled">
                                              <!---->
                                              <i
                                                class="el-input__icon el-icon-caret-top"
                                              ></i>
                                              <input
                                                autocomplete="off"
                                                placeholder="请选择"
                                                readonly="readonly"
                                                icon="caret-top"
                                                disabled="disabled"
                                                type="text"
                                                rows="2"
                                                class="el-input__inner"
                                              />
                                              <!---->
                                              <!---->
                                            </div>
                                            <div
                                              class="el-select-dropdown"
                                              style="display: none; min-width: 105px;"
                                            >
                                              <div
                                                class="el-scrollbar is-empty"
                                                style="display: none;"
                                              >
                                                <div
                                                  class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                >
                                                  <ul
                                                    class="el-scrollbar__view el-select-dropdown__list"
                                                    style="position: relative;"
                                                  >
                                                    <!---->
                                                    <option value="=" label="="></option>
                                                    <div class="resize-triggers">
                                                      <div class="expand-trigger">
                                                        <div
                                                          style="width: 1px; height: 1px;"
                                                        ></div>
                                                      </div>
                                                      <div class="contract-trigger"></div>
                                                    </div>
                                                  </ul>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-horizontal"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateX(0%);"
                                                  ></div>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-vertical"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateY(0%);"
                                                  ></div>
                                                </div>
                                              </div>
                                              <p class="el-select-dropdown__empty">无数据</p>
                                            </div>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div
                                                  style="width: 106px; height: 39px;"
                                                ></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </div>
                                          <!---->
                                          <!---->
                                        </div>
                                        <div class="el-col-padding-10 el-col el-col-13">
                                          <!---->
                                          <div class="el-select multiple-select">
                                            <div
                                              class="el-select__tags"
                                              style="max-width: 331.75px;"
                                            >
                                              <span>
                                                <span class="el-tag el-tag--primary">
                                                  <span class="el-select__tags-text">无职级</span>
                                                  <i
                                                    class="el-tag__close el-icon-close"
                                                  ></i>
                                                </span>
                                              </span>
                                              <input
                                                type="text"
                                                debounce="0"
                                                class="el-select__input is-small"
                                                style="width: 20px; max-width: 321.75px;"
                                              />
                                            </div>
                                            <div class="el-input el-input--small">
                                              <!---->
                                              <i
                                                class="el-input__icon el-icon-caret-top"
                                              ></i>
                                              <input
                                                autocomplete="off"
                                                placeholder
                                                size="small"
                                                readonly="readonly"
                                                icon="caret-top"
                                                type="text"
                                                rows="2"
                                                class="el-input__inner"
                                                style="height: 38px;"
                                              />
                                              <!---->
                                              <!---->
                                            </div>
                                            <div
                                              class="el-select-dropdown is-multiple"
                                              style="display: none; min-width: 363.75px;"
                                            >
                                              <div class="el-scrollbar" style>
                                                <div
                                                  class="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
                                                >
                                                  <ul
                                                    class="el-scrollbar__view el-select-dropdown__list"
                                                    style="position: relative;"
                                                  >
                                                    <!---->
                                                    <li
                                                      class="el-select-dropdown__item selected"
                                                    >
                                                      <span>无职级</span>
                                                    </li>
                                                    <div class="resize-triggers">
                                                      <div class="expand-trigger">
                                                        <div
                                                          style="width: 1px; height: 1px;"
                                                        ></div>
                                                      </div>
                                                      <div class="contract-trigger"></div>
                                                    </div>
                                                  </ul>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-horizontal"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateX(0%);"
                                                  ></div>
                                                </div>
                                                <div
                                                  class="el-scrollbar__bar is-vertical"
                                                >
                                                  <div
                                                    class="el-scrollbar__thumb"
                                                    style="transform: translateY(0%);"
                                                  ></div>
                                                </div>
                                              </div>
                                              <!---->
                                            </div>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div
                                                  style="width: 365px; height: 39px;"
                                                ></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </div>
                                          <!---->
                                          <!---->
                                          <!---->
                                        </div>
                                        <!---->
                                        <div
                                          class="el-col-padding-10 subtracter el-col el-col-2"
                                        >
                                          <span class="icon icon-subtracter"></span>
                                        </div>
                                      </form>
                                    </div>
                                    <div class="add-rule el-row">
                                      <span>
                                        <i class="icon icon-add3 fl"></i>
                                        <span class="text">添加条件</span>
                                      </span>
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div class="add-branch-type">添加分支类型</div>
                          </div>
                        </div>
                        <div class="el-dialog__footer">
                          <span class="dialog-footer">
                            <button
                              type="button"
                              class="el-button cancel el-button--default"
                            >
                              <!---->
                              <!---->
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <!---->
                              <!---->
                              <span>确定</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="stage-wrapper stage-wrapper-11 parallel-stage">
                  <!---->
                  <!---->
                  <!---->
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
                                      <!---->
                                      <!---->
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <!---->
                                      <!---->
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
                                      <!---->
                                      <!---->
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <!---->
                                      <!---->
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
                        <div class="stage-wrapper stage-wrapper-10">
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
                                      <!---->
                                      <!---->
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <!---->
                                      <!---->
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
                                      <!---->
                                      <!---->
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <!---->
                                      <!---->
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
                                      <!---->
                                      <!---->
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <!---->
                                      <!---->
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
                                      <!---->
                                      <!---->
                                      <span>取消</span>
                                    </button>
                                    <button
                                      type="button"
                                      class="el-button el-button--primary"
                                    >
                                      <!---->
                                      <!---->
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
                      <!---->
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
                        <!---->
                        <div class="el-dialog__footer">
                          <span class="dialog-footer">
                            <button
                              type="button"
                              class="el-button cancel el-button--default"
                            >
                              <!---->
                              <!---->
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <!---->
                              <!---->
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
                              <!---->
                              <!---->
                              <span>取消</span>
                            </button>
                            <button type="button" class="el-button el-button--primary">
                              <!---->
                              <!---->
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
              <i data-id="7" class="icon addBtn icon-add4"></i>
              <!---->
            </div>
            <div class="el-dialog__wrapper step-dialog" style="display: none;">
              <div class="el-dialog el-dialog--small" style="top: 15%;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">添加审批步骤</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!---->
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button cancel el-button--default">
                      <!---->
                      <!---->
                      <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--primary">
                      <!---->
                      <!---->
                      <span>确定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="el-dialog__wrapper branch-dialog" style="display: none;">
              <div class="el-dialog el-dialog--small" style="top: 15%;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">创建分支</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!---->
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button cancel el-button--default">
                      <!---->
                      <!---->
                      <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--primary">
                      <!---->
                      <!---->
                      <span>确定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="stage-wrapper stage-wrapper-3">
          <!---->
          <div class="stage">
            <div>
              <p class="passType">审批人</p>
              <i class="icon icon-edit"></i>
              <i class="icon deleteItem icon-delete5"></i>
              <div class="approve-peo-new clearfix ellipsis approve-margin">
                <div class="el-row">
                  <div class="el-col el-col-6 line-height">审批人：</div>
                  <div class="el-col el-col-18">
                    <span title="发起人上级部门负责人" class="approve-text">发起人上级部门负责人</span>
                  </div>
                </div>
                <!---->
              </div>
            </div>
            <!---->
          </div>
          <!---->
          <!---->
          <div class="end-line">
            <div class="left"></div>
            <div class="right"></div>
            <div class="stage-operation new-stage-operation">
              <i data-id="3" class="icon addBtn icon-add4"></i>
              <!---->
            </div>
            <div class="el-dialog__wrapper step-dialog" style="display: none;">
              <div class="el-dialog el-dialog--small" style="top: 15%;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">添加审批步骤</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!---->
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button cancel el-button--default">
                      <!---->
                      <!---->
                      <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--primary">
                      <!---->
                      <!---->
                      <span>确定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="el-dialog__wrapper branch-dialog" style="display: none;">
              <div class="el-dialog el-dialog--small" style="top: 15%;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">创建分支</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!---->
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button cancel el-button--default">
                      <!---->
                      <!---->
                      <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--primary">
                      <!---->
                      <!---->
                      <span>确定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="stage-wrapper stage-wrapper-4">
          <div class="stage special">
            <p class="root-title">结束审批</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#approve{
  background-color: #fff;
}
.m_t40 {
  margin-top: 40px;
}
.branch-select-wrap .el-form-item.is-required {
  margin-bottom: 0;
}
.branch-select-wrap .el-row-margin {
  margin-bottom: 20px;
}
.branch-select-wrap .el-row-margin .el-form-item {
  margin-bottom: 0;
}
.branch-select-wrap .rule-form.error input {
  border-color: #f73838;
}
.branch-select-wrap .el-col.el-col-padding-10 {
  padding-left: 10px;
}
.branch-select-wrap .el-col.field-name {
  line-height: 38px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.branch-select-wrap .el-col .select-tags {
  overflow: hidden;
}
.branch-select-wrap .el-col .select-tags .tags {
  margin-right: 6px;
  margin-bottom: 6px;
}
.branch-select-wrap .el-col .select-employee {
  cursor: pointer;
}
.branch-select-wrap .el-col .select-employee .add-box {
  line-height: 38px;
}
.branch-select-wrap .el-col .select-employee .add-box .icon-add3 {
  line-height: 38px;
  margin-right: 5px;
}
.branch-select-wrap .add-rule {
  color: #8b94a8;
  cursor: pointer;
}
.branch-select-wrap .add-rule .icon {
  font-size: 16px;
  line-height: 20px;
}
.branch-select-wrap .add-rule .text {
  display: inline-block;
  margin-left: 2px;
  font-size: 14px;
  line-height: 20px;
}
.branch-select-wrap .subtracter {
  cursor: pointer;
}
.branch-select-wrap .subtracter .icon-subtracter {
  color: #b9c1d4;
  line-height: 38px;
}
.branch-select-wrap .subtracter .icon-subtracter:hover {
  color: #f73838;
}
.branch-select-wrap .is-error .el-input__inner {
  border: 1px solid #f73838;
}
.branch-select-wrap .error-text {
  font-size: 12px;
  color: #f73838;
  line-height: 1;
  padding-top: 4px;
}
.branch-select-wrap .multiple-select .el-tag {
  margin-top: 3px !important;
  display: inline-table;
}
.branch-select-wrap .multiple-select .el-select__input {
  height: 32px;
}
.branch-select-wrap .field-error-wrapper.error .field-delete {
  border-color: #f73838;
}
.branch-select-wrap .field-delete {
  line-height: 38px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  padding-left: 10px;
}
.branch-select-wrap .delete-name {
  display: inline-block;
  max-width: 70px;
  width: auto;
  vertical-align: middle;
}
.branch-select-wrap .delete-mark {
  vertical-align: middle;
}
.m_t40 {
  margin-top: 40px;
}
.row-margin {
  margin-bottom: 14px;
}
.new-set-branch {
  position: relative;
  margin: 0 15px 20px;
  border-bottom: 1px solid #e8e8e8;
}
.new-set-branch .branch-delete {
  float: right;
  font-size: 20px;
  color: #b9c1d4;
  cursor: pointer;
}
.new-set-branch .branch-delete:hover {
  color: #f73838;
}
.new-set-branch .el-form-item label.el-form-item__label {
  color: #555;
}
.new-set-branch .el-form-item .el-form-item__error {
  white-space: nowrap;
}
.new-set-branch .title {
  text-align: left;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}
.new-set-branch .branch-content {
  position: relative;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 30px;
}
.new-set-branch .branch-content:last-child {
  margin-bottom: 15px;
}
.new-set-branch .add-leave-type {
  display: inline-block;
  cursor: pointer;
}
.new-set-branch .leave-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.new-set-branch .leave-type-list {
  display: none;
  background: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  top: -70px;
  left: 0;
  position: absolute;
  height: 0;
  overflow-y: auto;
  z-index: 10;
  transition: height 0.3s;
}
.new-set-branch .leave-type-list.approve-list {
  width: 200px !important;
}
.new-set-branch .leave-type-list p {
  height: 40px;
  line-height: 40px;
  padding: 0 30px 0 20px;
  min-width: 80px;
  background: #fff;
  position: relative;
}
.new-set-branch .leave-type-list p i {
  display: none;
  position: absolute;
  right: 15px;
  top: 13px;
  color: #f9b923;
  font-weight: 700;
}
.new-set-branch .leave-type-list p.active i {
  display: inline-block !important;
}
.new-set-branch .leave-type-list.active {
  height: 200px;
}
.new-set-branch .time-line .el-form-item {
  width: 80px !important;
}
.new-set-branch .time-line .desc-time-line {
  margin: 0 10px;
}
.new-set-branch .time-line .input-time input {
  color: #f9b923;
}
.new-set-branch .delete-branch {
  position: absolute;
  right: -20px;
  top: 50%;
  margin-top: 8px;
  font-size: 16px;
}
.new-set-branch .delete-branch:hover {
  color: #f73838;
}
.new-set-branch .branch-popover {
  line-height: 38px;
}
.approve-branch-popover {
  margin: 10px 30px 25px;
  text-align: center;
}
.approve-branch-popover .title {
  margin-bottom: 15px;
  color: #23334f;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
}
.m_t40 {
  margin-top: 40px;
}
.step-row-align {
  text-align: left;
}
.el-radio-group {
  text-align: left;
  width: 100%;
}
.el-radio-group .el-radio {
  display: block;
  margin: 0 0 6px;
}
.el-radio-group .el-radio .el-radio__inner {
  width: 14px;
  height: 14px;
}
.step-dialog .el-select .el-tag__close {
  margin: 0 !important;
}
.m_t40 {
  margin-top: 40px;
}
.step-dialog .el-dialog--small {
  width: 648px !important;
}
.step-dialog .el-dialog__header {
  position: relative;
  z-index: 9999;
  background: #fff;
}
.step-dialog .el-dialog__body {
  margin-top: 6px !important;
  padding-top: 0;
}
.m_t40 {
  margin-top: 40px;
}
.m_t40 {
  margin-top: 40px;
}
.branch-dialog .el-form-item__label,
.step-dialog .el-form-item__label {
  text-align: right !important;
}
.step-dialog .el-dialog--small {
  width: 648px !important;
}
.branch-dialog {
  text-align: left;
}
.branch-dialog .el-dialog--small {
  width: 800px;
}
.branch-dialog .el-dialog__body {
  max-height: 300px;
  overflow-y: auto;
}
.branch-dialog .add-branch-type {
  margin: 0 15px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  color: #23334f;
  height: 36px;
  line-height: 36px;
  background: #e8e8e8;
  text-align: center;
}
.step-dialog .el-dialog--small {
  width: 580px;
}
.step-dialog .el-dialog--small .el-dialog__body {
  margin-top: -10px;
}
.step-dialog .dialog-content {
  font-size: 12px;
  color: #999;
}
.step-dialog .dialog-content .add-approve-tip {
  text-align: left;
}
.step-dialog .dialog-content .add-approve-tip span {
  color: #ff7044;
}
.step-dialog .el-form {
  margin-top: 20px;
  padding-right: 40px;
  min-height: 200px;
}
.step-dialog .el-form .el-form-item {
  margin-bottom: 20px;
}
.m_t40 {
  margin-top: 40px;
}
.approveSet-wrap .special #lenovo-employee-dialog .el-dialog {
  top: 15% !important;
}
.approveSet-wrap #lenovo-employee-dialog .el-dialog {
  top: 0 !important;
}
.approveSet-wrap .stages-container .step-dialog .el-dialog__body {
  max-height: 300px;
  overflow-y: auto;
}
.approveSet-wrap .stages-container .stage-wrapper {
  text-align: center;
}
.approveSet-wrap .stages-container .stage-wrapper .stage {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 230px;
  border: 1px solid #e2e4e6;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .passType,
.approveSet-wrap .stages-container .stage-wrapper .stage .root-title {
  margin: 0 8px;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  color: #23334f;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .passType.passType,
.approveSet-wrap .stages-container .stage-wrapper .stage .root-title.passType {
  margin: 0;
  background: #e2e4e6;
}
.approveSet-wrap .stages-container .stage-wrapper .stage:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.approveSet-wrap .stages-container .stage-wrapper .stage:hover .icon-delete5,
.approveSet-wrap .stages-container .stage-wrapper .stage:hover .icon-edit {
  display: block;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .icon-delete5,
.approveSet-wrap .stages-container .stage-wrapper .stage .icon-edit {
  display: none;
  position: absolute;
  top: 13px;
  font-size: 16px;
  color: #6b7897;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .icon-edit {
  cursor: pointer;
  right: 38px;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .icon-edit:hover {
  color: #1bc489;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .icon-edit.r-10 {
  right: 10px;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .icon-delete5 {
  cursor: pointer;
  right: 10px;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .icon-delete5:hover {
  color: #f0653b;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .label {
  color: #999;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .approve-peo-new {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box;
  min-height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #6b7897;
  font-size: 12px;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .approve-margin {
  margin: 10px 0;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .ellipsis {
  overflow: hidden;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .line-height {
  line-height: 2.5;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .margin-top-10 {
  margin-top: 10px;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .copy-col {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .copy-col.text-align {
  text-align: left;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .approve-text,
.approveSet-wrap .stages-container .stage-wrapper .stage .continuity-icon,
.approveSet-wrap .stages-container .stage-wrapper .stage .continuity-text {
  display: block;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .approve-text.continuity-icon,
.approveSet-wrap .stages-container .stage-wrapper .stage .continuity-icon.continuity-icon,
.approveSet-wrap .stages-container .stage-wrapper .stage .continuity-text.continuity-icon {
  color: #9e9ea6;
}
.approveSet-wrap .stages-container .stage-wrapper .stage .approve-text.approve-text,
.approveSet-wrap .stages-container .stage-wrapper .stage .continuity-icon.approve-text,
.approveSet-wrap .stages-container .stage-wrapper .stage .continuity-text.approve-text {
  line-height: 2.5;
  text-align: left;
}
.approveSet-wrap .stages-container .stage-wrapper .stage.error {
  border-color: #f73838;
}
.approveSet-wrap .stages-container .stage-wrapper .stage.stage-branch {
  padding: 11px 15px 6px;
}
.approveSet-wrap .stages-container .stage-wrapper .stage.stage-branch .branch-title {
  padding-bottom: 10px;
  margin-bottom: 12px;
  height: 17px;
  line-height: 17px;
  font-size: 16px;
  color: #23334f;
  text-align: center;
  font-weight: 500;
  border-bottom: 1px solid #e2e4e6;
}
.approveSet-wrap .stages-container .stage-wrapper .stage.stage-branch .branch-condition {
  color: #23334f;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
}
.approveSet-wrap .stages-container .stage-wrapper .stage.stage-branch .desc {
  text-align: left;
  line-height: 1.7;
  font-size: 12px;
  color: #6b7897;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.approveSet-wrap .stages-container .stage-wrapper .stage.stage-branch .else-text {
  display: inline-block;
  color: #23334f;
  font-size: 12px;
  margin-bottom: 11px;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line,
.approveSet-wrap .stages-container .stage-wrapper .start-line {
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  align-items: stretch;
  height: 50px;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .left,
.approveSet-wrap .stages-container .stage-wrapper .end-line .right,
.approveSet-wrap .stages-container .stage-wrapper .start-line .left,
.approveSet-wrap .stages-container .stage-wrapper .start-line .right {
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
  width: 50%;
  border: 0 solid #d5d5d5;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation,
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation {
  position: absolute;
  z-index: 1;
  left: 50%;
  margin-left: -11px;
  top: 50%;
  margin-top: -11px;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation i.addBtn,
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation i.addBtn {
  display: inline-block;
  font-size: 22px;
  color: #9e9ea6;
  background: #fff;
  border-radius: 20px;
  transition: transform 0.2s;
  -webkit-transition: -webkit-transform 0.2s;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation i.addBtn:hover,
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation i.addBtn:hover {
  color: #03b10d;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation span,
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation span {
  cursor: pointer;
  position: absolute;
  z-index: -1;
  display: inline-block;
  width: 66px;
  top: 0;
  line-height: 22px;
  border: 1px solid #d5d5d5;
  border-radius: 20px;
  font-size: 12px;
  color: #999;
  opacity: 0;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation span:first-of-type,
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation span:first-of-type {
  left: -40px;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation span:nth-of-type(2),
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation span:nth-of-type(2) {
  left: -22px;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation span:hover,
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation span:hover {
  border: 1px solid #03b10d;
  color: #03b10d;
  background-color: #fff;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation.active i.addBtn,
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation.active i.addBtn {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation.active span:first-of-type,
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation.active span:first-of-type {
  left: -74px;
  opacity: 1;
}
.approveSet-wrap .stages-container .stage-wrapper .end-line .stage-operation.active span:nth-of-type(2),
.approveSet-wrap .stages-container .stage-wrapper .start-line .stage-operation.active span:nth-of-type(2) {
  left: 26px;
  opacity: 1;
}
.approveSet-wrap .stages-container .stage-wrapper > .end-line .right {
  border-width: 0 0 0 1px;
}
.approveSet-wrap .stages-container .stage-wrapper.start-stage .stage {
  border-radius: inherit;
}
.approveSet-wrap .stages-container .stage-wrapper.start-stage .stage .title {
  margin: 20px 0;
  padding: 0;
  text-align: center;
}
.approveSet-wrap .stages-container .stage-wrapper .branches {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch > .start-line {
  height: 40px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:first-of-type > .start-line .left {
  border-width: 0;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:first-of-type > .start-line .right {
  border-width: 1px 0 0 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:first-of-type > .end-line .left {
  border-width: 0;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:first-of-type > .end-line .right {
  border-width: 0 0 1px 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:last-of-type > .start-line .left {
  border-width: 1px 0 0;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:last-of-type > .start-line .right {
  border-width: 0 0 0 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:last-of-type > .end-line .left {
  border-width: 0 0 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:last-of-type > .end-line .right {
  border-width: 0 0 0 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch > .start-line .left {
  border-width: 1px 0 0;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch > .start-line .right {
  border-width: 1px 0 0 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch > .end-line .left {
  border-width: 0 0 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch > .end-line .right {
  border-width: 0 0 1px 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch > .end-line:last-child {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  height: 1px;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:only-child > .start-line .left {
  border-width: 0 !important;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:only-child > .start-line .right {
  border-width: 0 0 0 1px !important;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:only-child > .end-line .left {
  border-width: 0 !important;
}
.approveSet-wrap .stages-container .stage-wrapper .branches .branch:only-child > .end-line .right {
  border-width: 0 0 0 1px !important;
}
.approveSet-wrap .stages-container .branches .branch:only-child > .start-line .left {
  border-width: 0 !important;
}
.approveSet-wrap .stages-container .branches .branch:only-child > .start-line .right {
  border-width: 0 0 0 1px !important;
}
.approveSet-wrap .stages-container .tag-box {
  position: relative;
  padding-top: 9px;
  text-align: left;
}
.approveSet-wrap .stages-container .tag-box .add-box {
  cursor: pointer;
  position: relative;
  height: 20px;
  line-height: 20px;
  color: #999;
}
.approveSet-wrap .stages-container .tag-box .add-box .icon-add3 {
  font-size: 18px;
  margin-right: 5px;
}
.approveSet-wrap .stages-container .tag-box .el-tag {
  max-width: 125px;
  margin-right: 6px;
  margin-bottom: 10px;
}
.approveSet-wrap .stages-container .el-form-item .error,
.approveSet-wrap .stages-container .tag-box .error {
  width: 220px;
  position: absolute;
  left: 0;
  line-height: normal;
  font-size: 12px;
  text-align: left;
  color: #f73838;
  top: -8px;
}
.approveSet-wrap .stages-container .el-form-item .error.transition,
.approveSet-wrap .stages-container .tag-box .error.transition {
  animation: error 0.3s ease;
}
@keyframes error {
  0% {
    opacity: 0;
    top: 8px;
  }
  to {
    opacity: 1;
    top: -8px;
  }
}
.approveSet-wrap .stages-container .fl {
  float: left;
}
.approveSet-wrap .stages-container .fr {
  float: right;
}
.approveSet-wrap .stages-container .clearfix:after,
.approveSet-wrap .stages-container .clearfix:before {
  content: '';
  display: table;
}
.approveSet-wrap .stages-container .clearfix:after {
  clear: both;
}
.approveSet-wrap .stages-container .clearfix {
  *zoom: 1;
}
.m_t40 {
  margin-top: 40px;
}
.f-s-content {
  overflow: auto;
}
.f-s-content .main-content {
  overflow: inherit !important;
}
.f-s-footer {
  background: #fff !important;
}
.el-steps {
  padding-top: 40px;
}
.el-steps .el-step__main {
  margin-left: -10px;
  margin-right: -10px;
}
.el-steps .el-step__icon,
.el-steps .el-step__title {
  cursor: pointer;
}
.el-steps .el-step__line {
  background-color: #c6c6c6;
}
.leave-dialog .el-dialog {
  max-width: 442px;
}
.approveSet-wrap {
  margin: 0 auto 150px;
  text-align: center;
  padding: 30px;
}
.approveSet-wrap .stages-container {
  margin: 0 auto;
  position: relative;
}
.dialog-error,
.dialog-warning {
  color: #999;
  line-height: 30px;
  padding: 0 20px;
}
#errorDialog .el-dialog__body .dialog-error,
#errorDialog .el-dialog__title {
  color: #23334f;
}
</style>
