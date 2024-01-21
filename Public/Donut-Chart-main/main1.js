const chartData = {
    labels: ["High", "Medium", "Low"],
    data: [1.6,22.9,75.5],
  };
  
  const myChart = document.querySelector(".my-chart-1");
  const ul = document.querySelector(".programming-stats .details ul");
  
  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 2.5,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl = () => {
    chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
      ul.appendChild(li);
    });
  };
  
  populateUl();
  