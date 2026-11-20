$(function(){
  let postNumber=5;
  $("#add").on("click",function(){
    postNumber++;$("#posts").append(`<article class="post"><h2>New Blog Post ${postNumber}</h2><p>This post was added dynamically.</p></article>`);
  });
  $("#featured").on("click",function(){
    $("#posts").prepend("<article class='post featured'><h2>Featured: Welcome to Our Blog</h2><p>Read our latest featured story.</p></article>");
  });
  $("#remove").on("click",function(){$("#posts .post").last().remove();});
  $("#tag").on("click",function(){
    const firstPost=$("#posts .post").first();
    // .before() and .after() place tags around the selected post.
    firstPost.before("<span class='tag'>NEW</span>");
    firstPost.after("<span class='tag'>EDITOR'S PICK</span>");
  });
  $("#highlight").on("click",function(){
    $("#posts .post").each(function(){
      if($(this).text().toLowerCase().includes("javascript"))$(this).css("background","#dcfce7");
    });
  });
});