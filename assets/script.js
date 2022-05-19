$("#banner_skyscraper").empty();

var theHref = location.href;

    $("body #pageContent").before(`<div class="resources-commander-container"></div>`);
    $(document).find(".resources-commander-container").append(`<div id="officers" class="commander-container"></div>`);
    $(document).find(".resources-commander-container").append(`<div class="resources-container"></div>`);

    var $main_commander = $("#commandercomponent #officers > a");
    var $main_resources = $("#resourcesbarcomponent");

    $main_commander.each(function(i, el){
        if( i==0 ) {
            $("#commandercomponent #characterclass > a").clone().appendTo( $(document).find(".commander-container") );
        }
        $(el).clone().appendTo( $(document).find(".commander-container") );
    });
    $(document).find(".commander-container > a:first-child").addClass("characterclass-custom");
    $main_resources.clone().appendTo( $(document).find(".resources-container") );

    $("#commandercomponent #characterclass").hide();
    $main_commander.hide();
    $main_resources.hide();

$("#pageContent").append(`<div class="bg-filter-menu"></div>`);

$("#pageContent #left").append(`<button type="button" class="btn-close-swiped close-menu-left">✖</button>`);
$("#pageContent #right").append(`<button type="button" class="btn-close-swiped close-menu-right">✖</button>`);


$("#pageContent #leftMenu").append(`<button type="button" class="btn-close-swiped close-menu-left">✖</button>`);
$("#chat #pageContent #planetbarcomponent").append(`<button type="button" class="btn-close-swiped close-menu-right">✖</button>`);
$("#messages #pageContent #planetbarcomponent").append(`<button type="button" class="btn-close-swiped close-menu-right">✖</button>`);
$("#premium #pageContent #planetbarcomponent").append(`<button type="button" class="btn-close-swiped close-menu-right">✖</button>`);
$("#shop #pageContent #planetbarcomponent").append(`<button type="button" class="btn-close-swiped close-menu-right">✖</button>`);

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */
            $(document).find(".bg-filter-menu").addClass("opened");
            $("#pageContent #right").addClass("swiped");
            $("#pageContent #left").removeClass("swiped");

            $("#messages #planetbarcomponent").addClass("swiped");
            $("#chat #planetbarcomponent").addClass("swiped");
            $("#premium #planetbarcomponent").addClass("swiped");
            $("#shop #planetbarcomponent").addClass("swiped");
            $("#leftMenu").removeClass("swiped");

            if( $("#banner_skyscraper").children().length==0 ) {
                $("#pageContent #right").addClass("swiped-nogamead");
                $("#messages #planetbarcomponent").addClass("swiped-nogamead");
                $("#chat #planetbarcomponent").addClass("swiped-nogamead");
                $("#premium #planetbarcomponent").addClass("swiped-nogamead");
                $("#shop #planetbarcomponent").addClass("swiped-nogamead");
            }
        } else {
            /* left swipe */
            $(document).find(".bg-filter-menu").addClass("opened");
            $("#pageContent #left").addClass("swiped");
            $("#pageContent #right").removeClass("swiped");

            $("#leftMenu").addClass("swiped");
            $("#messages #planetbarcomponent").removeClass("swiped");
            $("#chat #planetbarcomponent").removeClass("swiped");
            $("#premium #planetbarcomponent").removeClass("swiped");
            $("#shop #planetbarcomponent").removeClass("swiped");
        }
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */
        } else {
            /* up swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

$(document).on("click", ".close-menu-left", function(e) {
    $("#pageContent #leftMenu").removeClass("swiped");
    $("#pageContent #left").removeClass("swiped");
    $(document).find(".bg-filter-menu").removeClass("opened");
});

$(document).on("click", ".close-menu-right", function(e) {
    $("#pageContent #right").removeClass("swiped");
    $("#messages #pageContent #planetbarcomponent").removeClass("swiped");
    $("#premium #pageContent #planetbarcomponent").removeClass("swiped");
    $("#shop #pageContent #planetbarcomponent").removeClass("swiped");
    $(document).find(".bg-filter-menu").removeClass("opened");
});

$(document).on("click", ".bg-filter-menu", function(e) {
    $(this).removeClass("opened");

    $("#pageContent #leftMenu").removeClass("swiped");
    $("#pageContent #left").removeClass("swiped");

    $("#pageContent #right").removeClass("swiped");
    $("#messages #pageContent #planetbarcomponent").removeClass("swiped");
    $("#premium #pageContent #planetbarcomponent").removeClass("swiped");
    $("#shop #pageContent #planetbarcomponent").removeClass("swiped");
});