import React from 'react';
import { Link } from 'react-router-dom';

import { BsMenuUp } from 'react-icons/bs';
import {TbHandStop} from 'react-icons/tb';
import {FaRegComment} from "react-icons/fa"


const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='start'>
              <ol>
                <li>
                <Link to= "/"><BsMenuUp /></Link>
                </li>
                <li><Link to= "#"><TbHandStop /></Link></li>
                <li><FaRegComment /></li>
                <li className='ptm'><h4>Personal Task Manager (Office Copy)</h4></li>
                <li>
                <Link to= "#"><button className='navbt1'>J</button></Link>
                </li>
                <li>
                  <Link to= "#"><button className='navbt2'>Share</button></Link>
                </li>
              </ol> 
              </div>
            <div className='nav-links'>
                <ul>
                    <li><Link to= '/'># Edit Task</Link></li>
                    <li><Link to= '/create'># New Task</Link></li>
                    <li><Link to= '/'># My Tasks</Link></li>
                    <li><Link to= '/Coverpage'># Coverpage Page</Link></li>               
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
