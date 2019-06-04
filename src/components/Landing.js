import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./components.css"

class Landing extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }


render(){
    return(
        <div className = "LAND">
        <h1>The Chocolate Shop</h1>
        <Link to='/login' ><button className='LAND-login-button'>Login</button></Link>
        <Link to='/register'><button className='LAND-register-button'>Create Account</button></Link>
        </div>
    )
}    
}

export default Landing