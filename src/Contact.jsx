import React from "react";
import { useLocation } from "react-router-dom";
function Contact()
{
  const location=useLocation()
    function query(ev)
    {
        ev.preventDefault();
        alert("It's a dummy feature. Thanks for your interest")
        ev.target.reset();
    }
return(
    <div id='contact'>
    {location.pathname!='/' && <h1 style={{marginTop:'0.5cm'}}>Contact Us</h1> }
        
     
        <form onSubmit={(e)=>{query(e)}} className=" rounded-2 mx-auto w-75 pb-5 text-white">
        <p className="fs-5 mt-5" style={{marginBottom:'1cm'}}>Fill the form and we'll get back to you</p>
            <table>
              <tr>
                <td><label>Name</label></td>
                <td><input type='text' className="form-control rounded-0 bg-light border-1 border-bottom"/></td>
              </tr>
              <tr>
                <td><label>Email</label></td>
                <td><input type='mail' className="rounded-0 form-control bg-light border-1 border-bottom"/></td>
              </tr> 
              <tr>
                <td><label>Phone</label></td>
                <td><input type='phone' className="rounded-0 form-control bg-light border-1 border-bottom"/></td>
              </tr>
              <tr>
                <td><label>Country</label></td>
                <td><input type='text' className="form-control rounded-0 border-1 bg-light border-bottom"/></td>
              </tr>
              <tr>
                <td><label>Your Query</label></td>
                <td><textarea rows={3} cols={23} className="rounded-0 form-control bg-light border-bottom"></textarea></td>
              </tr>
            </table>
            <button className="btn btn-light shadow-lg w-50">Submit</button>
        </form>
    </div>
)
}
export default Contact;