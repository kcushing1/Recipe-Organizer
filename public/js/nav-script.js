$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    populateSources()

    function populateSources() {
        // GET request for all sources
        $.ajax({
            type: "GET",
            url: "/api/sources",
        }).then((sources) => {
            // Loop over sources array and append each item to the first navbar
            for (let i = 0; i < sources.length; i++) {
                $("#pageSubmenu").append(`
                    <li class="listing" id="${sources[i].id}">
                        <a href="#">${sources[i].text}</a>
                    </li>`
                );
            }
            // Add click listener to all categories/sources nested sidebar
            $(".listing").click(function () {
                // Grab sourceId or category based on item clicked (and give other falsy value)
                const sourceId = this.id ? this.id : 0
                const category = this.id ? '' : this.querySelector("a").textContent

                // Repopulate list with appropriate recipes
                listNavRecipes(sourceId, category);
            });
        });
    }

    function listNavRecipes(sourceId, category) {
        // Define query URL based on parameters
        const queryURL = sourceId ? `api/recipes/source/${sourceId}`
            : `/api/recipes/category/${category}`

        // GET request for filtered recipes
        $.ajax({
            type: "GET",
            url: queryURL,
        }).then((recipes) => {
            // Clear recipe list
            $(".nav-recipe-list").empty()
            // Loop over recipes array and append each item to list
            for (let i = 0; i < recipes.length; i++) {
                $(".nav-recipe-list").append(`
                    <li class="listing">
                        <a href="/recipes/${recipes[i].id}">
                            <h3>${recipes[i].title}</h3>
                            <p>${recipes[i].category}</p>
                        </a>
                    </li>`
                );
            }
            // Show nested sidebar
            $(".recipe-list").css("visibility", "visible");
        });
    }
});