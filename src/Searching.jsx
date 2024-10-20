import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { processIcon } from "./App";
function Searching()
{
    const location=useLocation();
  const navigate=useNavigate();
  var setprocess=useContext(processIcon)
  
    var data=location.state;
    var [display,setdisplay]=useState(false)
    console.log(data)
    
    var [searchData,setsearchData]=useState([])
    useEffect(()=>{
        setprocess(true)
        fetch("https://capstone-fundbox-backend.vercel.app/search/"+data)
        .then(res=>res.json())
        .then((data)=>{
console.log(data)
            setsearchData(data);
if(data.length!=0)
{
    setTimeout(()=>{setdisplay(true)},2000)
    setTimeout(()=>{setdisplay(false)},6500);
}
setprocess(false)
        })
        .catch(err=>{console.log(err);alert(err);setprocess(false);})
    },[data,location])

    return(
        <div id='searching'>
        {display && <p id='tip'><i className="bi bi-lightbulb-fill"></i> Click title to expand campaign details</p>}
        {searchData.length!=0 ?
        <div>
        <h4 style={{color:'yellow'}} className="text-center mt-5 mb-4">Found {searchData.length} matches for your search</h4>
        <table className="mt-3">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Amount</th>
            </tr>
            
                { searchData.map((a)=>{
                        return <tr>
                            <td onClick={()=>{navigate('/expand',{state:a.campaign})}}>{a.campaign.title}</td>
                            <td style={{width:'10cm'}}>{a.campaign.description}</td>
                          <td>{a.campaign.amount}</td>
                            <td><img id='searchImage' src={a.campaign.pic} alt='campaignPic'/></td>
                        </tr>

                    })
                }
            
        </table></div>:<h3>Nothing matched your query</h3>}
        </div>
    )
}
export default Searching;