import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import Posts from "../components/Posts/Posts";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"]{
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
        .then((posts) => setPosts(posts))
    }, []);

    return (
        <div className="rcb-posts">
            <Posts posts={posts}></Posts>
        </div>
    );
}