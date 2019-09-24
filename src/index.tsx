import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";
import ChooseData from "./components/chooseData";
import MapData from "./components/mapData";

function NoMatch() {
    return <Redirect to="/login" />;
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={App} />
                <Route path="/chooseData" exact component={ChooseData} />
                <Route path="/courts" exact component={MapData} />
                <Route path="/schools" exact component={MapData} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);