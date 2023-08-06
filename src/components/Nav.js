import React from 'react'
import './Nav.css'
import Fresh_meal_icon from '../images/fresh_meal_img.png'

const Nav = () =>{
    return(
        <div className="Nav_bar">
            <img style={{width:"auto", height:"60px", margin:"3.5vh"}} src={Fresh_meal_icon} alt="Company icon"/>
            <div className="Menu">
                <h2>Plans</h2>
                <h2>Menu</h2>
                <h2>How it works</h2>
                <h2>About</h2>
            </div>
        </div>
    )
}

export default Nav