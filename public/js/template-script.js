loadDishTemplate();
function loadDishTemplate() {
  function retrieveRecipe() {
    const url = document.URL;
    const dishId = url.split("/").pop();
    return dishId;
  }

  let dishIdNum = retrieveRecipe();
  loadTemplate(dishIdNum);

  function loadTemplate(num) {
    $.ajax({
      type: "GET",
      url: "/api/recipes/" + num,
    }).then((dish) => {
      let sourceName = getSourceName(dish.SourceId);

      function getSourceName(id) {
        $.ajax({
          type: "GET",
          url: "/api/sources/" + id,
        }).then((resp) => {
          const name = resp[0].text;
          console.log("getSourceName " + name);
          document.querySelector("#show-source-title").innerHTML = `<strong>Source: </strong>${name}`;
        });
      }

      document.querySelector("#recipe-title").innerText = dish.title;
      document.querySelector("#show-category").innerText = `(${dish.category})`;
      const stars = document.querySelector("#rating").querySelectorAll("span")
      for (let i = 4; i >= dish.rating; i--) {
        stars[i].classList.add("checked")
      }
      document.querySelector("#show-source-title").innerText = dish.title;
      document.querySelector("#show-source-url-pg").innerHTML = `<a target="_blank" href="${dish.url_pg}">${dish.url_pg}</a>`;
      document.querySelector("#show-recipe-notes").innerText = dish.notes || "(No Notes)";
      retrievePhoto(dish.title)
    });
  }

  function retrievePhoto(searchTerm) {
    const query = searchTerm.replace(" ", "+")
    const orientation = "landscape"; //landscape, squarish or portrait
    const accessKey = "EIT2adCdgloFexAkgFXyPWawzje8PHXZogwG4Q7Mffg";
    let queryUrl = "https://api.unsplash.com/search/photos/?per_page=1&content_filter=high"
    queryUrl += `&orientation=${orientation}`
    queryUrl += `&query=${query}`
    queryUrl += `&client_id=${accessKey}`;

    $.ajax({
      url: queryUrl,
      type: "GET"
    }).then(function (data) {
      let html = `<img src="${data.results[0].urls.small}">`;
      $("#image").html(html);
    });
  }
}
