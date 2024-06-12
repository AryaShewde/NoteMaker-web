import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';
import "../App.css"

const AddNote = (props) => {    
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})
    
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showalert("Added a NEW Note Successfully", "success");
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <div className="container my-3">
                <h1 className='fontforh1'>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <textarea value={note.title} className="form-control textareashadow" id="title" name="title" rows="1" onChange={onChange}required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <textarea value={note.description} className="form-control textareashadow" id="description" name="description" rows="3" onChange={onChange}required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input value={note.tag} type= "text" className="form-control textareashadow" id="tag" name="tag" onChange={onChange}required></input>
                    </div>
                    <button disabled={note.title.length < 1 || note.description.length < 1} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
