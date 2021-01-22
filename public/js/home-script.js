$(document).ready(function () {
    //populate the nested navbar with recipes
    //first, do get request all
    //then loop over array and append
    //max number? first ten?
    listNavRecipes();

    function listNavRecipes() {
        //GET request all recipes
        $.ajax({
            type: "GET",
            url: "/api/recipes",
        }).then((list) => {
            //loop over list array and append each item to the nested navbar
            for (let i = 0; i < list.length; i++) {
                $(".nav-recipe-list").append(`
                    <li class="listing">
                    <a href="/api/recipes/${list[i].id}">
                        <h3>${list[i].title}</h3>
                        <p>${list[i].category}</p>
                    </a>
                    </li>`
                );
            }
        });
    }
});
