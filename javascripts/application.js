$(function() {
  var margin_left = parseInt($('img[class*="photo"]').parent().css('marginLeft'), 10),
      margin_top = parseInt($('img[class*="photo"]').parent().css('marginTop'), 10)
  
  //set initial absolute positions on the images, relative to parent containers
  $('img[class*="photo"]').each(function(index) {
    var position = $(this).parent().position()

    $(this).css({
      "position": "absolute",
      "left": position.left + margin_left, 
      "top": position.top + margin_top
    });
  });

  //if a small photo is clicked then make it bigger, and make the large photo smaller
  //if the large photo is clicked then make it smaller
  $('img[class*="photo"]').click(function() {
    var is_photo = $(this).hasClass('photo');
    
    remove_large_photo();
    if(is_photo){
      $(this).toggleClass('photo large_photo').css({"left": 200, "top": 0});
    }    
  });

  //helper function: if the large photo exists, make it smaller and reset the position
  function remove_large_photo() {
    if ($('.large_photo').length) {
      var position = $('.large_photo').parent().position()
      $('.large_photo').toggleClass('large_photo photo').css({
        "left": position.left + margin_left, 
        "top": position.top + margin_top
      });
    }
  }

});
