//require the old data
var mynotes = require("../db/db.json");
//connects to the the database
var dataBase ='./db/db.json';
const fs =require("fs");
let oldNote = fs.readFileSync(dataBase);

//makes unique ID 
function makeID(){
  //paramater needed in order to create a ID
  let alpha = ["AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"];
  let number =["0123456789"];
  let alphaNum = [alpha,number];
  let id = ""
  //creates an 8 digit number 
  for (i = 0; i < 8; i++) {
    let ranAlphaNum = Math.floor(Math.random() * 2)
    let ranAlpha = Math.floor(Math.random() * 51)
    let ranNum = Math.floor(Math.random() * 9)
    let choice = alphaNum[ranAlphaNum]

    if (choice === alphaNum[0]){
       let digit = choice[0][ranAlpha]
       id += digit
    }else{
      let digit = choice[0][ranNum]
      id += digit
    }
  }
  return id 
};

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
      //stores the notes in an object 
      //adds in title to the object based on what was entered 
      //adds in title to the object based on what was entered 
      //gives note a unique number from make ID 
      let addNotes = {
        title:req.body.title,
        text:req.body.text,
        id: makeID() 
      };

      // let pastNote = fs.readFileSync(mynotes)
      parseNote.push(addNotes);
      console.log("my database", parseNote);

      //writes the notes 
      fs.writeFileSync(dataBase, JSON.stringify(parseNote));
      res.json(addNotes);

    });
  
    //Deletes the notes via there ID
    app.delete("/api/notes/:id", function (req, res) {
      //gets the note id that willl be deleted
      let id = req.params.id;
      //parse the the database so you can use it 
      const notesDel = JSON.parse(fs.readFileSync(dataBase))
      
      //make the new notes array
      const newNoteArr = notesDel.filter((note) => note.id !== id)
      //writes the new database after it has been fileted out
      fs.writeFileSync(dataBase, JSON.stringify(newNoteArr))
      res.json({ ok: true });
  });  


};
  