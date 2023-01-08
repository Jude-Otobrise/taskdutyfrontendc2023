import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tasks3 from "../Images/Tasks3.png";
import saint from "../Images/saint.jpg";
import {FaLessThan} from "react-icons/fa"

const Create = () => {
    const [tag, setTag] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const redirect = useNavigate();
    const url = "https://taskmanagerbackend-xl6u.onrender.com/tasks";
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('tag, title, description');
        const data = {tag, title, description};
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(data),
        }).then (()=> {
            redirect("/");
        });
    };

  return (
    <div class="container" className='cover'>
  <div class="row row-cols-2">
    <div class="col" className='col1'>
    <ul>
        <li><h1>T</h1></li>
        <li><h5>TaskDuty</h5></li>
      </ul> 
    
    <div>
        <h5><FaLessThan /> New Task</h5> <br></br>

        <form onSubmit={handleSubmit}>
            <div>
                <input type = "text" name = "tag" placeholder = "Tag" value={tag} onChange= {(e)=> setTag (e.target.value)} />
            </div>
            <div> <br></br>
                <input type= "text" name= "title" placeholder= "Title" value={title} onChange= {(e)=> setTitle (e.target.value)} />
            </div> <br></br>
            <div>
                <input type= "text" name= "description" placeholder= "Description" value={description} onChange= {(e)=> setDescription (e.target.value)} className= "input3"/>
            </div> <br></br>
            <button type='Submit' className='btn4'>Create a New Task</button>
        </form>
    </div>
    </div>
    <div class="col" className='col2'>
    <ul>
    <li><p className='pt'>All Tasks</p></li>
    <li><img src={saint} alt='saintimg'></img></li>
    </ul> <br></br> 
    <img src={Tasks3} alt= "Tasks3img"></img>
    </div>
  </div>
</div>


    
  )
}

export default Create