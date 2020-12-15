import PropTypes from 'prop-types'
import Post from "../Post/Post";
import {useEffect, useState} from "react";
import PostsLoader from "../Loaders/PostsLoader";

function Posts({posts}) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [loading])

    if(loading || !posts.length) {
        return (
            <PostsLoader></PostsLoader>
        )
    }

    return(
        <div className="rcb-items">
            {
                posts && posts.map((post, index) => (
                    <Post post={post} key={index}></Post>
                ))
            }
        </div>
    )
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(Object)
}

export default Posts;