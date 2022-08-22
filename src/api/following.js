// 팔로잉 js 파일
import { posts } from './index'

function insertFollowing(payload){
    return posts.post('/api/insert-follow',payload)
}

export { insertFollowing }