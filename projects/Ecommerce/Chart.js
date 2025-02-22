// Line chart with updated Chart.js syntax
const xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const yValues = [200, 400, 550, 600, 300, 200, 250, 230, 500, 600, 400, 600];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Sales Trend',  // Add label for clarity
      fill: false,
      borderColor: "rgba(0,0,255,1.0)",
      backgroundColor: "rgba(0,0,255,0.1)",
      data: yValues,
      tension: 0.1 // Change from lineTension to tension
    }]
  },
  options: {
    responsive: true, // Ensure responsiveness
    plugins: {
      legend: { 
        display: false
      }
    },
    scales: {
      y: {
        min: 0,
        max: 800,
      }
    }
  }
});

const categories = ["Electronics", "Fashion", "Furniture", "Sports", "Toys"];
const salesByCategory = [120, 90, 50, 30, 80];
const categoryColors = [
  "#6A5ACD", // Electronics
  "#FF69B4", // Fashion
  "#2E8B57", // Furniture
  "#FFD700", // Sports
  "#FF6347"  // Toys
];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: categories,
    datasets: [{
      backgroundColor: categoryColors,
      data: salesByCategory
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales by Category"
      },
      legend: {
        display: true,
        position: 'bottom',  // Place the legend (nations) at the bottom
        labels: {
          boxWidth: 20,  // Control size of the legend box
          padding: 15     // Control spacing between legend items
        }
      }
    },
    aspectRatio: 0.8,  // Increase height of the chart
  }
});
