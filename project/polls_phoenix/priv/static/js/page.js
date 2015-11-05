
(function($) {

  var path = location.pathname;
  var count = 0;

  $("#dock li").each(function(index){
    $(this).removeClass("active");
    if($(this).children(":last").attr("href") == path) {
      $(this).addClass("active");
    }
  });

})($);
