$(document).ready(function(){
  $("#bobada").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#bobadapage").css({"opacity":"1", "z-index":"100"});
  });
  $("#playa").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#playapage").css({"opacity":"1", "z-index":"100"});
  });
  $("#horripeludo").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#horripeludopage").css({"opacity":"1", "z-index":"100"});
  });
  $("#famosa").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#famosapage").css({"opacity":"1", "z-index":"100"});
  });
  $("#hadas").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#hadaspage").css({"opacity":"1", "z-index":"100"});
  });
  $("#bruja").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#brujapage").css({"opacity":"1", "z-index":"100"});
  });
  $("#demonios").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#demoniospage").css({"opacity":"1", "z-index":"100"});
  });
  $("#rollitos").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#rollitospage").css({"opacity":"1", "z-index":"100"});
  });
  $("#chis").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#chispage").css({"opacity":"1", "z-index":"100"});
  });
  $("#abuelo").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#abuelopage").css({"opacity":"1", "z-index":"100"});
  });
  $("#cuchicuchis").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#cuchicuchispage").css({"opacity":"1", "z-index":"100"});
  });
  $("#papas").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#papaspage").css({"opacity":"1", "z-index":"100"});
  });
  $("#sombra").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#sombrapage").css({"opacity":"1", "z-index":"100"});
  });
  $("#pollos").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#pollospage").css({"opacity":"1", "z-index":"100"});
  });
  $("#aura").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#aurapage").css({"opacity":"1", "z-index":"100"});
  });
  $("#gruta").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#grutapage").css({"opacity":"1", "z-index":"100"});
  });
  $("#companias").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#companiaspage").css({"opacity":"1", "z-index":"100"});
  });
  $("#galli").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#gallipage").css({"opacity":"1", "z-index":"100"});
  });
  $("#paris").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#parispage").css({"opacity":"1", "z-index":"100"});
  });
  $("#maripopis").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $("#maripopispage").css({"opacity":"1", "z-index":"100"});
  });
  $(".close").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
  });

$(document).mouseup(function (e)
{
    var container = $(".popup");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.css({"opacity":"0", "z-index":"-10"});
    }
});
});
