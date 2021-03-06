
var Vote = {

  clickYes: function(callback) {
    var _this = this;
    $("#vote_yes").click(function() {
      _this.hideDisplay(".yes_or_no");
      _this.showDisplay(".voted");
      callback();
    });
  },

  clickNo: function(callback) {
    var _this = this;
    $("#vote_no").click(function() {
      _this.hideDisplay(".yes_or_no");
      _this.showDisplay(".voted");
      callback();
    });
  },

  clickClear: function() {
      this.hideDisplay(".voted");
      this.showDisplay(".yes_or_no");
  },

  hideDisplay: function(select) {
    $(select).hide();
  },

  showDisplay: function(select) {
    $(select).show();
  }
}
