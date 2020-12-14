import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function Post() {
    const [singlePost, setSinglePost] = useState(null);
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
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;

    return (
        <main>
            <h1>{singlePost.title}</h1>
            {/*<img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name}/>*/}
            <p>{singlePost.name}</p>
            <img src={singlePost.mainImage.asset.url} alt={singlePost.title}/>
            <BlockContent blocks={singlePost.body} projectId="8cng7esn" dataset="production"/>
        </main>
    );
}