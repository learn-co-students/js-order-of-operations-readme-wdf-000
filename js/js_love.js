// Functions here
function showJsLove() {
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
    console.log("I Love JavaScript");
  })
};

$(document).ready(function (){
  showJsLove();
});


// console.log(1);
// $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
//   // This is our success callback which is called automatically
//   console.log("Success");
// }).fail(function(response){
//   // We have to explicitly configure the fail/error callback for getJSON to handle it
//   console.log("Fail");
// });
// console.log(2);
