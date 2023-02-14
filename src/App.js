import React, { Component } from 'react';
import {  Switch, Route, BrowserRouter } from "react-router-dom";
import Main from './Components/Main';

import axios from 'axios';
import clientConfig from './clientConfig';
import Posts from './Components/client/Posts';
import Login from './Components/client/login';



class App extends Component{
 
  state = {
    posts : []
   }
  
   componentDidMount(){
    axios.get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts`).then((res) => {
      this.setState({posts : res.data})
      // console.log(res.data, "is responce")
    }).catch(err => console.catch(err, "is not responce"))
   }

  
  render(){
    
   const renderPosts = (routerProps) =>{
    let postId = parseInt(routerProps.match.params.id)
    let foundPost = this.state.posts.find((postObj) => postObj.id === postId )
    return foundPost ? <Posts post={foundPost}/> : "";
  
   }

    return(
     
    <BrowserRouter>
      <Switch>
      <Route path='/login' component={Login} />
        <Route path="/:id" 
        render={(routerProps) => renderPosts(routerProps)}
        />
       
        <Route exact path='/' component={Main} />
      </Switch>
    </BrowserRouter>

    );

  };
};

export default App;