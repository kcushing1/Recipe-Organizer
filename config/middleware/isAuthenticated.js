// Middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
        return next();
    }

    // If not logged in, redirect
    return res.redirect("/login");
};
