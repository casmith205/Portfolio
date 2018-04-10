$(document).ready(function(){
// When user clicks "show me adoptable dogs," run the following fuctions
$("#welcomeBtn").on("click", function(event){
  event.preventDefault();
  // Fade out the welcome overhang 
  $("#welcome").fadeOut();
  // Fade in the Nav Bar
  $(".navbar").fadeIn();
  // Fade in the about me section
  $("#main-content").fadeIn();
  }); 

});
