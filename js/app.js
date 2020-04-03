new Chart(document.getElementById('animationChart'), {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(15, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(15, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,

        }]
    },
    options: {
        legend: {
            display: false
        },
        animation: {
            duration: 2000,
            easing: 'easeInQuad',
        }
    }
});

new Chart(document.getElementById('advancedChart'), {
    type: 'bar',
    data: {
        labels: ['1900', '1950', '2000'],
        datasets: [{
                label: 'Population (billions)',
                data: ['1.65', '2.50', '6.14'],
                backgroundColor: '#3e95cd'
            },
            {
                label: 'Cats (billions)',
                data: ['2.7', '5.9', '15.45'],
                backgroundColor: '#8e5ea2'

            },
            {
                label: 'Air pollution',
                type: 'line',
                fill: false,
                data: ['3.89', '5.7', '10.67'],
                borderColor: '#e8c3b9',
                backgroundColor: '#e8c3b9'

            }
        ]
    }
});

var updatingChart = new Chart(document.getElementById('updatingDataChart'), {
    type: 'horizontalBar',
    data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [{
            label: 'GHOSTS',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [254, 654, 734, 784, 433]
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Predicted amount of ghosts in 2050'
        }
    }

});
//Adding data nd label to existing chart
function addData(chart, label, data, backgroundColor) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data);
    chart.data.datasets[0].backgroundColor.push(backgroundColor);
    chart.update();
}

// setTimeout(function() {
//     addData(updatingChart, 'Antarctica', 97, '#ff5733');

// }, 1000);

//removing data and label from exciting chart
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets[0].data.pop();

    chart.update();
};

// setTimeout(function() {
//     removeData(updatingChart);
// }, 3000);

function updateAllData(chart, data) {
    chart.data.datasets[0].data = data;
    chart.update();
}



function updateConfig(chart, title) {
    chart.options.title.text = title;
    chart.update();
}

setTimeout(function() {
    updateAllData(updatingChart, [542, 600, 780, 700, 410])
    updateConfig(updatingChart, 'CONFIRMED amount of ghosts in 2050');
}, 3000);