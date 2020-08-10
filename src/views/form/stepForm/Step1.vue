<template>
  <div>
    <a-form :form="form">
      <a-collapse default-active-key="1" :bordered="false" class="spacial-collape">
        <a-collapse-panel key="1" header="This is panel header 1">
          <a-dropdown slot="extra">
            <a @click="e => e.preventDefault()">
              <a-icon slot="extra" type="setting" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <div>
            <a-form-item
              label="付款账户"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                placeholder="ant-design@alipay.com"
                v-decorator="['paymentUser', { rules: [{required: true, message: '付款账户必须填写'}] }]">
                <a-select-option value="1">ant-design@alipay.com</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="收款账户"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-input-group
                style="display: inline-block; vertical-align: middle"
                :compact="true"
              >
                <a-select defaultValue="alipay" style="width: 100px">
                  <a-select-option value="alipay">支付宝</a-select-option>
                  <a-select-option value="wexinpay">微信</a-select-option>
                </a-select>
                <a-input
                  :style="{width: 'calc(100% - 100px)'}"
                  v-decorator="['payType', { initialValue: 'test@example.com', rules: [{required: true, message: '收款账户必须填写'}]}]"
                />
              </a-input-group>
            </a-form-item>
            <a-form-item
              label="收款人姓名"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-input v-decorator="['name', { initialValue: 'Alex', rules: [{required: true, message: '收款人名称必须核对'}] }]"/>
            </a-form-item>
            <a-form-item
              label="转账金额"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-input prefix="￥" v-decorator="['momey', { initialValue: '5000', rules: [{required: true, message: '转账金额必须填写'}] }]"/>
            </a-form-item>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
          <p>text</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3">
          <p>text</p>
        </a-collapse-panel>
      </a-collapse>
      <a-button type="primary" @click="addModel">添加模块</a-button>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Step1',
  data () {
    return {
      labelCol: { lg: { span: 5 }, sm: { span: 5 } },
      wrapperCol: { lg: { span: 19 }, sm: { span: 19 } },
      form: this.$form.createForm(this)
    }
  },
  methods: {
    addModel () {
      
    }
  }
}
</script>

<style lang="less" scoped>
.step-form-style-desc {
  padding: 0 56px;
  color: rgba(0,0,0,.45);

  h3 {
    margin: 0 0 12px;
    color: rgba(0,0,0,.45);
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}
</style>
