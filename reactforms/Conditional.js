import React from 'react'

function Conditional(props){
    console.log(props)
    return (
        <div>
           <p>{props.isLogged?'Click log out to logout':'Please login into the system'}</p>
           <button onClick={props.handleClick}>{props.isLogged?'LogOut':'LogIn'}</button>
        </div>
    )
}

export default Conditional 