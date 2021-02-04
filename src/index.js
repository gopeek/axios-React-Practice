import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.posts['Content-type'] = 'application/json'

axios.interceptors.request.use(request => {
    console.log(request)
    //edit request config
    return request
}, error=> {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
        console.log(response)
        //edit request config
        return response
    }, error=> {
        return Promise.reject(error)
    }
)

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
