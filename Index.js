// script.js
$(document).ready(function () {
    $("nav a").on("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $("#contenido").load(target + ".html");
    });
});
