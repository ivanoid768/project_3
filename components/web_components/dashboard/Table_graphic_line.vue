 <script>
  import { Line } from 'vue-chartjs'

   export default {
     props: {
       dataset: {
         default: () => { return [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] }
       }
     },
     extends: Line, 
    mounted() {
      // Overwriting base render method with actual data.
      this.renderChart({
        
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
              label: "",
            backgroundColor: ['rgba(234, 102, 92, 0.2' ],
            borderColor: "#ea665c",
            borderWidth: 6,
            data:this.dataset, 
          }
        ],
        
        },
        {

          responsive: true,
          maintainAspectRatio: false
        }
      )
    }
  }

</script>
