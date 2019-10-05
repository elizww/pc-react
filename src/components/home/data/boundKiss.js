export default {
  title: 'Bound Kiss',
  bar: {
    labels: ['January', 'February', 'March'],
    datasets: [{
      type: 'line',
      label: 'Gap',
      borderColor: '#7196F3',
      borderWidth: 2,
      fill: false,
      data: [
        2000,
        2000,
        5000,
      ]
    }, {
      type: 'bar',
      label: 'Planned',
      backgroundColor: '#bC5F50',
      data: [
        41000,
        72000,
        44000,
      ],
      borderColor: 'white',
      borderWidth: 2
    }, {
      type: 'bar',
      label: 'Actual',
      backgroundColor: '#aFC307',
      data: [
        43000,
        74000,
        49000,
      ]
    }]
  },
  pie: {
    labels: ['Writers', 'Director', 'Producer', 'Cast', 'Production Crew', 'Director Department', 'Light, Camera & Sound', 'Art', 'Other'],
    datasets: [
      {
        data: [81388, 79235, 138980, 80000, 78750, 54000, 94000, 64000, 85000],
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
  alerts: 5,
  messages: 3,
  events: 12,
}