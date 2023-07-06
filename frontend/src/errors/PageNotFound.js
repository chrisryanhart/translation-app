import React from "react";
import {Link} from 'react-router-dom';

export default function PageNotFound(){

    return(
        <div style={{ margin: 'auto'}}>
            <div style={{paddingTop:'50px',justifyContent:'center',alignContent:'center', textAlign:'center'}}>
                The page you were looking for was not found! Please confirm the url!
                <br/>
                <br/>
                <Link to="/">Return to homepage</Link>
            </div>
        </div> 
    );
};