var Result = (function($) {

  var obj = null;

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

  function getObjOfDoughnut(data) {
    if( typeof $('#pollsCanvas')[0] != "undefined" ) {
      var ctx = $('#pollsCanvas')[0].getContext("2d");
      this.obj = new Chart(ctx).Pie(data);
    }
    return this.obj;
  }

  function updateDoughnut(yesOrNo, num) {
      if(yesOrNo == "yes") {
        var val = 0;
      } else if(yesOrNo == "no") {
        var val = 1;
      }
      if( typeof this.obj != "undefined" ) {
        this.obj.segments[val].value = num;
        this.obj.update();
      }
  }

  function removeDoughnut() {
    if( typeof this.obj != "undefined" ) {
      this.obj.removeData();
    }
  }

  return {
    getData: getData,
    getObjOfDoughnut: getObjOfDoughnut,
    updateDoughnut: updateDoughnut,
    removeDoughnut: removeDoughnut
  };

}($));
