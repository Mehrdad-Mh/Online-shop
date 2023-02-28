import React, { Component } from 'react';
import {  Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Main from './Components/Main';

import axios from 'axios';
import clientConfig from './clientConfig';
import Posts from './Components/client/Posts';
import Login from './Components/client/login';
import Dashboard from './Components/admin/dashboard';
import Page404 from './Components/page404';
import PostsPage from './Components/client/PostsPage';
import UsersPage from './Components/client/UsersPage';

import Users from './Components/client/user';




class App extends Component{
 
  state = {
    posts : [],
    users : []
 
   }
  
   componentDidMount(){
    axios.get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts?per_page=50`).then((res) => {
      this.setState({posts : res.data})
      // console.log(res.data, "is responce")
    }).catch(err => console.catch(err, "is not responce"))

    axios.get(`${clientConfig.siteUrl}/wp-json/wp/v2/users`).then((users) => {
      this.setState({users : users.data})
      // console.log(users.data , "user response")
    }).catch((err) => console.catch(err ,"user eror"))


   }

  
  render(){
    
   const renderPosts = (routerProps) =>{
    let postId = parseInt(routerProps.match.params.id)
    let foundPost = this.state.posts.find((postObj) => postObj.id === postId )
    return foundPost ? <Posts post={foundPost}/> : "";
   }

   const renderUsers = (routerProps) =>{
    let userID =parseInt(routerProps.match.params.id)
    let foundUser = this.state.users.find((userObj) => userObj.id === userID)
    return foundUser ? <Users getuser={foundUser}/> : "" ;
   }

   

    return(
     
    <BrowserRouter>
      <Switch>
      <Route path="/posts/:id" 
        render={(routerProps) => renderPosts(routerProps)}
        />
        <Route
        path="/user/:id" 
        render={(routerProps) => renderUsers(routerProps)}
        />
      <Route path='/login' component={Login} />
      <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={UsersPage}/>
       <Route path="/PostsPage" component={PostsPage}/>
        <Route exact path='/' component={Main} />
        <Route path="/page404" component={Page404} />
        <Redirect to="/page404" />
      </Switch>
    </BrowserRouter>

    );

  };
};

export default App;