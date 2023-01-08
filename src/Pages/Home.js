import React from 'react';
import { Link } from 'react-router-dom';
import Tasks1 from "../Images/Tasks1.png";
import saint from "../Images/saint.jpg";




const Home = () => {
  return (
    <div>
<div class="container" className='cover'>
<div class="row row-cols-2">
    <div class="col" className='col1'>

      <ul>
        <li><h1>T</h1></li>
        <li><h5>TaskDuty</h5></li>
      </ul> 
      
    
    <h3>Manage your Tasks on</h3>
    <h3 className='tag1'>Task Duty</h3> 

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
    <button><Link to= '/'>Go to My Tasks</Link></button>
</div>
<div class="col" className='col2'>
<ul>
    <li><p className='p1'>New Task</p></li>
    <li><p>All Tasks</p></li>
    <li><img src={saint} alt='saintimg'></img></li>
</ul>  
<img src= {Tasks1} alt= "Tasks"></img>
</div> 
</div>
</div>
    </div>
    
  )
}

export default Home;


