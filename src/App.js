import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Weather from "./pages/Weather";
import Forget from "./pages/Forget";
import {useSelector} from "react-redux";
import { Typography } from "@mui/material";
import DataFetchingComponent from './DataFetchingComponent'; 
import CustomTypography from './Components/CustomTypography';
import {app} from "./firebase";
import {getDatabase, ref, set} from "firebase/database"

export default function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </Router> 
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);