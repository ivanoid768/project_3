 <script>
  import { Bar} from 'vue-chartjs'

   export default {
     props: {
       dataset: {
         default: () => { return [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] }
       }
     },
     data: () => {
       return {
         options: {
           barPercentage: 4,
           responsive: true,
           maintainAspectRatio: false
         }
       }

     },
     extends: Bar, 
    mounted() {
      // Overwriting base render method with actual data.

      console.log("options", this)
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: "",
            backgroundColor: '#ffa573',
            data: this.dataset
          }
        ]
      },
        this.options
      )
    }
  }

</script>
