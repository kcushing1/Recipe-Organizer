$(document).ready(function () {
  //load all recipes to page
  loadRecipes();
  function loadRecipes() {
    $.ajax({
      type: "GET",
      url: "/api/recipes",
    }).then((list) => {
      for (let i = 0; i < list.length; i++) {
        $("#load-all-recipes").append(`
      <li><a href="/recipes/${list[i].id}">${list[i].title}</a></li>
      `);
      }
    });
  }
});
