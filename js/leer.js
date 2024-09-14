$(document).ready(function(){
  $(".thumbnail").click((event) => {
    // clear any current popup
    // note append will clone rather than move if there are several matching
    // elements
    $('body > .popup').appendTo($("#hidden-popups"));
    const name = $(event.target).closest('.thumbnail').get(0).id;
    const popup = $('#' + name + 'page');
    console.log(popup);
    popup.appendTo($('body'));
    popup.css({"opacity": 1, "z-index": "100"});
  });

  $(".close").click(function(){
    $(".popup").css({"opacity":"0", "z-index":"-10"});
    $('body > .popup').appendTo($("#hidden-popups"));
  });

  $(document).mouseup(function (e) {
      var container = $(".popup");

      if (!container.is(e.target)
          && container.has(e.target).length === 0)
      {
          container.css({"opacity":"0", "z-index":"-10"});
          $('body > .popup').appendTo($("#hidden-popups"));
      }
  });
});
