import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import PostsLoader from "../components/Loaders/PostsLoader";

export default function PostPage() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
            )
            .then((posts) => {
                setTimeout(() => {
                    setPost(posts[0])
                    setLoading(false)
                }, 1000)
            })
            .catch(console.error);
    }, [slug]);

    return (
        <div className="rcb-posts">
            <div className="container">
                { loading ? <PostsLoader></PostsLoader> :
                    <div className="single-post">
                        <img src={post.mainImage.asset.url} alt={post.title} className="single-post__img"/>
                        <h2 className="single-post__title">{post.title}</h2>
                        <div className="single-post__date">{new Date(post.publishedAt).toLocaleDateString()}</div>
                        <div className="single-post__text">
                            <BlockContent blocks={post.body} projectId="8cng7esn" dataset="production"/>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}