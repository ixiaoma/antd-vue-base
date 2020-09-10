<style lang="less" scoped>@import "./addFormModal.less";</style>

<template>
    <a-modal
      :title="title"
      :visible="show"
      :confirm-loading="loading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
        <a-form 
            :form="form" 
            :label-col="{ span: 5 }" 
            :wrapper-col="{ span: 15 }"
        >
            <a-form-item 
                v-for="(item , index) in fieldList" 
                :key="index"
                :label="item.label"
            >
                <a-input
                    v-if="item.type === 'input'"
                    v-decorator="item.decorator"
                    :placeholder="item.placeholder"
                />
                <a-select
                    v-if="item.type === 'select'"
                    v-decorator="item.decorator"
                    :placeholder="item.placeholder"
                >
                    <a-select-option 
                        :value="option.value"
                        v-for="(option , optionIndex) in item.selectOption"
                        :key="'option' + optionIndex"
                    >
                        {{option.name}}
                    </a-select-option>
                </a-select>
                 <a-date-picker
                    v-if="item.type === 'date'"
                    v-decorator="item.decorator"
                    :format="item.format || 'YYYY-MM-DD'"
                    style="width:100%"
                />
                <a-input-number
                    v-if="item.type == 'inputNumber'"
                    :placeholder="item.placeholder" 
                    :min="item.min || 0"
                    style="width:100%"
                    :max="item.max || Infinity"
                    v-decorator="item.decorator"
                />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script src="./addFormModal.js"></script>


