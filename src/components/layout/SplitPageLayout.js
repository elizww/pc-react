import React from 'react';
import {Route} from "react-router-dom";
import BudgetSplit from "../budget/BudgetSplit";
import ShootingPage from "../shooting/ShootingPage";

const SplitPageLayout = () => {
    return (
        <>
            <div className="p-col-6">
                <Route path="/shooting" component={ShootingPage}/>
            </div>
            <div className="p-col-6">
                <Route path="/shooting" component={BudgetSplit}/>
            </div>
        </>
    );
};

export default SplitPageLayout;