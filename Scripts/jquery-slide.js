$(document).ready(function () {
    SetCarousel();
    SetTimmer();
});

function SetCarousel() {
    $("#carousel #myimageContainer").first().addClass("selected");
}

function SetTimmer() {
    setInterval(showNext, 2000);
}

function showNext() {

    var sel = $("#carousel #myimageContainer.selected")
    sel.removeClass('selected');
            
    var nextImge = sel.next();

    var id = $(nextImge).attr('id');
    if (id != null) {
        nextImge.addClass('selected');
    }
    else {
        SetCarousel();
    }
}
