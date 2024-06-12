import React, { useContext } from 'react'
import "../App.css"
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    // const {editNote} = context;
    const { note , updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card border-0 my-3 cardkibody">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <div className="d-flex justify-content-between">
                        <i className="material-icons mx-2" onClick={()=>{deleteNote(note._id); props.showalert("Deleted Successfully", "success");}}>delete</i>
                        <i className="material-icons mx-2" onClick={()=>{updateNote(note)}}>edit</i>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem
