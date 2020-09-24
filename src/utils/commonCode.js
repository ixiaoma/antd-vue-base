import moment from 'moment'

export const valueTypeList = [
    {
        label:'TEXT_SINGLE',
        value:'单行文本',
        icon:'icon-danhangwenben'
    },{
        label:'TEXT_MULTI',
        value:'多行文本',
        icon:'icon-duohangwenben1'
    },{
        label:'RADIO',
        value:'单选',
        icon:'icon-plus-radio'
    },{
        label:'CHECKBOX',
        value:'多选',
        icon:'icon-checkboxoutline'
    },{
        label:'SELECT',
        value:'多级联动',
        icon:'icon-duojilanmu'
    },{
        label:'INTEGER',
        value:'整数',
        icon:'icon-zhengshu'
    },{
        label:'DECIMAL',
        value:'小数',
        icon:'icon-xiaoshu'
    },{
        label:'AMOUNT',
        value:'金额',
        icon:'icon-jine'
    },{
        label:'DATETIME',
        value:'日期+时间',
        icon:'icon-riqi'
    },{
        label:'DATE',
        value:'日期',
        icon:'icon-riqi'
    },{
        label:'PICTURE',
        value:'图片',
        icon:'icon-tupian'
    },{
        label:'ATTACHMENT',
        value:'附件',
        icon:'icon-fujian'
    },{
        label:'PHONE',
        value:'电话',
        icon:'icon-dianhua2'
    },{
        label:'EMAIL',
        value:'邮件',
        icon:'icon-youjian'
    },{
        label:'AUTO_CODE',
        value:'自动编号',
        icon:'icon-bianhao'
    },{
        label:'COMPUTE',
        value:'计算字段',
        icon:'icon-jisuan'
    }
]

export const levelList = [
    {
        label:'4',
        title:'最高上级'
    },{
        label:'2',
        title:'第二层上级'
    },{
        label:'1',
        title:'第三层上级'
    }
]

export function getLastMonthDays () {// 获取上一个月的开始结束时间
    let date = []
    let start = moment().month(moment().month() - 1).startOf('month').format('YYYY-MM-DD')
    let end = moment().month(moment().month() - 1).endOf('month').format('YYYY-MM-DD')
    date.push(start)
    date.push(end)
    return date
}