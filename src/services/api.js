import axios from 'axios'; //precisa para fazer as chamadas pra api

const api = axios.create({ //informa pro axios que todas as requisoções devem ter o http no início
    baseURL: 'http://localhost:3333'
});

export default api;