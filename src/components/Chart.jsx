const chartData = (infoArr) => ({
  labels: ['CO', 'NH3', 'NO', 'NO2', 'O3', 'PM2_5', 'PM10', 'SO2'],
  datasets: [
    {
      label: 'Quantity',
      data: [
        infoArr[0].value,
        infoArr[1].value,
        infoArr[2].value,
        infoArr[3].value,
        infoArr[4].value,
        infoArr[5].value,
        infoArr[6].value,
        infoArr[7].value,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)',
        'rgba(94, 94, 94, 0.4)',
        'rgba(255, 255, 255, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(94, 94, 94, 1)',
        'rgba(255, 255, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export default chartData;
