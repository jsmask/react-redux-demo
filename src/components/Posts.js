import React, { Component } from 'react';

class Posts extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json(res))
        .then(res=>
            this.setState({
                list:res
            })
        );
      }
    render() {
        const PostsList=this.state.list.map((item,index)=>(
            <div key={item.id} className="posts-item">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {PostsList}
            </div>
        );
    }
}

export default Posts;
