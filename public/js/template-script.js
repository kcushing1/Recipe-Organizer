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
      document.querySelector("#recipe-title").innerText = dish.title;
      document.querySelector("#rate-number").innerText = dish.rating;
      document.querySelector("#show-category").innerText = dish.category;
      document.querySelector("#show-source-url-pg").innerText = dish.url_pg;
      document.querySelector("#show-recipe-notes").innerText = dish.notes;
    });
  }

  getSourceName(dishIdNum);
  function getSourceName(id) {
    $.ajax({
      type: "GET",
      url: "/api/sources/" + id,
    }).then((resp) => {
      const name = resp[0].text;
      console.log("getSourceName " + name);
      document.querySelector("#show-source-title").innerText = name;
    });
  }
}
