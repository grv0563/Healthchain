import React from 'react';
import "./SignOut.css"
    function noBack()
    {
        window.history.forward();
    }


function SignOut() {
  return (
    <div onLoad="noBack();" onpageshow="if (event.persisted) noBack();" onUnload="" className='signout-container'>
        <div className='signout-main'>
            <h1>Bye 👋</h1>
            <h3>Thank you for you time!</h3>
            <p>
                Please Click to Login:
            </p>
            <button className="btn" onClick={()=>{window.location.replace("/login")}}>Login</button>
        </div>
      
    </div>
  )
}

export default SignOut
