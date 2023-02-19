import React, { Component } from 'react';
import {  Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Main from './Components/Main';

import axios from 'axios';
import clientConfig from './clientConfig';
import Posts from './Components/client/Posts';
import Login from './Components/client/login';
import Dashboard from './Components/admin/dashboard';
import Page404 from './Components/page404';



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
      <Route path="/posts/:id" 
        render={(routerProps) => renderPosts(routerProps)}
        />
      <Route path='/login' component={Login} />
      <Route path="/dashboard" component={Dashboard} />
        
       
        <Route exact path='/' component={Main} />
        <Route path="/page404" component={Page404} />
        <Redirect to="/page404" />
      </Switch>
    </BrowserRouter>

    );

  };
};

export default App;