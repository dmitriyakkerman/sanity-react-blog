import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

function Post({post}) {
    return(
        <Link to={"/post/" + post.slug.current} key={post.slug.current} className="rcb-post">
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="rcb-post__img"/>
            <h3 className="rcb-post__title">{post.title}</h3>
            <div className="rcb-post__date">{new Date(post.publishedAt).toLocaleDateString()}</div>
        </Link>
    )
}

Post.propTypes = {
    post: PropTypes.object
}

export default Post;