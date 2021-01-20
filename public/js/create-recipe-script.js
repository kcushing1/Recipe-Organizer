$(document).ready(function () {
  //onclick of submit, compile recipe as info and send post request
  $("#create-new-recipe").on("click", (event) => {
    event.preventDefault();
    addNewRecipe();
  });

  function addNewRecipe() {
    //define the new recipe
    let newTitle = $("#new-title").val().trim();
    let newCategory = $("#FoodCategoryCreate").val();
    let newUrl = $("#new-url-pg").val();
    let newRating = $("#rate-recipe").val().trim();
    let newNotes = $("#recipe-notes").val();
    let sourceId = $("#number-source-id").val().trim();

    let newRecipe = {
      tite: newTitle,
      category: newCategory,
      url_pg: newUrl,
      rating: newRating,
      notes: newNotes,
      SourceId: parseInt(sourceId),
    };

    //POST the new recipe
    $.post("/api/recipes", newRecipe, (data) => {
      console.log(data);
    });
  }

  //prepare the sources list to be available option
  getSources();
  function getSources() {
    //GET list of sources
    $.ajax({
      type: "GET",
      url: "/api/sources",
    }).then((resp) => {
      for (let i = 0; i < resp.length; i++) {
        $("#insert-sources-list").append(`
      <p>${resp[i].id} ) ${resp[i].text}</p>
      <br>
      `);
      }
    });
  }
});
