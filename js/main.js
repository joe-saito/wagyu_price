$(function(){
  $('#page-top').click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 300);
  })
})
