
import { Link ,useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import myImage from '../photos/pexels-tobiasbjorkli-1693095 (1).jpg';
import Glogo from '../photos/7123025_logo_google_g_icon.png';
import '../LoginPage.css';
import {signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import { auth } from '../firebase';
import React, { useState , useEffect} from 'react';
import {collection} from "firebase/firestore"
import { update } from 'firebase/database';

const Forget = () => {
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="containedr">
        <div className="containedr2">
          <Typography variant="h3" component="p" className="welcome" style={{ margin: "30px 40px 60px 40px" }}>
            Welcome back
          </Typography>
          <div style={{display:'flex', justifyContent:"center", marginBottom:"15px"}}>
            <button style={{ width: "220px", padding: "1px 6px 1px 0px", border: "none", backgroundColor: "rgb(15, 104, 219)", cursor: "pointer" }}onClick={signInWithGoogle}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", verticalAlign: "middle", backgroundColor: "#FFFFFF", marginRight: "20px" }}>
                  <img src={Glogo} style={{ width: "50px" }} alt="Google icon" />
                </div>
                <div style={{ display: "flex", verticalAlign: "middle", justifyContent: "center", marginTop: "2%" }}>
                  <p style={{ verticalAlign: "middle" }}>Sign in With Google</p>
                </div>
              </div>
            </button>
          </div>
            <div style={{display:"flex" , flexDirection:"column", justifyContent:"center" , marginLeft:"50%" , fontFamily:"sans", fontSize:"18px", color:"gray"}}>
              <p style={{display:"flex"}}>or</p>
            </div>
          <form className="login" method='Post'>
          <TextField
              error={emailError}
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              helperText={emailError ? "Please enter the Email" : ""}
              />
            <div className="btn1">
              <Button
                variant="contained"
                type='submit'
                color="primary"
                fullWidth
                to="/Forget"
                style={{marginTop:"40px"}}
                
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forget;