import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodList from "./components/FoodList/FoodList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div style={{ backgroundColor: "#1a2f33", overflowX: "hidden" }}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/vegetables">
            <FoodList />
          </Route>
          <Route path="/fasts">
            <FoodList />
          </Route>
          <Route path="/meats">
            <FoodList />
          </Route>
          <Route path="/sea">
            <FoodList />
          </Route>
          <Route path="/soups">
            <FoodList />
          </Route>
          <Route path="/chickens">
            <FoodList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
