$(function(){
  const banners=$(".banner");let current=0;
  $("#hide").on("click",function(){banners.eq(current).hide();});
  $("#show").on("click",function(){banners.show();});
  $("#slideUp").on("click",function(){banners.slideUp();});
  $("#slideDown").on("click",function(){banners.slideDown();});
  $("#fadeOut").on("click",function(){banners.fadeOut(500);});
  $("#fadeIn").on("click",function(){banners.fadeIn(500);});
  // Rotate one visible banner at a time using fadeOut() and fadeIn().
  banners.hide().eq(0).show();
  setInterval(function(){
    banners.eq(current).fadeOut(400);
    current=(current+1)%banners.length;
    banners.eq(current).fadeIn(400);
  },5000);
});