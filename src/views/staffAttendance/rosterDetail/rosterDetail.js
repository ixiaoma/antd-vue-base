import { getRosterDetails} from '@/api/other'
export default {
  name: 'rosterDetailList',
  components: {
    
  },
  data () {
    return {
      
    }
  },
  methods: {
    getRosterDetailsLoad(id){
      getRosterDetails(id).then(res=>{

      })
    }
  },
  created() {
    this.getRosterDetailsLoad(this.$route.query.id)
  }
}
