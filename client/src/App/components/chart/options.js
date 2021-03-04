export const options = {
  chart: {
    type: 'bar',
    height: 550,
    toolbar: {
      tools: {
        download: false
      }
    }
  },
  legend: {
    show: true,
    position: 'top',
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
  },
  xaxis: {
    categories: ['10', '20', '30', '40'],
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + '%'
      }
    }
  },
  colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
}