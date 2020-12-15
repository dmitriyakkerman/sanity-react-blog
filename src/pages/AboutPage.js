import { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import PostsLoader from "../components/Loaders/PostsLoader";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function AboutPage() {
    const [bio, setBio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "author"]{
            name,
            "bio": bio[0].children[0].text,
            "authorImage": image.asset->url
        }`
        )
        .then((bio) => {
            setTimeout(() => {
                setBio(bio[0])
                setLoading(false)
            }, 1000)
        })
    }, []);

    if(loading) {
        return <PostsLoader></PostsLoader>
    }

    return (
        <div className="rcb-about">
            <div className="container">
                <div className="rcb-profile">
                    <img src={urlFor(bio.authorImage).url()} className="rcb-about__img" alt={bio.name}/>
                    <h1 className="rcb-about__title">{bio.name}</h1>
                    <p className="rcb-about__bio">{bio.bio}</p>
                </div>
            </div>
        </div>
    );
}