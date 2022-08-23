import { fetchFollowingContents } from '@/api/following'

export default {

    namespaced: true,

    state: () => ({
        followingContents:[]
    }),

    getters: {},

    mutations: {},

    actions: {
        // 팔로잉한 유저의 컨텐츠를 조회
        fetchFollowingContents(){
            fetchFollowingContents()
        }
    }
}