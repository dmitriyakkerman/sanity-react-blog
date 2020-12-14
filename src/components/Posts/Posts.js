import {Fragment} from 'react'
import Post from "../Post/Post";

export default function Posts({posts}) {
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