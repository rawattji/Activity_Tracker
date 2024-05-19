import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

// Register the components required for Pie charts
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [usageData, setUsageData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/website_usages');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const formattedData = data.reduce((accumulator, item) => {
        try {
          const itemUrl = new URL(item.url); // Ensure item.url is a valid URL
          const existingIndex = accumulator.findIndex(entry => {
            try {
              const url = new URL(entry.url); // Ensure entry.url is a valid URL
              return url.hostname === itemUrl.hostname;
            } catch (error) {
              console.error('Invalid URL in accumulator:', entry.url);
              return false;
            }
          });

          if (existingIndex !== -1) {
            accumulator[existingIndex].timeSpent += item.time_spent;
            accumulator[existingIndex].sessions += 1;
          } else {
            accumulator.push({
              url: item.url,
              timeSpent: item.time_spent,
              sessions: 1
            });
          }
        } catch (error) {
          console.error('Invalid URL in item:', item.url);
        }
        return accumulator;
      }, []);
      setUsageData(formattedData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalTimeSpentToday = usageData.reduce((total, detail) => total + detail.timeSpent, 0);

  function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    if (seconds < 60) {
      return seconds + 's';
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return minutes + 'm ' + remainingSeconds + 's';
    } else {
      const hours = Math.floor(seconds / 3600);
      const remainingMinutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return hours + 'h ' + remainingMinutes + 'm ' + remainingSeconds + 's';
    }
  }

  const vibrantColors = [
    '#E57373', '#81C784', '#64B5F6', '#FFB74D', '#BA68C8', '#4DB6AC',
    '#FFD54F', '#4FC3F7', '#FF8A65', '#A1887F', '#90A4AE', '#DCE775',
    '#F06292', '#9575CD', '#FFF176', '#7986CB', '#E0E0E0', '#AED581',
    '#FFEE58', '#4DD0E1', '#FF7043', '#7986CB', '#F48FB1', '#B39DDB', '#FFCA28'
  ];

  const pieData = {
    labels: usageData.map(data => {
      try {
        const url = new URL(data.url);
        return url.hostname;
      } catch (error) {
        console.error('Invalid URL in usageData:', data.url);
        return 'Invalid URL';
      }
    }),
    datasets: [
      {
        data: usageData.map(data => data.timeSpent),
        backgroundColor: vibrantColors,
        hoverBackgroundColor: vibrantColors
      }
    ]
  };

  const websiteDetails = usageData.map(data => {
    try {
      const url = new URL(data.url);
      return {
        url: url.hostname,
        sessions: data.sessions,
        timeSpent: formatTime(data.timeSpent),
        percentage: ((data.timeSpent / totalTimeSpentToday) * 100).toFixed(2)
      };
    } catch (error) {
      console.error('Invalid URL in usageData:', data.url);
      return {
        url: 'Invalid URL',
        sessions: data.sessions,
        timeSpent: formatTime(data.timeSpent),
        percentage: ((data.timeSpent / totalTimeSpentToday) * 100).toFixed(2)
      };
    }
  });

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          generateLabels: function(chart) {
            const data = chart.data;
            return data.labels.map((label, i) => ({
              text: label,
              fillStyle: data.datasets[0].backgroundColor[i],
              hidden: false,
              index: i
            }));
          },
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const value = tooltipItem.raw; // raw value of the data point
            return formatTime(value);
          }
        }
      }
    }
  };
  

  return (
    <div className="dashboard-container">
      <div className="chart-container">
        <Pie data={pieData} options={options} />
      </div>
      <div className="dashboard-summary">
        <h3>Today</h3>
        <p>Total time: {formatTime(totalTimeSpentToday)}</p>
      </div>
      <div className="website-details">
        <h3>Sorting by Usage Time</h3>
        <table>
          <thead>
            <tr>
              <th>Website</th>
              <th>Sessions</th>
              <th>Time Spent</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {websiteDetails.map((detail, index) => (
              <tr key={index}>
                <td>{detail.url}</td>
                <td>{detail.sessions}</td>
                <td>{detail.timeSpent}</td>
                <td>{detail.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
