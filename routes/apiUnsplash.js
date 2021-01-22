const axios = require('axios');

module.exports = function (app) {
    // Call Unsplash API 
    app.get("/api/unsplash/:query", (req, res) => {
        // Build query URL from requested query using private access key
        let queryUrl = `https://api.unsplash.com/search/photos/?per_page=1&content_filter=high&orientation=landscape`;
        queryUrl += `&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
        queryUrl += `&query=${req.params.query}`;

        const getData = async (url) => {
            try {
                const response = await axios.get(url);
                const data = response.data
                // Send data to client
                res.json(data)
            } catch (error) {
                console.log(error);
            }
        }
        getData(queryUrl)
    });
};
