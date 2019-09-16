import axios from 'axios';

export function getCallSheet() {
    return axios.get('assets/demo/data/callsheet.json')
        .then(res => res.data);
}


export function getBudgetNodes() {
    return axios.get('assets/demo/data/budget.json')
        .then(res => res.data.root);
}