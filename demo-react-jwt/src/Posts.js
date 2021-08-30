import React from "react";
import axios from "axios";
import {authHeader} from './utils/JWTAuth'
export default class Posts extends React.Component {
  constructor(props ) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  
     
  componentDidMount() {
      console.log("post loaded")
    const requestOptions = { method: 'GET',mode:'cors', headers: authHeader() };
    // axios.get(`http://localhost:3001/posts`,requestOptions).then((res) => 
    // {
    //   this.setState({ posts: res.data });
    //   console.log(res.data);
    // }
   
    // );
   
    return fetch(`http://localhost:3000/posts`, requestOptions)
    .then((res) => res.json()) // converting into json format
    .then((res) => {
        this.setState({ posts: res })
        console.log(this.state.posts)
        });

    
  }
  render() {
    var str = null;
    if (this.state.posts) {
      console.log(this.state.posts);
      str = this.state.posts;
    } else {
      str = "error";
      console.log("error");
    }

    return (
      <>
        <ul>
            hello
          {this.state.posts.map((post) => (
            <li>
              {post.userName} ,{post.title}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
