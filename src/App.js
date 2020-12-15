import {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AppLoader from "./components/Loaders/AppLoader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import ContactsPage from "./pages/ContactsPage";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 1000)
  }, [loading])

  if(loading) {
      return <AppLoader></AppLoader>
  }

  return (
    <div className="rcb">
      <BrowserRouter>
          <Header></Header>
          <main>
              <Switch>
                  <Route component={HomePage} path="/" exact></Route>
                  <Route component={AboutPage} path="/about"></Route>
                  <Route component={PostsPage} path="/posts"></Route>
                  <Route component={PostPage} path="/post/:slug"></Route>
                  <Route component={ContactsPage} path="/contacts"></Route>
              </Switch>
          </main>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
