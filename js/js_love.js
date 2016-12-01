// Functions here
function showJsLove() {
  console.log("I");

  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
    // This is our success callback which is called automatically
    console.log("JavaScript");
  })

  console.log("Love");

};

$(document).ready(function (){
  showJsLove();
});
