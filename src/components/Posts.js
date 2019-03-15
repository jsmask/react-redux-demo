import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         list:[]
    //     }
    // }
    componentDidMount(){
        this.props.fetchPosts();
        
      }
    render() {
        const PostsList=this.props.posts.map((item,index)=>(
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

const mapStateToProps = state => ({
    posts:state.posts.items
});

export default connect(mapStateToProps,{fetchPosts})(Posts);
