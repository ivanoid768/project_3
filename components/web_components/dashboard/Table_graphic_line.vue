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
       let generate24time = () => {
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
      // Overwriting base render method with actual data.
      this.renderChart({
        
        labels: generate24time(),
        datasets: [
          {
              label: "",
            backgroundColor: ['rgba(234, 102, 92, 0.2' ],
            borderColor: "#ea665c",
            borderWidth: 3,
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
