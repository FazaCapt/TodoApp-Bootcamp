// Check off specific todos by clicking 

$("li").click(function() {
    $(this).toggleClass("completed");
})

// Click on X to delete Todo
$("span").click(function(event){
    // alert("clicked on a span");
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
}); 

// Cara yang salah, cz akan menampilkan banyak sekali alert

/*

$("ul").click(function(){
    alert("clicked on a ul");
});

$("#container").click(function(){
    alert("clicked on a container div");
});

$("body").click(function(){
    alert("clicked on a body");
});

*/