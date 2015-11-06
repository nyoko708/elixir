
(function($) {

  var path = location.pathname;

  $("#dock li").each(function(index){
    $(this).removeClass("active");
    if($(this).children(":last").attr("href") == path) {
      $(this).addClass("active");
    }
  });

})($);
