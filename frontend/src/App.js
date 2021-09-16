import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Settings from "./components/settings/Settings";
import Topbar from "./components/topbar/Topbar";
import WritePost from "./components/writePost/WritePost";
import { Context } from "./context/Context";
import Home from "./Layout/home/Home";
import Single from "./Layout/posts/single/Single";

function App() {
  const { user } = useContext(Context);
  console.log(user, "USER");
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <WritePost /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
