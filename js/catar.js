$(function(){
  $(".page").bind("resize", adjust_bg_height);

  $(".piece-button").click(function() {
    var $target = $("#" + $(this).data('target'));

    $(".none-selected").hide();
    $(".piece").css({"display":"none", "opacity":"0"});
    $(".piece-button").removeClass("piece-button--selected");

    $target.css({"display":"block", "opacity":"1"});
    $target.data('selected', true);
    $(this).addClass("piece-button--selected");
    $(".stretcher").css("max-height","max-content");

  });
});
