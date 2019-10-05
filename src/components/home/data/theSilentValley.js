export default {
  bar: {
    labels: ['February', 'March', 'April', 'May', 'June'],
    datasets: [{
      type: 'line',
      label: 'Gap',
      borderColor: '#7196F3',
      borderWidth: 2,
      fill: false,
      data: [
        6000,
        10000,
        2000,
        7000,
        29000,
      ]
    }, {
      type: 'bar',
      label: 'Planned',
      backgroundColor: '#123456',
      data: [
        41000,
        79000,
        72000,
        44000,
        83000,
      ],
      borderColor: 'white',
      borderWidth: 2
    }, {
      type: 'bar',
      label: 'Actual',
      backgroundColor: '#fedba0',
      data: [
        47000,
        89000,
        74000,
        51000,
        112000,
      ]
    }]
  },
  pie: {
    labels: ['Writers', 'Director', 'Producer', 'Cast', 'Production Crew', 'Director Department', 'Light, Camera & Sound', 'Art', 'Other'],
    datasets: [
      {
        data: [60000, 99000, 160000, 160000, 65000, 29000, 115000, 32000, 250000],
        backgroundColor: [
          "#845EC2",
          "#D65DB1",
          "#FF6F91",
          '#FF9671', '#FFC75F', '#F9F871',
          '#2C73D2', '#008E9B', '#FBEAFF'
        ],
      }
    ]
  },
  alerts: 9,
  messages: 53,
  events: 12,
}