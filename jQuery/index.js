$("h1").css("color","red");
$("h1").css("font-size","200px");



$("h2").addClass("big-title");

$("h2").removeClass("big-title");

$("h2").addClass("big-title margin-50")

$("input").keypress(function(event) {
    $("h1").text(event.key);
})

$("h1").on("mouseover", function (){
    $("h1").css("color" , "purple")
    

})


