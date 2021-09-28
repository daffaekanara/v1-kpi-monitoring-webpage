import React, { useState } from 'react'
import { FaBars }from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        
        <IconContext.Provider value={{color: '#fff'}}>
          <div className='navbar'>
              <Link to='#' className='menu-bars'>
                  <FaBars size={30} onClick={showSidebar}/>
                </Link>
                <span></span>
                <h1 className='title-page' style={{fontWeight:'bold'}}>KPI Monitoring</h1>
            </div> 
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose size={30}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
