import $ from "jquery";

$(window).on("resize", function() {
    if ($(window).width() < 1180) {
        $("#side-bar").addClass("side-bar-hidden");
        $("#nav-bar").addClass("nav-bar-large");
        $("#main-body").addClass("main-body-large");
    } else {
        $("#side-bar").removeClass("side-bar-hidden");
        $("#nav-bar").removeClass("nav-bar-large");
        $("#main-body").removeClass("main-body-large");
    }
});