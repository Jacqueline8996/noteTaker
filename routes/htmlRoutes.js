
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");




module.exports = function (app) {

    //if * is after words then that means it will be directed to out home page

    app.get("*", (req, res) => {
     return res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    //gets notes
    app.get("/notes", (req, res) => {
  
     //retreivee notes
      return res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
  
  };