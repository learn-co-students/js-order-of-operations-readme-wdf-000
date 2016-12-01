// Functions here
function showJsLove() {
  console.log("I")

  $.getJSON("https://api.github.com/repos/rails/rails/commits", function (data){
    console.log("Love");
    console.log("JavaScript");

/*
  }).fail(function(error){
    console.log(error);
  }).done(function(){
    console.log("JavaScript");
*/
  });

};

$(document).ready(function (){
  showJsLove();
});
