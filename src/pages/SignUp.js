import '../SignUp.css';
import myImage from '../photos/pexels-tobiasbjorkli-1693095 (1).jpg';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState , useEffect} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import {db} from "../firebase"
import {collection ,getDocs,addDoc} from "firebase/firestore"

const SignUp = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"users")
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const createUser = async () => {
    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }
    if (email === '') {
      setEmailError(true);
      return;
    }

    setPasswordError(false);
    setEmailError(false);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(usersCollectionRef,{Email: email, Password: password})
      alert('You have an account now');
      navigate('/LoginPage');
    } catch (error) {
      console.error('Error creating user:', error);
      alert(`Error creating user: ${error.message}`);
    }
  };

  return (
    <div className='nn'>
      <div className="container">
        <div className="container2">
          <Typography variant="h3" component="p" className="welcome" style={{ margin: '30px 40px 70px 40px' }}>
            Join Us
          </Typography>
          <form className="login">
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
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              className="pass"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              error={passwordError}
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              className="pass"
              onChange={(e) => setConfirmPassword(e.target.value)}
              helperText={passwordError ? "Password not matched." : ""}
            />
            <Link to="/LoginPage" style={{ textDecoration: 'none', display: 'block', marginTop: '10px', marginBottom: '10px' }}>
              Already have an account?
            </Link>
            <div className="btn0">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={createUser}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
        <div className="container3">
          <img
            src={myImage}
            alt="Sign Up"
            style={{ width: '70%', objectFit: 'cover', borderRadius: '0 8px 8px 0' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
