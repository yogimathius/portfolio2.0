import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import fire from '../../fire.js';

const AdminLogin = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  if (isLoggedIn) {
    <Redirect to ="/home"/>

  }
  const signOut = () => {
    fire.auth().signOut()
  };

  console.log("logged in is: ", isLoggedIn);

  return (
    <div className="md:col-start-6 flex justify-center hover:text-black font-bold text-xs">
      {!isLoggedIn
        ? (
          <Link to='/login'>
            Admin Login
          </Link>
        ) 
        : (
          <>
          <span onClick={signOut}>
            <button href="#">Sign out</button>
          </span>
          </>
        )}
    </div>
  );
};

export default AdminLogin;