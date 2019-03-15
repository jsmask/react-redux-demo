
import { FETCH_POSTS ,NEW_POST} from './type';

export const fetchPosts= () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json(res))
    .then(posts=>
        dispatch({
            type:FETCH_POSTS,
            payload:posts
        })
    );
}

export const createPost =postData => dispatch =>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(postData)
        })
        .then(res=>res.json(res))
        .then(post=>{
            dispatch({
                type:NEW_POST,
                payload:post
            })
        })
}


