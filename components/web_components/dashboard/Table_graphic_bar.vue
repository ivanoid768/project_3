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
           legend: { display: false },
           barPercentage: "4",
           maxBarThickness: "4",
           barThickness: 4,
           responsive: true,
           maintainAspectRatio: false,

         }
       }

     },
     extends: Bar,
     methods() {
      
     },
    mounted() {
      // Overwriting base render method with actual data.
      let _this = this;
      let generate24time=() => {
         let time = [];
      for (let i = 0; i <= 24; ++i) {
        if (i < 10) {
          time.push(`0${i}.00`);
        } else {
          time.push(`${i}.00`);
        }
      }
      return time;
    }

      this.renderChart({
        labels: generate24time(),
        datasets: [
          {
            label: "",
            backgroundColor: '#ffa573',
            data: _this.dataset
          }
        ]
      },
        this.options
      )
    }
  }

</script>
