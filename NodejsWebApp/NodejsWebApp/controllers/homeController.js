// container for the various request types for the home page

(function (homeController) {

    var data = require("../data");

    homeController.init = function (app) {
        app.get("/", function (req, res) {         

            data.getNoteCategories(function (err, results) {
                console.log(err);
                res.render("index", { title: "Express + Vash", error: err, categories: results });
            });

        });

    };

    }
)(module.exports);