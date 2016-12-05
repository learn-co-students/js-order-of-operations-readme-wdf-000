// Functions here
function showJsLove() {
  console.log("I")
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
    console.log("JavaScript")
  }).fail(function(response){
    console.log("Fail")
  });
  console.log("Love")


};

$(document).ready(function (){
  showJsLove();
});
