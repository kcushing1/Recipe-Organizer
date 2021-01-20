    function retrievePhoto () {
        //const query = recipe.title; // from above
        let query = document.getElementById("title").value;
        //const imageWidth = 300;
        //const imageHeight = 200;
        const orientation = "landscape"; //landscape, squarish or portrait
        const accessKey = "EIT2adCdgloFexAkgFXyPWawzje8PHXZogwG4Q7Mffg";
        
        const queryUrl = `https://api.unsplash.com/search/photos/?per_page=1&content_filter=high&orientation=${orientation}&query=${query}&client_id=${accessKey}`;

        fetch(queryUrl)
            .then (function(data) {
                //console.log (data);
                return data.json();
            })
            .then(function(data) {
                console.log ("*** data: ****"+data);

                data.results.forEach(photo => {
                    let result = `
                        <img src="${photo.urls.regular}">
                    `;
                    
                    $("#image").html(result);
                    // .append for multiple photos?
                });
                
            });
        
    }




