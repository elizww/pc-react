import React from 'react';
import Stuff from "../Stuff";
import {Route} from "react-router-dom";

const SplitPageLayout = () => {
    return (
        <>
            <div className="p-col-6">
                <Route path="/a" exact component={Stuff}/>
            </div>
            <div className="p-col-6">
                <Route path="/a" exact component={Stuff}/>
            </div>
        </>
    );
};

export default SplitPageLayout;