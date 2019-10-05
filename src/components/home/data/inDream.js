export default {
  title: 'In Dream',
  bar: {
    labels: ['January', 'February', 'March'],
    datasets: [{
      type: 'line',
      label: 'Gap',
      borderColor: '#2196F3',
      borderWidth: 2,
      fill: false,
      data: [
        20000,
        32000,
        0,
      ]
    }, {
      type: 'bar',
      label: 'Planned',
      backgroundColor: '#4CAF50',
      data: [
        21000,
        52000,
        24000,
      ],
      borderColor: 'white',
      borderWidth: 2
    }, {
      type: 'bar',
      label: 'Actual',
      backgroundColor: '#FFC107',
      data: [
        41000,
        84000,
        24000,
      ]
    }]
  },
  pie: {
    labels: ['Writers', 'Director', 'Producer', 'Cast', 'Production Crew', 'Director Department', 'Light, Camera & Sound', 'Art', 'Other'],
    datasets: [
      {
        data: [71388, 89235, 118980, 88000, 87750, 44000, 64000, 64000, 155000],
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
  alerts: 2,
  messages: 5,
  events: 6,
}