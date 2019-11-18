import axios from 'axios';

// 创建axios实例
const my = axios.create({
    baseURL: 'http://localhost:3306',
    // headers: {'X-Custom-Header': 'foobar'}
});

function get(path, params, config = {}) {
    return my.get(path, {
        ...config,
        params
    })
}

function post(path, data = {}, config = {}) {
    return my.post(path, data, config)
}

export {
    get,
    post
}