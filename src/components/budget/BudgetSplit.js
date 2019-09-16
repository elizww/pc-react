import React, {useEffect, useState} from 'react';
import {getBudgetNodes} from "../../api/budgetApi";
import {TreeTable} from "primereact/treetable";
import {Column} from "primereact/column";

const BudgetSplit = () => {
    const [budget, setBudget] = useState([]);
    const [budgetSelection, setBudgetSelection] = useState(null);

    useEffect(() => {
        if (budget.length === 0) {
            getBudgetNodes().then(
                _budget => setBudget(_budget)
            )
        }
    }, [budget.length]);

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card card-w-title">
                    <h1>Budget</h1>
                    <TreeTable value={budget} selectionMode="single"
                               selectionKeys={budgetSelection}
                               onSelectionChange={event => setBudgetSelection(event.value)}>
                        <Column field="name" header="Name" expander/>
                        <Column field="total" header="Total"/>
                        <Column field="now" header="Now"/>
                        <Column field="later" header="Delayed"/>
                    </TreeTable>
                </div>
            </div>
        </div>
    )
};

export default BudgetSplit;