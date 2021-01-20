loadDishTemplate();
function loadDishTemplate() {
  //get recipe id number from url
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

      $.ajax({
        type: "GET",
        url: "/api/sources/" + dish.SourceId,
      }).then((src) => {
        document.querySelector("#show-source-title").innerText = src[0].text;
      });

      //load the number of stars in rating
      loadStars(dish.rating);
    });
  }

  function loadStars(id) {
    switch (id) {
      case 0:
        $("#star-rating").append(`
          <h4>Uh oh! Looks like this recipe hasn't been tested yet!</h4>
        `);
        break;
      case 1:
        $("#star-rating").append(`
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        `);
        break;
      case 2:
        $("#star-rating").append(`
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        `);
        break;
      case 3:
        $("#star-rating").append(`
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        `);
        break;
      case 4:
        $("#star-rating").append(`
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        `);
        break;
      case 5:
        $("#star-rating").append(`
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        `);
        break;
    }
  }
}
