import React, { Component } from 'react';
import '../Styles/App.css';
import Post from '../Components/client/Post';
import axios from 'axios';
import clientConfig from '../clientConfig';

const data = {
  "username" : "daeemehrdad",
	"password" : "daee2696890"
}

class Main extends Component {

componentDidMount(){
  axios.post(`${clientConfig.siteUrl}/wp-json/jwt-auth/v1/token`, data , {
    headers:{
      "Content-Type" : "application/json "
    }
  }).then(res=>{
    window.localStorage.setItem("token" , res.data.token)
    console.log("token is : " , res)
  }).catch(err=>{console.log( err ,"token err" )})
}

  render() {
  return (
    <div className="App">
  
    <Post/>
   
    </div>
  );
}
}

export default Main;
