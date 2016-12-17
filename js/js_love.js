// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", ()=>{
    console.log("JavaScript");
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
