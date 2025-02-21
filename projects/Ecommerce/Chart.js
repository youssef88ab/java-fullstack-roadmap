const xValues = ['Jan','Fev','Mar','Apr','May','Jun','Jul','Aug','Oct','Sep','Nov','Dec'];
const yValues = [200,400,550,600,300,200,250,230,500,600,400,600];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
        }]
    },
    options: {
        legend: {display: false},
        scales: {
        yAxes: [{ticks: {min: 0, max:800}}],
        }
    }
    });