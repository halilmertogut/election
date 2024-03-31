import React from 'react';
import { Bar } from 'react-chartjs-2';

const VoteChart = ({ candidate, totalVotes }) => {
  const data = {
    labels: [candidate.a],
    datasets: [
      {
        label: 'Votes',
        data: [candidate.t],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
      {
        label: 'Remaining Votes',
        data: [totalVotes - candidate.t],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      }
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default VoteChart;
