$(function(){
  // Click a question to show or hide only its answer.
  $(".question").on("click",function(){$(this).next(".answer").slideToggle();});
  $(".question").hover(function(){$(this).css("color","#dc2626");},
                       function(){$(this).css("color","#1e3a8a");});
  // Double-click any question to close every answer.
  $(".question").on("dblclick",function(){$(".answer").slideUp();});
  $(".answer input").on("focus",function(){
    $(this).closest(".item").find(".question").css("background","#fef3c7");
  }).on("blur",function(){
    $(this).closest(".item").find(".question").css("background","");
  });
});