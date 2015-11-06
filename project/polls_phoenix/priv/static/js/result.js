(function($) {

  var data = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    }
  ];

  var ctx = $('#pollsCanvas')[0].getContext("2d");
  var myPieChart = new Chart(ctx).Pie(data);

})($);
