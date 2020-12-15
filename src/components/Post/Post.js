import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

function Post({post}) {
    return(
        <Link to={"/post/" + post.slug.current} key={post.slug.current} className="rcb-post">
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
            <h3>{post.title}</h3>
        </Link>
    )
}

Post.propTypes = {
    post: PropTypes.object
}

export default Post;