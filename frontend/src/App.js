// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Videopage from "./components/VideoPage";


export const config = {
  endpoint: `https://7452bf8c-256e-425a-8136-e7e1d8a308ae.mock.pstmn.io/v1`,
};


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/video/:id" component={Videopage} />
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
