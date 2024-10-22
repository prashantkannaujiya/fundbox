import React, { createContext, useEffect, useState } from "react";
import Register from "./Register";
import Account from "./Account";
import "./Style.css";
import './Style/mobileStyle.css'
import "./loader.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";    
import Explore from "./Explore";
import Contact from "./Contact";
import Know from "./Know";
import {BiSearch} from 'react-icons/bi';
import Grow from "./Grow";
import Searching from "./Searching";
import { Route,Routes, useNavigate,Link, useLocation } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Campaign from "./Campaign";
import Expand from "./Expand";
import { Search } from "react-bootstrap-icons";
import ConnectionError from "./ConnectionError";
export const currentUser=createContext();
export const processIcon=createContext();
function App() {
 var [searched,setsearched]=useState(null)
 var location=useLocation();
 var [icon,seticon]=useState(false)
  var [user, setuser] = useState(null);
  const navigate=useNavigate();
useEffect(()=>{
  window.scrollTo(0,0)
  console.log(location.pathname)
  // fetch('https://fakestoreapi.com/products/1')
  // .then(res=>{if(res.status<200 && res.status>299){ navigate('/error');
  //   seticon(false)}})
  // .catch(err=>{navigate('/error');seticon(false);console.log(err)})
let height=document.getElementById('app').scrollHeight;
console.log(height)  
let k=document.getElementById('foot');
height<600 ?k.style.position='absolute':k.style.position='static';
},[location,icon])


  const login = (event) => {
    event.preventDefault();
    var h = document.getElementsByName("log");
   seticon(true)
    var k = {
      name: h[0].value,
      password: h[1].value,
    };
    fetch("https://capstone-fundbox-backend.vercel.app/Login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(k),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.message=='success')
        {  window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("name", data.name);
        console.log(data);
        display_menu();
        setuser(data.name);
console.log(user)
        }
        else{
          document.getElementById('err').style.display='block';
        }
      seticon(false)
      })
      .catch((er) => {
        seticon(false)
        console.log(er);
      });
  };
  function logoff() {
    window.localStorage.clear();
    setuser(null);
    navigate('/')
  }
  function display() {
   seticon(true)
    var t = window.localStorage.getItem("token");
    console.log(t)
    const tt=document.querySelector('#login-menu');
    document.querySelector('body').addEventListener('click',e=>{
      console.log(e)
      console.log(tt.contains(e.target))
      if(e.target!=tt && e.target!=document.querySelector('#but-log') && !tt.contains(e.target))
      {
        document.querySelector('#login-menu').style.display='none';
        console.log(tt.getElementsByTagName('*')) 
      }
    })
    var link = "https://capstone-fundbox-backend.vercel.app/auth/" + t;
    if (t != null) {
      fetch(link)
        .then((res) => res.json())
        .then((data) => {
          if (data.message == "approved") {
            setuser(data.data);
          } else {
            
            display_menu();
          }
          seticon(false)
        })
        .catch((err) => {
          console.log(err);
          display_menu();
        });
    } else {
      seticon(false)
      display_menu();
    }
  }
 
  function display_menu() {
  
   
   document.getElementById('login').reset();
    document.getElementById('err').style.display='none';
    var k = document.getElementById("login-menu");
    (k.style.display == "none"
      ? (k.style.display = "block")
      : (k.style.display = "none"));
  }
  
  function searchQuery(ev)
  {
    ev.preventDefault();
    navigate('/search',{state:searched})
  }
  return (
    <div id="app">
      <div id="main-header">
      <Link to='/'><h1 style={{fontFamily:'Lobster, cursive'}}>FundBox</h1></Link>  
       <span id='searchBox'><div className="input-group "><input type='text' className="form-control shadow" placeholder="Search in Campaigns" onChange={(e)=>{setsearched(e.target.value)}} required/><button className="btn btn-light border border-1"  onClick={(e)=>{searchQuery(e)}}><BiSearch id='search'></BiSearch></button></div> </span>
        <div>
          {user == null ? (
            <div>
              <button  
                onClick={() => {
                  navigate('/register')
                }}
                className="btn btn-light me-3 shadow"
              >
                Register
              </button>
              <button id='but-log'  className="btn btn-light shadow"  onClick={display}>Login</button>
            </div>
          ) : (
            <div>
              <span>{user + "   "}</span>
              <button   className="btn btn-light shadow me-3" onClick={logoff}>Logout</button>
              <button  
                onClick={() => {
                 navigate('/account');
                }}
                 className="btn btn-light "
              >
                My Account
              </button>
            </div>
          )}

          <div id="login-menu">
            <br />
            <h3>FundBox</h3>
            <h4>Sign in to FundBox</h4>
            <h6>Sign in using your FundBox account</h6>
          <form id='login' onSubmit={(e)=>{login(e)}}>
          <input type='text' name='log' placeholder='name'/><br/>
            <input type='password' name='log' placeholder='password'/><br/>
            <p id='err'>Incorrect credentials</p>
            <button>Submit</button>
            
          </form>
            
           
          </div>
        </div>
      </div>
     
     <div id='mainContent'>
     <currentUser.Provider value={user}>
     <processIcon.Provider value={seticon}>
     <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/explore' element={<Explore></Explore>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/grow' element={<Grow></Grow>}/>
      <Route path="/search" element={<Searching></Searching>}/>
      <Route path='/know' element={<Know></Know>}/>
      <Route path='/account' element={<Account></Account>}>
      <Route path='/account/history' element={<History></History>}>
      <Route path='/account/history/expand' element={<Expand></Expand>}/>
      </Route>
      <Route path='/account/campaign' element={<Campaign></Campaign>}/>
 </Route>
      <Route path='/register' element={<Register></Register>}/>
      <Route path='/error' element={<ConnectionError></ConnectionError>}/>
            <Route path='/expand' element={<Expand></Expand>}/>
     </Routes>
     </processIcon.Provider>
     </currentUser.Provider>
     </div>
     {icon && <div className='confirmation'><p><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></p></div>}
     {icon && <div className="coverup"></div>}
     
  <div id='foot'>

<Link to='/contact'>Contact Us</Link>
    <Link to='/grow'>Grow With Us</Link>
    <Link to='/know'>Know Us</Link>

    
  </div>
 
    </div>
  );
}
export default App;


