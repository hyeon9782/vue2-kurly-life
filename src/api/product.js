// 프로덕트 js 파일
import { posts } from './index'

// 프로덕트 목록을 가져오는 API
function fetchProduct(payload){
    return posts.post('/api/product',payload)
}

export { fetchProduct }