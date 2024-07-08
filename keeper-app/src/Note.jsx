import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {

    function handelClick(){
        props.onDelete(props.id);
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handelClick}><DeleteIcon /></button>
        </div>
    )
}

export default Note;