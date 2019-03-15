
import FETCH_POSTS from './type';

export function fetchPosts() {
    return function (dispatch) {  
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json(res))
        .then(posts=>
            dispatch({
                type:FETCH_POSTS,
                payload:posts
            })
        );
    }
}