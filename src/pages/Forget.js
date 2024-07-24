
import { Link ,useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import myImage from '../photos/pexels-tobiasbjorkli-1693095 (1).jpg';
import Glogo from '../photos/7123025_logo_google_g_icon.png';
import '../LoginPage.css';
import {signInWithEmailAndPassword, signInWithPopup, updateProfile, confirmPasswordReset, sendPasswordResetEmail} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import { auth } from '../firebase';
import React, { useState , useEffect} from 'react';
import {collection} from "firebase/firestore"
import { update } from 'firebase/database';
const Forget = () => {
    
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const Resetmail = async(e) => {
        try{
            e.preventDefault();
            await sendPasswordResetEmail(auth,email);
            alert('Check email');
            navigate('/LoginPage');
        }catch(error){
            console.log('Error Login: ',error)
            alert(`Error Login: ${error.message}`);
        }
    };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{    
        width: "400px",
    border: "none",
    height: "60vh",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10%",
    boxShadow: "5px 3px 10px black",
    border: "1px solid gray"}}>
        <div className='containder2' style={{ width:"350px"}}>
          <Typography variant="h3" component="p" className="welcome" style={{ margin: "30px 20px 100px 20px" }}>
            Reset Password
          </Typography>
          <form className="login" method='Post'>
          <TextField
              
              label="Email"
              type="email"
              fulWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => {
                setEmail(e.target.value);
                
              }}
              />
            <div className="btn1" style={{display:"flex",justifyContent:"center"}}>
              <Button
                variant="contained"
                type='submit'
                color="primary"
                halfWidth
                to="/Forget"
                style={{marginTop:"40px", padding:"10px 40px"}}
                onClick={Resetmail}
                >
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forget;













