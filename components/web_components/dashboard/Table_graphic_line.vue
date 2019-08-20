 <script>
  import { Line, mixins } from 'vue-chartjs'
  import { hashRoundWithPrefix, hashRoundWithPrefixForChartLabel } from '../../../utils/hashPrefix';

  const { reactiveProp } = mixins;
  export default {
    props: {
      period: {},
      chartData: {
        default: () => { return [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] }
      }
    },
    extends: Line,
    mounted() {
      let generate12time = () => {
        let time = [];
        for (let i = 1; i <= 12; ++i) {
          if (i < 10) {
            time.push(`0${i}.00`);
          } else {
            time.push(`${i}.00`);
          }
        }

        return time;
      };
      let generate3dtime = () => {
        let time = [];
        for (let d = 1; d <= 3; ++d) {
          for (let i = 0; i < 24; ++i) {
            if (i < 10) {
              time.push(`0${i}.00`);
            } else {
              time.push(`${i}.00`);
            }
          }
        }
        console.log(time);

        return time;
      };
      let generate24time = () => {
        let time = [];
        for (let i = 0; i <= 23; ++i) {
          if (i < 10) {
            time.push(`0${i}.00`);
          } else {
            time.push(`${i}.00`);
          }
        }
        return time;
      }

      let labels = "";
      if (this.period === "12h") {
        labels = generate12time();
      } else if (this.period === "24h") {
        labels = generate24time();
      } else {
        labels = generate3dtime();
      }

      // Overwriting base render method with actual data.
      this.renderChart({

        labels: labels,
        yLabels: ['Th/s', 'Th/s'],
        datasets: [
          {
            backgroundColor: ['rgba(234, 102, 92, 0.2'],
            borderColor: "#ea665c",
            borderWidth: 3,
            data: this.chartData,
          }
        ],

      },
        {
          legend: { display: false },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  // return hashRoundWithPrefix(value);
                  return hashRoundWithPrefixForChartLabel(value);
                }
              }
            }]
          }
        }
      )
    }
  }

</script>
