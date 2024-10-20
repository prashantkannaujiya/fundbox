import React, { useContext, useEffect, useState } from "react";
import './Style.css';

import { currentUser, processIcon } from "./App";
import { Outlet, useNavigate } from "react-router-dom";
function Account() {
 var [welcomeUser,setwelcomeUser]=useState(false)
 const navigate=useNavigate()
 var user=useContext(currentUser);
 var [confirm,setconfirm]=useState(false)
 var seticon=useContext(processIcon)
 useEffect(()=>{
  if(!user)
  {
    navigate('/')
  }
},[])
 
  
  function display()
  {
    
    return<div>
      <h2 id='welcomeHeading'>Welcome {user}</h2>
      
    </div>

  }
  function clear()
  {
    seticon(true)
    console.log(user)
fetch('https://capstone-fundbox-backend.vercel.app/clear/'+user)
.then(res=>res.json())
.then((data)=>{
  if(data.message=='success')
  {
    alert('deleted all')
  }
  else
  {
    alert('deletion failed')
  }
  seticon(false)
})
.catch(err=>{seticon(false);alert('unsucessful')})
  }
   

  return (
    <div>
     
  
<div id='dashBoard'>
     <h4 id='dash' >Dashboard</h4>
     <div id='dash_button'>
      <button className="btn btn-light mb-2" onClick={()=>{setwelcomeUser(true);navigate('/account/campaign')}}>Start Campaign</button>
      <button className="btn btn-light mb-2" onClick={()=>{setwelcomeUser(true);navigate('/account/history')}}>History</button>
      <button className="btn btn-light" onClick={()=>{setconfirm(true)}}>Clear Campaigns</button>
     {confirm && <div className='confirmation'><div><p>Are you sure ? </p><p>It would delete everything</p>
     <button onClick={clear}>Ok</button><button onClick={()=>{setconfirm(false)}}>Cancel</button>
     </div></div>}
     {confirm && <div className='coverup'></div>}
     </div>
     </div>
    <div>{welcomeUser?<Outlet/>:display()}</div>
     
    </div>
  );
}
export default Account;
