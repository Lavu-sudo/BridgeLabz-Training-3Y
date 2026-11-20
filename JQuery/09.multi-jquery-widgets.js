// Version 1 controls carousel rotation and active widget highlighting.
jQueryV1(function($v1){
  const widgets=$v1("#carousel .widget");let activeIndex=0;
  function activateWidget(index){widgets.removeClass("active").eq(index).addClass("active");}
  activateWidget(activeIndex);
  setInterval(function(){activeIndex=(activeIndex+1)%widgets.length;activateWidget(activeIndex);},3000);
  widgets.on("click",function(){activeIndex=widgets.index(this);activateWidget(activeIndex);});
});

// Version 2 controls notification modal and hover tooltips.
jQuery(function($v2){
  $v2("#notify").on("click",function(){$v2("#notificationModal").fadeIn(200).css("display","flex");});
  $v2("#closeModal,#notificationModal").on("click",function(){$v2("#notificationModal").fadeOut(200);});
  $v2(".modal-box").on("click",function(event){event.stopPropagation();});
  // Add a small tooltip using the title attribute on widget hover.
  $v2(".widget").on("mouseenter",function(){
    const message=$v2(this).attr("title");
    $v2("<span class='tooltip'>"+message+"</span>").appendTo(this).css({display:"block",color:"#2563eb",marginTop:"8px"});
  }).on("mouseleave",function(){$v2(this).find(".tooltip").remove();});
});