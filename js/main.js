var master_head = $(".masthead");
var fixed_menu = $(".fixed.menu");
var sidebar = $(".ui.sidebar");

master_head.visibility({
  once: false,
  onBottomPassed: function() {
    fixed_menu.transition("fade in");
  },
  onBottomPassedReverse: function() {
    fixed_menu.transition("fade out");
  }
});

sidebar.sidebar("attach events", ".toc.item");
