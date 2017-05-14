  var panelLinks = {
	"1" : "beautyBeast.jpg",
	"2" : "generations.jpg",
	"3" : "unlocked.jpg",
	"4" : "bossBaby.jpg"
  };	

$(document).ready(function() {
  $("#1, #2, #3, #4").mouseenter(function() {
    $("#img").attr("src", panelLinks[this.id]);
  });
  $(".panel").mouseleave(function() {
    $("#img").attr("src", "http://placehold.it/350x300");
  });
});