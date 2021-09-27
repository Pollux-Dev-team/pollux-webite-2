import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import { Switch, Route } from "react-router-dom";
import WorkPage from "./Pages/WorkPage/WorkPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/work" component={WorkPage} />
      </Switch>
    </div>
  );
}

export default App;
