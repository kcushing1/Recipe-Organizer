$(document).ready(function () {
  //load all recipes to page
  loadRecipes();
  function loadRecipes() {
    $.ajax({
      type: "GET",
      url: "/api/recipes",
    }).then((list) => {
      for (let i = 1; i < list.length; i++) {
        $("#load-all-recipes").append(`
      <li><a href="/api/recipes/${list[i].id}">${list[i].title}</a></li>
      `);
      }
    });
  }
});
