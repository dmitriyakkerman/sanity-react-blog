import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="rcb">
      <BrowserRouter>
          <Header></Header>
          <main>
              <Switch>
                  <Route component={PostsPage} path="/" exact></Route>
                  <Route component={PostPage} path="/post/:slug" exact></Route>
                  <Route component={AboutPage} path="/about"></Route>
              </Switch>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
