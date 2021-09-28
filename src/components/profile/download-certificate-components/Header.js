import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()
    
    return (
        <header className='header'>
           <h1>Download Certificate</h1> 
           <span></span>
           {location.pathname === '/profile' && (
               
               <Button color={showAdd ? '#FF6961' : '#3cb065'} 
                text={showAdd ? 'close' : 'Continue'} 
                onClick={onAdd}
            />)}
            {location.pathname === '/' && (
               
               <Button color={showAdd ? '#FF6961' : '#3cb065'} 
                text={showAdd ? 'close' : 'Continue'} 
                onClick={onAdd}
            />)}

        </header>
    )


}

Header.defaultProps = {
    title: 'update your data here:',
}

//const headingStyle = {
  //  color: 'red',
    //backgroundColor: 'black',
    //font: 'Oxygen'
//}
export default Header
