// 컨텐츠 js 파일
import { posts } from './index'

// 컨텐츠 목록을 가져오는 API
function fetchContents(payload){
    return posts.post('/api/contents',payload)
}


export { fetchContents }