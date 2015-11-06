(function($){

  $("#vote_yes").click(function() {
    hideDisplay(".yes_or_no");
    showDisplay(".voted");
  });

  $("#vote_no").click(function() {
    hideDisplay(".yes_or_no");
    showDisplay(".voted");
  });

  function hideDisplay(select) {
    $(select).hide();
  }

  function showDisplay(select) {
    $(select).show();
  }

})($);

