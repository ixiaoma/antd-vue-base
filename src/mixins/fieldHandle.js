import { getCascaderList } from '@/api/commonApi'
export default{
    data(){

    },
    methods:{
        async loadData(selectedOptions,i){//多级联动加载下级数据
            const targetOption = selectedOptions[selectedOptions.length - 1]
            targetOption.loading = true;
            const list  = await getCascaderList({parentCode:targetOption.codeKey})
            targetOption.children = list.map(ele=>{
                return {
                    ...ele,
                    isLeaf:selectedOptions.length == i.categoryCodes.length-1
                }
            })
            i.codeItems = [...i.codeItems]
            targetOption.loading = false;
        },
        limitNumber(value) {//正则替换小数点
            if (typeof value === 'string') {
                return !isNaN(Number(value)) ? value.replace(/\./g, '') : 0
            } else if (typeof value === 'number') {
                return !isNaN(value) ? String(value).replace(/\./g, '') : 0
            } else {
                return 0
            }
        }
    }
}