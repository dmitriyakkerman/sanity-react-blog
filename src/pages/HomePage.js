export default function HomePage() {
    return(
        <div className="rcb-home">
            <div className="container">
                <h1 className="rcb-home__title">Hey, my name is {document.title}!</h1>
                <p className="rcb-home__text">Welcome to my blog! <br/>You can find Git repository <a href="https://github.com/dmitriyakkerman/sanity-react-blog/">here</a></p>
            </div>
        </div>
    )
}