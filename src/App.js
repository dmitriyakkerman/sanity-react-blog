import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import About from "./pages/About";

function App() {
  return (
    <div className="rcb">
      <BrowserRouter>
          <Header></Header>
          <main>
              <Switch>
                  <Route component={Posts} path="/" exact></Route>
                  <Route component={Post} path="/post/:slug" exact></Route>
                  <Route component={About} path="/about"></Route>
              </Switch>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
