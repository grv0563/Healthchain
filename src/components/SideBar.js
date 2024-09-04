import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-bootstrap'

function SideBar() {
  return (
    <div className='sidebar-container'> 
    <div className='sidebar -content'>
        <div className='user'>
            {/* {Avatar and username here for later} */}
            <p>Hey User</p>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/article1">
                    {/* image */}
                    <span>Article1</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/article2">
                    {/* image */}
                    <span>Article2</span>

                    </NavLink>
                </li>
            </ul>
        </nav>

    </div>
      
    </div>
  )
}

export default SideBar
