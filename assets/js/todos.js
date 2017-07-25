// Check off specific todos by clicking 

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
}); 

$("input[type='text']").keypress(function(event){
    // console.log("Key Press!");
    if(event.which === 13){
        // console.log("You hit enter!");
        // console.log($(this).val());
        
        // Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to ul
        // $("ul").append("<li>THIS IS A NEW LI THAT WE APPENDED TO THIS UL <li>");
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }
});
