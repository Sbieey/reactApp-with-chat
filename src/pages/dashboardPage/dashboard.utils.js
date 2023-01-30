export const terminals = [
  'nnamdi azikiwe highway, kaduna',
  'Maitama, Abuja',
  'nnamdi azikiwa highway, kaduna',
  'Maitama, Abuja',
  'nnamdi azikiwe highway, kaduna',
  'Maitama, Abuja',
  'nnamdi azikiwa highway, kaduna',
  'Maitama, Abuja'
];

export const sideAreaChartOptions = {
  options: {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      noData: {
        text: 'Loading...'
      },
    },
    stroke: {
      curve: 'smooth',
      width: '2'
    },
    xaxis: {
      categories: ['1d', '1w', '1m', '3m', '1y', 'ALL']
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 500
    },
  },
  series: [{
    name: 'Transactions',
    type: "area",
    data: [330, 90, 135, 272, 149, 360]
  }]
}

export const volumeOptions = {
  series: [{
    name: 'Transaction volume',
    data: [20, 25, 42, 56, 79, 82, 66]
  }],
  options: {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      },
      noData: {
        text: 'Loading...'
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        dataLabels: {
          position: 'center', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      position: 'bottom',
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val + "%";
        }
      }

    },
  }
};

export const mainChartOptions = {
  options: {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      noData: {
        text: 'Loading...'
      },
    },
    stroke: {
      curve: 'smooth',
      width: '4',
      colors: ['black']
    },
    xaxis: {
      categories: ['1d', '1w', '1m', '3m', '1y', 'ALL']
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100000
    },
  },
  series: [{
    name: 'Income',
    type: "area",
    data: [33000, 92000, 43500, 27200, 54900, 76000]
  }]
}