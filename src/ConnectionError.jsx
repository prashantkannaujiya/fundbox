import React from "react";
import {ImConnection} from 'react-icons/im'
function ConnectionError()
{
    return(
        <div id='connection'>
            <div>
            <ImConnection style={{width:'30%',height:'30vh'}}></ImConnection>
            <h3>Please check your connection</h3>
            <h6 className="fw-light h5">Kindly reload when you're online</h6>
            </div>
        </div>
    )
}
export default ConnectionError;