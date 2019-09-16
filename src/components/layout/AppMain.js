import React from 'react';
import SinglePageLayout from "./SinglePageLayout";
import {Route} from "react-router-dom";
import SplitPageLayout from "./SplitPageLayout";

const AppMain = () => {
    return (
        <div className="layout-main">
            <div className="p-grid">
                <Route to="/" component={SinglePageLayout}/>
                <Route to="/a" component={SplitPageLayout}/>
            </div>
        </div>
    );
}

export default AppMain;