$(document).ready(function(){

if ($(window).width() > 600) {

//Exhibitions List: Einträge mit enstprechendem html ersetzen
var currentID = this.id;
$(".exlist").on("click", function(event) {
  event.preventDefault();
$(".leftreplace").load(this.id + ".html .container").css("display", "inline").scrollTop( 0 );
$(".x").css("display", "inline");
$("#left").css("overflow", "hidden");
});

//Work List: Einträge mit enstprechendem html ersetzen
var currentWork = this.id;
$(".worklist").on("click", function(event) {
  event.preventDefault();
$(".rightreplace").load(this.id + ".html .container").css("display", "inline").scrollTop( 0 );
$(".x2").css("display", "inline");
$("#right").css("overflow", "hidden");
});


$(".x").on("click", function() {
$(".leftreplace").css("display", "none");
$(".x").css("display", "none");
$("#left").css("overflow", "scroll");
$(".work h2").removeClass("active");
});

$(".x2").on("click", function() {
$(".rightreplace").css("display", "none");
$(".x2").css("display", "none");
$("#right").css("overflow", "scroll");
});

}

$('.work h2').click(function(){
  $(".work h2").removeClass("active");
    $(this).addClass("active");
});

  });

  $(document).keydown(function(e) {
    if (e.keyCode === 27){

      $(".leftreplace").css("display", "none");
      $(".x").css("display", "none");
      $("#left").css("overflow", "scroll");
      $(".rightreplace").css("display", "none");
      $(".x2").css("display", "none");
      $("#right").css("overflow", "scroll");
      $(".work h2").removeClass("active");

    }  // esc
  });
