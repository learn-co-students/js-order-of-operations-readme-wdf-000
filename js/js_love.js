// Functions here
function showJsLove() {
  console.log('I');

  $.getJSON('https://api.github.com/repos/rails/rails/commits', function(response){
    // console.log(response[0]["author"]["login"])
    console.log('Javascript');
  });
  // .fail(function(response){
  //   console.log('Javascript');
  // });
    console.log('Love');
};

$(document).ready(function (){
  showJsLove();
});
