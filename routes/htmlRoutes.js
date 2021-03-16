  
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");



module.exports = function (app) {

    app.get("*", (req, res) => {
     return res.sendFile(path.join(__dirname, "../index.html"));
    });
    
    //gets notes
    app.get("/notes", (req, res) => {
  
     //retreivee notes
      return res.sendFile(path.join(__dirname, "../notes.html"));
    });
  
  };