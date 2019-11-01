import React from 'react';
import {Route, Switch} from "react-router-dom";
import BudgetPage from "../budget/BudgetPage";
import HomePage from "../home/HomePage";
import NewProjectWizard from "../project/NewProjectWizard";

const SinglePageLayout = () => {
    return (
        <div className="p-col-12">
            <Switch>
                <Route path="/budget" component={BudgetPage}/>
                <Route path="/new" component={NewProjectWizard}/>
              <Route path="/" exact component={HomePage}/>
            </Switch>
        </div>
    );
};

export default SinglePageLayout;