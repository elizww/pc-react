import React from 'react';
import SinglePageLayout from "./SinglePageLayout";
import {Route, Switch} from "react-router-dom";
import SplitPageLayout from "./SplitPageLayout";

const AppMain = () => {
    return (
        <div className="layout-main">
            <div className="p-grid">
                <Switch>
                    <Route to="/budget" component={SinglePageLayout}/>
                    <Route to="/new" component={SinglePageLayout}/>
                    <Route to="/" component={SinglePageLayout} exact/>
                </Switch>
                <Route to="/shooting" component={SplitPageLayout}/>
            </div>
        </div>
    );
};

export default AppMain;