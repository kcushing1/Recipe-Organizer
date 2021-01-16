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

    //may need to parse int rating, depending on data type from input form
    let newRating = $("#rate-recipe").val();

    let newNotes = $("#recipe-notes").val();

    //true/false value, tbd
    let ifTested = true;

    //retrieve the source id from the selected source
    let chosenSource = $("#source-options").val();
    let sourceId = findSourceId(chosenSource);

    let newRecipe = {
      tite: newTitle,
      category: newCategory,
      url_pg: newUrl,
      rating: newRating,
      notes: newNotes,
      tested: ifTested,
      SourceId: sourceId,
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
      console.log(resp);
      appendSourceOptions();

      //create sources array and return that array so user can select from list
      function getSourcesArr(data) {
        let sourceArr = [];
        for (let i = 0; i < resp.length; i++) {
          sourceArr.push(data[i].text);
        }
        return sourceArr;
      }

      //append array as options on page
      function appendSourceOptions() {
        let sourcesArr = getSourcesArr(resp.body);
        for (let i = 0; i < sourcesArr; i++) {
          $("#source-options").append(`
          <option>${sourcesArr[i].text}</option>
        `);
        }
      }
    });
  }

  //retrieve the id from the source that was selected
  function findSourceId(source) {
    let findByTitle = $("#source-options").val();

    //ajax request
    $.get("/api/sources/:" + findByTitle, (data) => {
      console.log(data);
      return data.id;
    });
  }
});
