// Functions here
function showJsLove() {
};

$(document).ready(function (){
  showJsLove();
});


function showJsLove() {
  console.log("I");

  // console.log($.get("https://api.github.com/repos/rails/rails/commits"));

  $.getJSON("https://api.github.com/repos/rails/rails/commits");

  console.log("Love");

  console.log("Javascript");
}
