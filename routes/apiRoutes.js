//require the old data
var mynotes = require("../db/db.json");
const fs =require("fs")


module.exports = function(app) {
  
    // get request for the notes
  
    app.get("/api/notes", function(req, res) {

      //get old notes 
        let oldNote = fs.readFileSync(mynotes)
        
        return res.json(JSON.parse(oldNote));
    });
  

    // post notes 
  
    app.post("/api/notes", function(req, res) {
       let pastNote = fs.readFileSync(mynotes)

        console.log("my notes", req.body);
        //stores the notes in an object 
        let addNotes = {
          //adds in title to the object based on what was entered 
          title:req.body.title,
          //adds in title to the object based on what was entered 
          Text:req.body.Text,
          //gives note a unique number
          id: pastNote.length+1 


        };
        
        // let pastNote = fs.readFileSync(mynotes)
        pastNote.push(addNotes)

        console.log("my notes", addNotes);
        console.log("my notes", pastNote);

        //writes the notes 
        fs.writeFileSync(mynotes,JSON.stringify(pastNote));
        // mynotes.push(newNote);

        // return res.json(mynotes,newNote);


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
  