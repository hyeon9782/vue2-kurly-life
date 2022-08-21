import { fetchContents } from '@/api/contents'

export default {

    namespaced: true,

    state: () => ({

    }),

    getters: {},

    mutations: {},

    actuons: {
        // 컨텐츠 리스트
        searchUserList(){
            fetchContents()
        }
    }
}