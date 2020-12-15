import {Fragment} from 'react'
import PropTypes from 'prop-types'
import Post from "../Post/Post";

function Posts({posts}) {
    return(
        <Fragment>
            {
                posts && posts.map((post, index) => (
                    <Post post={post} key={index}></Post>
                ))
            }
        </Fragment>
    )
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(Object)
}

export default Posts;