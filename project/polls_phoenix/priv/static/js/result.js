var result = (function($) {

  function getData(y, n) {
    var data = [
      {
        value: y,
        color:"#46BFBD",
        highlight: "#5AD3D1",
        label: "はい"
      },
      {
        value: n,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "いいえ"
      }
    ];

    return data;
  }

  function getOption() {
    return {
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    }
  }

  function displayDoughnut(data) {
    if( typeof $('#pollsCanvas')[0] != "undefined" ) {
      var ctx = $('#pollsCanvas')[0].getContext("2d");
      var myPieChart = new Chart(ctx).Pie(data);
    }
  }

  return {
    getData: getData,
    displayDoughnut: displayDoughnut
  };

}($));
