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
            publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
        )
        .then((posts) => {
            setTimeout(() => {
                setPosts(posts)
            }, 1000)
        })
    }, []);

    return (
        <div className="rcb-posts">
            <div className="container">
                <h2 className="title">Blog</h2>
                <Posts posts={posts}></Posts>
            </div>
        </div>
    );
}