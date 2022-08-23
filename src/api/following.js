// 팔로잉 js 파일
import { posts } from './index'

function fetchFollowingContents(payload){
    const { userId } = payload
    return posts.get(`/api/select/${userId}`)
}

function insertFollowing(payload){
    return posts.post('/api/insert-follow',payload)
}

function deleteFollowing(payload){
    return posts.post('/api/insert-follow01',payload)
}

export { fetchFollowingContents, insertFollowing, deleteFollowing }