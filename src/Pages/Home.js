import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Tasks2 from "../Images/Tasks2.png";
import saint from "../Images/saint.jpg";
import {FaEdit} from "react-icons/fa"


const Home = () => {
    const [tasks, setTasks] = useState([]);
    const url = "https://taskmanagerbackend-xl6u.onrender.com/tasks";
    const getdata = async () => {
        const res = await fetch (url);
        const result = await res.json();
        const{data} = result;
        setTasks(data);
    };
    useEffect(() => {
        getdata();
    }, []);

  return (
    <div class="container" className='cover'>
  <div class="row row-cols-2">
    <div class="col" className='col1'>

    <ul>
        <li><h1>T</h1></li>
        <li><h5>TaskDuty</h5></li>
      </ul> 
        <h4>My Tasks</h4>
        <br></br>
       {
        tasks.map((task) => {
            return(
            <div key={task._id} className= "tasksbtn">
                <p>{task.tag}</p>
                <h2>{task.title}</h2> 
                <button><Link to = {`/${task._id}`}>View Task</Link></button>
                <button><Link to = {`edit/${task._id}`}><FaEdit />Edit Task</Link></button>
                <br></br> <br></br>
            </div>
            )   
    })} 
    </div> 
    <div class="col" className='col2'>
    <ul>
    <li><p className='p1'>New Task</p></li>
    <li><img src={saint} alt='saintimg'></img></li>
    </ul> <br></br>
    <Link to= "/create"><h6>+ Add New Task</h6></Link>  
    <img src={Tasks2} alt= "Tasks2img" className='img2'></img>
    </div>
  </div>
</div>

    
  )
}

export default Home;