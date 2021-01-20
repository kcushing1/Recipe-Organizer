$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Show 2nd sidebar

    $(".listing").click(function () {
        $(".recipe-list").css("visibility", "visible");
    });

    // Update sidebar

});