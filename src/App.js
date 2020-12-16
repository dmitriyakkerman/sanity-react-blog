import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";

function App() {
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
              </Switch>
          </main>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
