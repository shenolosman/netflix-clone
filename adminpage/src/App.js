import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MoviesList from "./pages/moviesList/MoviesList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import NewList from "./pages/newList/NewList";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      {user && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MoviesList />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List/>
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newmovie">
                <NewMovie />
              </Route>
              <Route path="/newlist">
                <NewList/>
              </Route>
            </Switch>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
