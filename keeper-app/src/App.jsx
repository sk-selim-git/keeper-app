import { useState } from "react";
import "./App.css";
import CreateArea from "./CreateArea.jsx";
import Note from "./Note.jsx";

function App() {

  const[notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
     return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }

  return(
    <div>
      <h1>Keeper App</h1>
      <CreateArea onAdd={addNote}/>
     {notes.map((noteItem, index)=> {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>;
      })}
    </div>
  )
}

export default App;