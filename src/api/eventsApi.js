import axios from 'axios';

export function getEvents() {
    return axios.get('assets/demo/data/events.json')
        .then(res => res.data);
}

