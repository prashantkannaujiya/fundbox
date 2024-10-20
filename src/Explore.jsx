import React, { useContext, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
//import "./Style.css";
import { useNavigate } from "react-router-dom";
import { processIcon } from "./App";
function Explore() {
  var [exp, setexp] = useState([]);
  var [empty,setempty]=useState(false)
const navigate=useNavigate()
var seticon=useContext(processIcon);  
const ref=useRef()
useEffect(()=>{
    findAll('art');
  },[])

  function findAll(m) {

    seticon(true)
 ref.current.className='container';
   
    fetch("https://capstone-fundbox-backend.vercel.app/findAll/" + m)
      .then((res) => res.json())
      .then((data) => {
        
        ref.current.className="container animate"
        console.log(data)
        data.length==0 ? setempty(true) : setempty(false);
        setexp(data);
        seticon(false)
      })
      .catch(err=>{
        seticon(false)
        alert("Can't connect to server")
      })
    
  }
  
  return (
    <div className="page">
    <h4 className="text-center rounded-1 mb-5 bg-white text-success w-50 mx-auto p-3">Explore the live campaigns active on our platform.</h4>
    <h4 className="text-center fs-5 text-white">Browse across categories to find what your thought dwells in.</h4>
 <div id="explor" className="d-flex justify-content-between ">
          <div id="" className=" exp px-2 rounded-1 py-1">
           
            <button name="art"
              className="d-block  rounded-0 w-100 "
              onClick={() => {
                findAll("art");
              }}
            >
              Art
            </button>
          
            <button name="music"
             className="  rounded-0 w-100 d-block "
              onClick={() => {
                findAll("music");
              }}
            >
              Music
            </button>
      
            <button name="technology"
              className="  rounded-0 w-100 d-block "
              onClick={() => {
                findAll("technology");
              }}
            >
              Technology
            </button>
        
       
            <button name="business"
              className="   rounded-0 w-100 d-block"
              onClick={() => {
                findAll("business");
              }}
            >
              Business
            </button>
         
          
            <button name="other"
              className="  rounded-0 w-100 d-block"
              onClick={() => {
                findAll("other");
              }}
            >
              Others
            </button>
        
          </div>
        

        
      
      <div id="display-cat" className="container" ref={ref}>
        {exp.map((a) => {
          return (
            <div className="rounded-2 pb-3">
            <div>
                <p>
                  <img src={a.pic} />
                </p>
              </div>
              {console.log(a)}
              <div id="dis" className="rounded-1">
                <p>{a.title}</p>
                <p id='des'>{a.description}</p>
                <p>Target Amount : {a.amount}</p>
                <p><button className="contributeButton" onClick={()=>{navigate('/expand',{state:a})}}>Details</button></p>
              </div>{console.log(exp.length)}
             
            </div>
          );
        })}
        {empty && <p id='emptyExplore'>Nothing in this category yet</p>}
      </div>
    </div>
    </div>
   
  );
}
export default Explore;
