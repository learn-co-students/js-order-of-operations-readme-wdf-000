// Functions here
var url = "https://api.github.com/repos/rails/rails/commits";

function showJsLove() {
  console.log("I");
  console.log("Love");
  $.getJSON(url,function(data){
    console.log("Javascript");
    });
    // .fail(function(error){
    //   alert("Something went wrong: " + error);
    // });
};

$(document).ready(function (){
  showJsLove();
});
