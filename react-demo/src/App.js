import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from "./components/Create"
import BlogDetails from "./components/BlogDetails"
import NotFound from "./components/NotFound"

const App = () => {
  return (
    <Router>
        <div className="App">
          <Navbar />

          <div className="home">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/create">
                <Create/>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </div>  
          
        </div>
      </Router>
  )
}

export default App