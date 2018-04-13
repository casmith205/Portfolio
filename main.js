$(document).ready(function(){
// When user clicks "show me adoptable dogs," run the following fuctions
$("#welcomeBtn").on("click", function(event){
  event.preventDefault();
  // Fade out the welcome overhang 
  $("#welcome").fadeOut(500);
  // Fade in the Nav Bar
  $(".navbar").fadeIn(2000);
  // Fade in the about me section
  $("#main-content").fadeIn(2000);
  }); 

});
