import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import axios from 'axios'

const Header = ({ title, onAdd, showAdd }) => {

    //date data
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()

    const location = useLocation()
    const [the_year,setThe_year] = useState('')

    axios.get('http://156.67.217.92/api/admin/operation/migrate_data')
    .then((res) => {
        console.log(res.data.year)
        setThe_year(res.data.year)
    })

    if (year == the_year) {

        return (
            <div>
            <header className='header'>
               <h1>History Table Migration</h1>
               <span></span>
               
               {location.pathname === '/' && (
                   
                   <Button color={showAdd ? '#FF6961' : '#3cb065'} 
                    text={showAdd ? 'close' : 'Start'} 
                    onClick={onAdd}
                />)}
    
            </header>
            <h3 className='header'>{(year-1) + " Data Already Migrated."}</h3>
            </div>
        )
        
      } else {

        return (
            <header className='header'>
               <h1>History Table Migration</h1> 
               <span></span>
               
               {location.pathname === '/adminpage' && (
                   
                   <Button color={showAdd ? '#FF6961' : '#3cb065'} 
                    text={showAdd ? 'close' : 'Start'} 
                    onClick={onAdd}
                />)}
          
                {location.pathname === '/history_page' && (
                   
                   <Button color={showAdd ? '#FF6961' : '#3cb065'} 
                    text={showAdd ? 'close' : 'Start'} 
                    onClick={onAdd}
                />)}
          
            </header>
          )

      }

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
