import budgetGetAmount from './budgetGetAmount/budgetGetAmount.vue'
export default {
    name: 'budgetSetting',
    data() {
        return {

        }
    },
    components: {
        budgetGetAmount
    },
    methods: {
        showTable(){
            this.$refs.budgetGetAmount.visible=true
        },
        setBudgetAmount(){
            this.$refs.budgetGetAmount.budgetAmount=0
            this.$refs.budgetGetAmount.setAmount=true
        },
        budgetSee(){
            this.$refs.budgetGetAmount.budgetLatitude=''
            this.$refs.budgetGetAmount.budgetSeeLoad()
        },
        budgetEdit(){
            this.$refs.budgetGetAmount.budgetLatitude=''
            this.$refs.budgetGetAmount.budgetEditLoad()
        }
    },
    created() {
        
    }
}