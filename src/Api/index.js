import axios from 'axios'
import {message} from 'antd'

const isDev = process.env.NODE_ENV === 'development'
const service = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/264523' : ''
})

service.interceptors.request.use( config => {
    config.data = Object.assign({},config.data,{
        // authTokens:window.localStorage.getItem('authToken')
        authToken: '111111111111'
    })
    return config
})

service.interceptors.response.use( resp => {
    if(resp.data.code === 200){
        return resp.data
    }else{
        message.error("错误")
    }
})

export const getArticles = (offset = 0, limited = 10) => {
    return service.post('/api/v1/articleList',{
        offset,
        limited
    })
}