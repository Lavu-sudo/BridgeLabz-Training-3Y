$(function(){
  // Product click highlights the selected product; the favorite button is handled separately.
  $(".product").on("click",function(e){
    if($(e.target).closest(".favorite").length)return;
    $(".product").removeClass("active");$(this).addClass("active");
    if($(this).attr("data-stock")==="out")alert("Sorry, this product is currently out of stock.");
  });
  $(".product").hover(function(){$(this).find(".details").stop(true,true).slideDown(150);},
                      function(){$(this).find(".details").stop(true,true).slideUp(150);});
  $(".favorite").on("click",function(e){
    e.stopPropagation();$(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected")?"♥":"♡");
  });
});