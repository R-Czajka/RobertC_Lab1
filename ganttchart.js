 google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['P1', 'Initiation', new Date(2022, 0, 10), new Date(2022, 0, 31), null,  25,  null],
        ['P2', 'Planning', new Date(2022, 0, 31),new Date(2022, 1, 14), null, 25, 'P1'],
        ['P3', 'Execution', new Date(2022, 1, 14), new Date(2022, 1, 31),null, 20, 'P2'],
        ['P4', 'Closing', new Date(2022, 1, 31), new Date(2022, 2, 14),null, 25, 'P3'],
        ['P5', 'Evaluation', new Date(2022, 2, 14), new Date(2022, 2, 31),null, 25, 'P4']
      ]);

      var options = {
        height: 275
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }