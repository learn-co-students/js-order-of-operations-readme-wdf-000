// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response) {
    console.log("Javascript");
    return response
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
