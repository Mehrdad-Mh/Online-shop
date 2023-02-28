import React, { useEffect } from 'react';
import '../Styles/App.css';
import Post from '../Components/client/Post';
import axios from 'axios';
import clientConfig from '../clientConfig';
import { useDispatch } from 'react-redux';
import { get_tags } from '../redux/actions';


// const data = {
//   "username" : "sir_mehrdad",
// 	"password" : "123456"
// }



const Main  = () => {


  
  return (
    <div className="App">
  
    <Post/>
   
    </div>
  );
};


export default Main;
