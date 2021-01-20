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

    populateSources()

    function populateSources() {
        // GET request for all sources
        $.ajax({
            type: "GET",
            url: "/api/sources",
        }).then((list) => {
            console.log(list);

            //loop over list array and append each item to the first navbar
            for (let i = 0; i < list.length; i++) {
                $("#pageSubmenu").append(`
                    <li class="listing">
                    <a href="/api/sources/${list[i].id}">
                        <p>${list[i].text}</p>
                    </a>
                    </li>`
                );
            }
        });
    }
});