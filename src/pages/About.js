import { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function About() {
    const [bio, setBio] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
            )
            .then((bio) => setBio(bio[0]))
    }, []);

    return (
        <div>
            <h1>Hey there. I'm {bio.name}</h1>
            <p>{bio.bio}</p>
        </div>
    );
}