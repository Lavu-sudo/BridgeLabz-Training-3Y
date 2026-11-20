$(function(){
  // Choose a greeting from the visitor's local time.
  const hour=new Date().getHours();
  let greeting=hour<12?"Good Morning":hour<17?"Good Afternoon":"Good Evening";
  $("#greeting").text(greeting+", welcome to our website!");
  const quotes=["Small steps every day lead to big results.","Believe in yourself and keep moving forward.","Your future is created by what you do today."];
  $("#changeGreeting").on("click",function(){
    $("#greeting").text(quotes[Math.floor(Math.random()*quotes.length)]);
  });
  $("#toggleWelcome").on("click",function(){
    $("#welcome").toggle();
    $(this).text($("#welcome").is(":visible")?"Hide Welcome Message":"Show Welcome Message");
  });
  $("#greetingAlert").on("click",function(){alert($("#greeting").text());});
});