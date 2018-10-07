 <script>
  import { Line } from 'vue-chartjs'

  export default {
     extends: Line, 
    mounted() {
      // Overwriting base render method with actual data.
      this.renderChart({
        label :"",
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          { 
            backgroundColor: '#ea665c',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11], 
          }
        ]
      },
        {
          responsive: true,
          maintainAspectRatio: false
        }
      )
    }
  }

</script>
