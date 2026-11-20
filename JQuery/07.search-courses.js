$(function(){
  const courseCards=$(".course");
  $("#search").on("keyup",function(){
    const term=$(this).val().toLowerCase().trim();let count=0;
    courseCards.each(function(){
      const original=$(this).text();
      // Clear old highlighting before checking the current search term.
      $(this).text(original).show();
      if(!term){count++;return;}
      const position=original.toLowerCase().indexOf(term);
      if(position!==-1){
        count++;
        const before=original.slice(0,position),matched=original.slice(position,position+term.length),after=original.slice(position+term.length);
        $(this).html(document.createTextNode(before).text()+"<span class='match'></span>");
        $(this).find(".match").text(matched).after(document.createTextNode(after));
        $(this).show().css("border","2px solid #16a34a");
      }else{$(this).hide().css("border","");}
    });
    $("#count").text("Matched courses: "+count);
  });
  $("#clear").on("click",function(){$("#search").val("").trigger("keyup");});
});