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
            "bio": bio,
            "authorImage": image.asset->url
        }`
        )
        .then((bio) => {
            setTimeout(() => {
                console.log(bio)
                setBio(bio)
                setLoading(false)
            }, 1000)
        })
    }, []);

    return (
        <div className="rcb-about">
            <div className="container">
                <h2 className="title">About Me</h2>
                {loading ? <PostsLoader></PostsLoader> :
                    <div className="rcb-info">
                        <img src={urlFor(bio[0].authorImage).url()} className="rcb-about__img" alt={bio.name}/>
                        <div className="rcb-about__bio">
                            {
                                bio[0].bio.map(function (bio) {
                                    return(
                                        <div>{bio.children[0].text}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}