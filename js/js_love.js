// Functions here
function showJsLove() {
  console.log("I");

  $.getJSON('https://api.github.com/repos/rails/rails/commits', function(response) {
    console.log("Success");
  });
  console.log("Love");
  console.log("Javascript");
};

$(document).ready(function (){
  showJsLove();
});
