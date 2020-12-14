import {Link} from "react-router-dom";

export default function Post({post}) {
    return(
        <Link to={"/post/" + post.slug.current} key={post.slug.current} className="rcb-post">
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
            <h3>{post.title}</h3>
        </Link>
    )
}