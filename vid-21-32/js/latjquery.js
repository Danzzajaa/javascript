$( document ).ready(function() {
    console.log( "siap" );
})

$(function () {
    $("#isi").html("<h1>Belajar JQuery</h1>");

    $("button").click(function (e) { 
        e.preventDefault();
        alert("belajar js");
    });

    $("#isi").mouseleave(function () { 
        alert("mouse Leave");
        console.log("mouse");
    });
})