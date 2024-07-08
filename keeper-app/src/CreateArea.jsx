import { useState } from "react";

function CreateArea(props) {

    const[note, setNote] = useState({
        title: "",
        content: "",
    });

    function handelChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: "",
        })
        event.preventDefault();
    }
    return(
        <div>
            <form action="">
                <input type="text" name="title" value={note.title} placeholder="Title" onChange={handelChange}/>
                <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handelChange}></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;