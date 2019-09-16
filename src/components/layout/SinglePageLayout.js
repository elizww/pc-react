import React from 'react';
import {Route, Switch} from "react-router-dom";
import BudgetPage from "../budget/BudgetPage";

const SinglePageLayout = () => {
    return (
        <div className="p-col-12">
            <Switch>
                <Route path="/budget" component={BudgetPage}/>
                <Route path="/" exact component={BudgetPage}/>
            </Switch>
        </div>
    );
};

export default SinglePageLayout;