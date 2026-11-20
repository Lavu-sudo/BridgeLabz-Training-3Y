$(function(){
  // Demo list of already registered email addresses; replace with server-side checking in a real app.
  const registeredEmails=["already@example.com","student@example.com"];
  function validateName(){
    const valid=$("#name").val().trim()!=="";
    $("#name").css("border",valid?"1px solid #aaa":"2px solid red");
    $("#nameError").text(valid?"":"Name is required.");return valid;
  }
  function validateEmail(){
    const value=$("#email").val().trim();
    const formatValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const unique=!registeredEmails.includes(value.toLowerCase());
    const valid=formatValid&&unique;
    $("#email").css("border",valid?"1px solid #aaa":"2px solid red");
    $("#emailError").text(!formatValid?"Enter a valid email address.":!unique?"This email is already registered.":"");
    return valid;
  }
  function validatePassword(){
    const valid=$("#password").val().length>=8;
    $("#password").css("border",valid?"1px solid #aaa":"2px solid red");
    $("#passwordError").text(valid?"":"Password must contain at least 8 characters.");return valid;
  }
  // Recheck each field as the user types so errors disappear when corrected.
  $("#name").on("input",validateName);
  $("#email").on("input",validateEmail);
  $("#password").on("input",validatePassword);
  $("#registrationForm").on("submit",function(event){
    event.preventDefault();
    const isValid=validateName()&&validateEmail()&&validatePassword();
    if(isValid){
      $("#success").text("Registration successful!");
      this.reset();$("input").css("border","1px solid #aaa");
    }else{$("#success").text("");}
  });
});