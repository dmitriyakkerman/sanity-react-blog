import { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function AboutPage() {
    const [bio, setBio] = useState([]);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "author"]{
            name,
            "bio": bio[0].children[0].text,
            "authorImage": image.asset->url
        }`
        )
        .then((bio) => setBio(bio[0]))
    }, []);

    return (
        <div className="rcb-about">
            <h1 className="rcb-about__title">Hey there. I'm {bio.name}</h1>
            <p className="rcb-about__bio">{bio.bio}</p>
        </div>
    );
}