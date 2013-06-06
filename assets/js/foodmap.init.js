
var foodmap = foodmap || {};

// Run the show
(function() {

    new foodmap.Main();

    

    // old click events
    var $welcome = $("#welcome-container"),
        $body = $("body");

    $("#js-btn-menu").on("click", function() {
        $welcome.fadeOut();

        $body.toggleClass("menu-left");
        
        if ($body.hasClass("menu-left")){
            $(this).html("&raquo; Hide");
        } else {
            $(this).html("&laquo; Show");
        }
    });

    $("#js-btn-welcome, #js-close-welcome, #js-btn-reset").on("click", function() {
        $welcome.fadeToggle();
    });

    $("#js-btn-reset").on("click", function() {
        $(".tags .tag").removeClass("active");
    });

    $(".js-expand-container").on("click", function() {
        $("body").toggleClass("menu-bottom");
    });

})();
