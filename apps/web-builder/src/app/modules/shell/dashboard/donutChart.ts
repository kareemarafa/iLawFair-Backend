import type { ChartData, ChartOptions } from 'chart.js'

const data: ChartData = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}

const options: ChartOptions = {
  interaction: {
    intersect: false,
    mode: 'index'
  },
  plugins: {
    title: {
      display: false
    },
    legend: {
      display: true,
      position: 'bottom'
    }
  }
}

export default { data, options }
