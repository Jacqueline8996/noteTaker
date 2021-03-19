//require the old data
var mynotes = require("../db/db.json");
const fs =require("fs")

module.exports = function(app) {
  
    // get request for the notes
  
    app.get("/api/notes", function(req, res) {
        return res.json(mynotes);
    });
  

    // post notes 
  
    app.post("/api/notes", function(req, res) {
   
        var newNote = req.body;
        mynotes.push(newNote);
        res.json(mynotes);
    });
  
    app.get("/api/note/:id", function(req, res) {
        var chosen = req.params.character;
      
        console.log(chosen);
      
        for (var i = 0; i < characters.length; i++) {
          if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
          }
        }
      
        return res.json(false);
      });
  
   
  };
  