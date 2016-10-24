// Functions here
function showJsLove() {
  console.log("I");
  var url = "https://api.github.com/repos/rails/rails/commits";
  $.get(url, function(response) {
    console.log("JavaScript");
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
