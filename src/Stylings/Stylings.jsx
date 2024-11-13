import React from 'react'
import './Style.css'
import  Headingstyle from './Heading.module.css'

const Stylings = (props) =>{
    const internalStyle ={
        heading: {
            backgroundColor : 'yellow',
            color : "white"
        }

    }
    return(
        <div>
            {/* <h1 style={{backgroundColor:"red"}}>this is Internal stylings</h1>
            <h2 style={internalStyle.heading}>this is internam Stylings</h2>
            <h3 className='card'> this is External stylings</h3>
            <h4 className={Headingstyle.navstyle}>this is Module Styling</h4>
            <button >Click Here</button> */}
            {/* <button className= {props.details.status ? 'btn btn-success' : ''} >Click Here</button> */}
       
        </div>
    )
}
export default Stylings