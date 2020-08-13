<template>
    <div id="components-form-demo-advanced-search">
        <a-form :form="form" @submit="handleSubmit" class="ant-advanced-search-form">
            <a-collapse default-active-key="0" :bordered="false" class="spacial-collape">
                <a-collapse-panel v-for="(item,index) in layoutList" :key="index" :header="item.groupName">
                    <a-row :gutter="56">
                        <a-col v-for="(i,d) in item.fieldList" :key="d" :span="12" >
                            <a-form-item :label="i.fieldName">
                                <a-input v-if="i.fieldType == 1" v-decorator="decoratorFn(i)" :placeholder="i.fieldName" />
                                <a-textarea v-else-if="i.fieldType == 2" rows="4" v-decorator="decoratorFn(i)"/>
                                <a-date-picker v-else-if="i.fieldType == 5" v-decorator="decoratorFn(i)" style="width:100%"/>
                                <a-select v-else-if="i.fieldType == 3" v-decorator="decoratorFn(i)"/>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-collapse-panel>
            </a-collapse>
        </a-form>
    </div>
</template>
<script>
export default {
    name:'BaseFormLayout',
    data () {
        return {
        form: this.$form.createForm(this)
        }
    },
    props:{
        layoutList:{
            type:Array,
            default:[]
        }
    },
    methods:{
        decoratorFn(i){
            return [ i.fieldKey, {  rules: [ { required: i.enabled == 1 ? true : false, message: `${i.fieldName}必填` } ] } ]
        },
        handleSubmit (e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values)
                }
            })
        }
    }
}
</script>