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
export function getMonthStartAndEnd(AddMonthCount) { //0:当月；-1:上个月
	//起止日期数组
	var startStop = new Array(); 
	//获取当前时间
	var currentDate = new Date();
	var month=currentDate.getMonth()+AddMonthCount;
	if(month<0){
	  var n = parseInt((-month)/12);
	  month += n*12;
	  currentDate.setFullYear(currentDate.getFullYear()-n);
	}
	currentDate = new Date(currentDate.setMonth(month));
	//获得当前月份0-11
	var currentMonth = currentDate.getMonth(); 
	//获得当前年份4位年
	var currentYear = currentDate.getFullYear(); 
	//获得上一个月的第一天
	var currentMonthFirstDay = new Date(currentYear, currentMonth,1); 
	//获得上一月的最后一天
	var currentMonthLastDay = new Date(currentYear, currentMonth+1, 0); 
	//添加至数组
	startStop.push(getDateStr3(currentMonthFirstDay)); 
	startStop.push(getDateStr3(currentMonthLastDay)); 
	//返回
	return startStop; 
}