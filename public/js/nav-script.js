var toggleNavbar = document.getElementById(".listing")
var recipeList = document.getElementById(".recipe-list")

$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

 
});

$(recipeList).click(function(){
    $(this).toggleClass(".recipe-list");
});


