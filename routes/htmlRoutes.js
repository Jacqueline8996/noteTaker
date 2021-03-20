
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");




module.exports = function(app) {

    //gets notes
    app.get("/notes", (req, res) => {

        // app.use(express.static(path.join(__dirname, 'public')));
        //retreivee notes html
        return res.sendFile(path.join(__dirname,"../public/notes.html"));
        // return res.sendFile(path.join(__dirname,"../public/notes.html"));
    });

     //if * is after words then that means it will be directed to out home page
     app.get("*", (req, res) => {

        return res.sendFile(path.join(__dirname,"../public/index.html"));

        // console.log("my path is ", path.join(__dirname, "./public/index.html"));
    });
    
};