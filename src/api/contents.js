// 컨텐츠 js 파일
import { posts } from './index'

// 메인 페이지 API
// 레시피, 생활팁, 맛집 인기 순으로 5개 씩 조회
function fetchContentsMain(payload){
    return posts.post('/api/contents-main',payload)
}

// 컨텐츠 목록을 가져오는 API
function fetchContents(payload){
    return posts.post('/api/contents',payload)
}

// 특정 테마의 컨텐츠를 가져오는 API
function fetchContentsWithTheme(payload){
    return posts.post('/api/contents-theme',payload)
}


// 좋아요한 


// 좋아요 하는 API
function insertLike(payload){
    return posts.post('/api/insert-like',payload)
}

// 좋아요를 취소하는 API
function removeLike(payload){
    return posts.post('/api/remove-like',payload)
}


// 스크랩한 컨텐츠를 조회하는 API
function fetchScrap(payload){
    return posts.post('/api/scrap',payload)
}

// 스크랩 하는 API
function insertScrap(payload){
    return posts.post('/api/insert-scrap',payload)
}

// 스크랩 취소하는 API
function removeScrap(payload){
    return posts.post('/api/remove-scrap',payload)
}

export { fetchContentsMain, fetchContents, fetchContentsWithTheme, insertLike, removeLike, fetchScrap, insertScrap, removeScrap  }