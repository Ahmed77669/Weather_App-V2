import React from 'react';
import myImage from '../photos/5203299.jpg';
const Forget =  () =>{
    return(
        <div style={{display:"block",backgroundColor:"#FFFFFF"}}>
        <div style={{fontFamily:"cursive",fontSize:"60px",marginLeft:"40%", width:"600px"}}>
            <p>
                Page Not Found
            </p>
            </div>
            <p style={{fontFamily:"sans-serif",fontSize:"40px" ,marginLeft:"35%"}}>
                This Feature Will be available soon
            </p>
            <img src={myImage}
            style={{width:"400px" ,marginLeft:"40%"}}/>
        </div>
    );
};

export default Forget;