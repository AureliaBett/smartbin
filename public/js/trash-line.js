var ctx = document.getElementById("trash-analytics").getContext('2d');
var lineGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
      label: 'Pounds of Trash',
      data: [20, 28, 34, 48, 56, 63, 72],
      borderColor: "#2b81f1",
      fill: false
    },
    {
      label: 'Pounds of Recycling',
      data: [05, 08, 12, 15, 18, 23, 26],
      borderColor: "#f12b2e",
      fill: false
    }
    ]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
});
