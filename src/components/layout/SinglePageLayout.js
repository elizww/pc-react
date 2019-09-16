import React from 'react';
import Stuff from "../Stuff";
import {Route} from "react-router-dom";

const SinglePageLayout = () => {
    return (
        <div className="p-col-12">
            <Route path="/" exact component={Stuff}/>
        </div>
    );
};

export default SinglePageLayout;