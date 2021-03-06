import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthModal from "./components/auth/AuthModal";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <AuthModal/>
        <Switch>
          <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
   </Provider>
  );
}

export default App;
