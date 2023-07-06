import React from "react";
import {Link} from 'react-router-dom';

export default function Home(){

    return(
        <div style={{ margin: 'auto'}}>
            <div style={{paddingTop:'50px',justifyContent:'center',alignContent:'center', textAlign:'center'}}>
                Welcome to the Translation app!
                <br/>
                <br/>
                <Link to="/dogs">Get New Dog</Link>
            </div>
        </div> 
    );
};