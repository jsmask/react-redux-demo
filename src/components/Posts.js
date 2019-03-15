import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProp){
        if(nextProp.newPost){
            this.props.posts.unshift(nextProp.newPost)
        }
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


PropTypes.PropTypes={
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts:state.posts.items,
    newPost:state.posts.item
});

export default connect(mapStateToProps,{fetchPosts})(Posts);
