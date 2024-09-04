$(document).ready(function(){
  $("#bruja1").click(function(){
    $("#overlay").css({"opacity":"0.4", "z-index":"100"});
    $("#pictureframe").css("display", "inline-block");
    $(".popup").css("display", "none");
    $("#bruja1big").css("display", "inline-block");
    var imgUrl = $(this).data('rel');
    $("#bruja1big").html("<img src='" + imgUrl + "' alt='description' />");
  });

  $("#bruja2").click(function(){
    $("#overlay").css({"opacity":"0.4", "z-index":"100"});
    $("#pictureframe").css("display", "inline-block");
    $(".popup").css("display", "none");
    $("#bruja2big").css("display", "inline-block");
    var imgUrl = $(this).data('rel');
    $("#bruja2big").html("<img src='" + imgUrl + "' alt='description' />");
  });
  $("#bruja3").click(function(){
    $("#overlay").css({"opacity":"0.4", "z-index":"100"});
    $("#pictureframe").css("display", "inline-block");
    $(".popup").css("display", "none");
    $("#bruja3big").css("display", "inline-block");
    var imgUrl = $(this).data('rel');
    $("#bruja3big").html("<img src='" + imgUrl + "' alt='description' />");
  });
  $("#lepo").click(function(){
    $("#overlay").css({"opacity":"0.4", "z-index":"100"});
    $("#pictureframe").css("display", "inline-block");
    $(".popup").css("display", "none");
    $("#lepobig").css("display", "inline-block");
    var imgUrl = $(this).data('rel');
    $("#lepobig").html("<img src='" + imgUrl + "' alt='description' />");
  });
  $("#papas").click(function(){
    $("#overlay").css({"opacity":"0.4", "z-index":"100"});
    $("#pictureframe").css("display", "inline-block");
    $(".popup").css("display", "none");
    $("#papasbig").css("display", "inline-block");
    var imgUrl = $(this).data('rel');
    $("#papasbig").html("<img src='" + imgUrl + "' alt='description' />");
  });
  $("#demonios").click(function(){
    $("#overlay").css({"opacity":"0.4", "z-index":"100"});
    $("#pictureframe").css("display", "inline-block");
    $(".popup").css("display", "none");
    $("#demoniosbig").css("display", "inline-block");
    var imgUrl = $(this).data('rel');
    $("#demoniosbig").html("<img src='" + imgUrl + "' alt='description' />");
  });
  
});
$(document).mouseup(function (e)
{
    var container = $(".popup");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.css("display", "none");
	$("#pictureframe").css("display", "none");
	$("#overlay").css({"opacity":"0", "z-index":"-10"});
    }
});
