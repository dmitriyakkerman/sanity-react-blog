import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import PostsLoader from "../components/Loaders/PostsLoader";

export default function PostPage() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
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
            .then((posts) => setPost(posts[0]))
            .catch(console.error);
    }, [slug]);

    if (!post) return <PostsLoader></PostsLoader>;

    return (
        <div className="rcb__single-post">
            <h1>{post.title}</h1>
            {/*<img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name}/>*/}
            <p>{post.name}</p>
            <img src={post.mainImage.asset.url} alt={post.title}/>
            <BlockContent blocks={post.body} projectId="8cng7esn" dataset="production"/>
        </div>
    );
}