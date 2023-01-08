import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Singletask = () => {
    const [tag, setTag] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {taskId} = useParams();
    const redirect = useNavigate();
    
    const url = `https://taskmanagerbackend-xl6u.onrender.com/tasks/${taskId}`;
    const fetchData = async() =>{
        const res = await fetch(url);
        const result = await res.json();
        const {data} = result;
        setTag(data.tag)
        setTitle(data.title)
        setDescription(data.description);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = () => {
        fetch(url, {
            method: 'DELETE'
        }).then(() =>{
            redirect("/");
        })
    }

  return (
    <div className='pad'>
        <h3 className='centre'>{tag}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleDelete}>Delete Task</button>
    </div>
  )
}

export default Singletask