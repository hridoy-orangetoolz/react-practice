import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
// import EventHandling from "./components/EventHandling";
// import FormHandling2 from "./components/Form";
// import FormHandlingMain from "./components/form/FormHandlingMain";
import FormHandling from "./components/FormHandle";
import Form from "./components/FormHandling";
import ListView from "./components/input/Main";
import ListView2 from "./components/input/Parent";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/todo" />
        </Route>
        {/* <Route exact path="/class" component={FormHandling2} />

        <Route exact path="/functional" component={FormHandlingMain} />
        <Route exact path="/event" component={EventHandling} /> */}
        <Route exact path="/todo" component={TodoList} />
        <Route exact path="/form" component={FormHandling} />
        <Route exact path="/form1" component={Form} />
        <Route exact path="/list" component={ListView} />
        <Route exact path="/listclass" component={ListView2} />
      </Switch>
    </Router>
  );
}

export default App;
