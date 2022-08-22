// 게시글 js 파일
import { posts } from './index'

// 게시글 작성 API
function insertContents(payload){
    return posts.post('/api/post/add', payload)
}

// 게시글 수정 API
function updateContents(contentsId, payload){
    return posts.post(`/api/post/${contentsId}`, payload)
}

// 게시글 삭제 API
function deleteContents(contentsId){
    return posts.delete(`/api/post/${contentsId}`)
}

export { insertContents, updateContents, deleteContents }