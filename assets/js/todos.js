// Check off specific todos by clicking 

/*
$("li").click(function(){
    // alert("Clicked Li");
    // $("li").css("color", "gray"); // Kalo pake cara ini sekali di klik jadi semua yang berubah
    $(this).css("color", "gray"); // cuma yang li yang di click aja yang berubah
    $(this).css("text-decoration", "line-through");
});

*/

// cara lain supaya menjadi single line dan rapih

/*
$("li").click(function(){
    // if li is gray
    if($(this).css("color") === "rgb(128, 128, 128)"){
        // turn it black
         $(this).css({
        color: "black",
        textDecoration: "none"
    });
    }
    // else
    else {
        // turn it gray
    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
    }
        
});

*/

$("li").click(function() {
    $(this).toggleClass("completed");
})