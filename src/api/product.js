// 프로덕트 js 파일
import { posts } from './index'

// 프로덕트 목록을 가져오는 API
function fetchProduct(payload){
    return posts.post('/api/product',payload)
}

// 검색한 키워드가 포함된 상품을 가져오는 API
function searchProduct(payload){
    return posts.post('/api/search-product',payload)
}

export { fetchProduct, searchProduct }