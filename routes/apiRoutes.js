//require the old data
var mynotes = require("../db/db.json");
const fs =require("fs")


module.exports = function(app) {
  
    // get request for the notes
  
    app.get("/api/notes", function(req, res) {

      //get old notes 
        let oldNote = fs.readFileSync(JSON.stringify(mynotes))
        console.log("my old notes", oldNote)
        
        return res.json(JSON.parse(oldNote));
    });
  

    // // post notes 
  
    // app.post("/api/notes", function(req, res) {
    //    let pastNote = fs.readFileSync(JSON.stringify(mynotes))

    //     console.log("my notes", req.body);
    //     //stores the notes in an object 
    //     let addNotes = {
    //       //adds in title to the object based on what was entered 
    //       title:req.body.title,
    //       //adds in title to the object based on what was entered 
    //       Text:req.body.Text,
    //       //gives note a unique number
    //       id: pastNote.length+1 


    //     };
        
    //     // let pastNote = fs.readFileSync(mynotes)
    //     pastNote.push(addNotes)

    //     console.log("my notes", addNotes);
    //     console.log("my notes", pastNote);

    //     //writes the notes 
    //     fs.writeFileSync(mynotes,JSON.stringify(pastNote));
    //     // mynotes.push(newNote);

    //     // return res.json(mynotes,newNote);


    // });
  
    // app.delete("/api/note/:id", function(req, res) {

    //     let id = req.params.id;
    //     console.log(id);

    //     let deletNote = JSON.parse(fs.readFileSync(mynotes));

    //     //sort the info :
    //     let deltedList = deletNote.filter((note) => note.id !== id);

    //     //writes the notes 
    //     fs.writeFileSync(mynotes,JSON.stringify(deltedList));
    // });
  
   
};
  