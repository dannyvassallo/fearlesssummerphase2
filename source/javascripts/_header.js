function borderHeight(){
  var woodH = ($('.wood').height())+50;
  $('.upanddown').css({'height':woodH});
}

$(function(){
  borderHeight();
});

$(window).resize(function(){
  borderHeight();
});
