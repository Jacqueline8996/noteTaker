//require the old data
var mynotes = require("../db/db.json");
//connects to the the database
var dataBase ='./db/db.json';
const fs =require("fs");
let oldNote = fs.readFileSync(dataBase);
//constants needed in order to create a ID
let alpha = ["AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"];
let number =["0123456789"];
let alphaNum = [alpha,number];

//makes unique ID 
function makeID(){
  let id = ""
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
      // let myID = makeID();
      // console.log("my id is ", myID)

      console.log("my notes", req.body);
      //stores the notes in an object 
      //adds in title to the object based on what was entered 
      //adds in title to the object based on what was entered 
        //gives note a unique number
      let addNotes = {
        title:req.body.title,
        text:req.body.text,
        id: makeID() 
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
  