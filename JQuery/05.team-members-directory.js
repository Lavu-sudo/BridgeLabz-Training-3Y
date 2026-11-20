$(function(){
  // A manager click highlights direct reports in the same team.
  $(".manager").on("click",function(){$(this).siblings(".report").toggleClass("highlight");});
  // .next() gets the contact information placed immediately after the employee name.
  $(".employee").hover(function(){$(this).children(".contact").show();},
                       function(){$(this).children(".contact").hide();});
  // .children() selects all direct team members within the chosen department.
  $(".deptTitle").on("click",function(){$(this).next(".team").children(".employee").css("background","#dbeafe");});
  $("#random").on("click",function(){
    const employees=$(".employee.report"),chosen=employees.eq(Math.floor(Math.random()*employees.length));
    $(".employee").removeClass("highlight");chosen.siblings(".report").addBack().addClass("highlight");
  });
  // .parent() and .find() are used to collapse or expand all team members.
  $("#collapse").on("click",function(){
    $(".team").each(function(){$(this).parent().find(".employee").toggle();});
  });
});