$(function(){
  let notificationsEnabled=false;
  function showMessage(text){$("#message").stop(true,true).text(text).fadeIn().delay(1800).fadeOut();}
  $("#subscribe").on("click",function(){notificationsEnabled=true;$("#status").text("Notifications are enabled.");showMessage("Successfully subscribed!");});
  $("#unsubscribe").on("click",function(){notificationsEnabled=false;$("#status").text("Notifications are disabled.");showMessage("You have unsubscribed.");});
  // Delegated .on() handles remove buttons added now or later.
  $("#topics").on("click",".remove",function(){
    const topic=$(this).closest(".topic");
    // Detach this topic's click handler with .off() before removing the topic.
    topic.off("click").remove();showMessage("Subscription topic removed.");
  });
  $("#topics").on("click",".topic",function(){
    $(this).toggleClass("chosen");
  });
  $("#addTopic").on("click",function(){
    const name=$("#newTopic").val().trim();if(!name){alert("Enter a topic name.");return;}
    const newTopic=$("<div>").addClass("topic").text(name+" ");
    const removeButton=$("<button>").addClass("remove").text("Remove");
    newTopic.append(removeButton);$("#topics").append(newTopic);$("#newTopic").val("");
    // Delegated event handlers above automatically work for this new topic.
    showMessage("New topic added.");
  });
});