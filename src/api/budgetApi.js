import axios from 'axios';

export function getBudgetNodes() {
    return axios.get('assets/demo/data/budget.json')
        .then(res => res.data.root);
}