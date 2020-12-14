import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Posts() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
            )
            .then((data) => setPost(data))
    }, []);

    return (
        <div>
            {postData && postData.map((post, index) => (
                <article key={index}>
                    <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                        <h3>{post.title}</h3>
                    </Link>
                </article>
            ))}
        </div>
    );
}