$(document).ready(function () {
  //onclick of sources dropdown, a list of sources is generated
  $("#sources-list").on("click", function (e) {
    e.preventDefault();
    getSources();
  });

  //retrieve sources list
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
});