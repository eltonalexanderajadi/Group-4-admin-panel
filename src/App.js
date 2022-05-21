import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
import UserList from './pages/home/UserList';
import CustomerList from './pages/home/CustomerList';
import Product from './pages/home/Product';
import BarChart from './components/charts/BarChart';
import SignIn from './authentication/SignIn';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { borderColor } from '@mui/system';
import {UserData} from "./components/charts/Data";



function App() {
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      ],

    });

  

  

  const adminUser = {
    email: "group4admin@gmail.com",
    password: "group4"
}

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState ("");

    const Login = details => {
      console.log(details);

      
      if(details.email === adminUser.email && details.password === adminUser.password){
        console.log("logged in");
        setUser({
          name: details.name,
          email:details.email
        }); 
      } else{
        console.log("Details do not match!");
        setError("Details do not match!")
      }
      
    } 
  

    const Logout = () => {
      setUser({ name:"", email:"" });
    }

  return (  
      <BrowserRouter>
        {(user.email !== "") ? (
         <><Topbar /><div className='container'>
          <Sidebar /> <div className='logout'>
          <button id="logout" onClick={Logout}>Logout</button>
          </div> 
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/users" element={<UserList />} />
              <Route path="/customers" element={<CustomerList />} />
              <Route path="/analytics" element={<BarChart chartData={userData}/>} />
              <Route path="/products" element={<Product />} />
          </Routes>
        </div></>
        ) : (
          <SignIn Login={Login} error={error} />
        )}

      </BrowserRouter>
  );
}

export default App;
