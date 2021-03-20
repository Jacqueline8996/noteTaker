//require the old data
var mynotes = require("../db/db.json");
//connects to the the database
var dataBase ='./db/db.json';
const fs =require("fs");
let oldNote = fs.readFileSync(dataBase);
// let parseNote = JSON.parse(fs.readFileSync(dataBase));


module.exports = function(app) {
  
    // get request for the notes that have been stored
    app.get("/api/notes", function(req, res) {

      //get old notes 
        // let oldNote = fs.readFileSync(dataBase)
        console.log("my old notes", oldNote)
        return res.json(JSON.parse(oldNote));
    });
  

    // post notes 
  
    app.post("/api/notes", function(req, res) {
      //  let pastNote = fs.readFileSync(JSON.stringify(mynotes))
      let parseNote = JSON.parse(fs.readFileSync(dataBase));

        console.log("my notes", req.body);
        //stores the notes in an object 
        let addNotes = {
          //adds in title to the object based on what was entered 
          title:req.body.title,
          //adds in title to the object based on what was entered 
          Text:req.body.Text,
          //gives note a unique number
          id: oldNote.length +1 
        };
        
        console.log("my database", parseNote);
        
        // let pastNote = fs.readFileSync(mynotes)
        parseNote.push(addNotes);
        console.log("my database", parseNote);

        // console.log("my notes", pastNote);

        //writes the notes 
        fs.writeFileSync(dataBase, JSON.stringify(parseNote));
        // mynotes.push(newNote);
        console.log("my old notes", oldNote);

        res.json(addNotes);


    });
  
    app.delete("/api/note/:id", function(req, res) {

        let id = req.params.id;
        console.log(id);
        
        let parseNoteDel = JSON.parse(fs.readFileSync(dataBase));

        //sort the info :
        let newDel = parseNoteDel.filter((note) => note.id !== id);

        //writes the notes 
        fs.writeFileSync(dataBase,JSON.stringify(newDel));
        res.json({ ok: true });

    });
  
   
};
  