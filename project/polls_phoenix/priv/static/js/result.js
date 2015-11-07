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

  function displayDoughnut(data) {
    var ctx = $('#pollsCanvas')[0].getContext("2d");
    var myPieChart = new Chart(ctx).Pie(data);
  }

  return {
    getData: getData,
    displayDoughnut: displayDoughnut
  };

}($));
