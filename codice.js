google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

const prezzoBenzina = 2;
function drawChart() {
    var km = document.getElementById("km").value;
    var kmXl = document.getElementById("kmXl").value;
    var prezzoIniziale = document.getElementById("initPrice").value;
    var anni = document.getElementById("year").value;
  /*var data = google.visualization.arrayToDataTable([
    ['Year', 'prova', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]  
    ]);*/
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'anni');
    data.addColumn('number','spesa');
    data.addRows([
        ['0',Number(prezzoIniziale)],
        [anni,Number(prezzoIniziale)+ Number((Number(km) * Number(anni))/Number(kmXl)*prezzoBenzina)]
    ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}