import { user } from '@/api/user'

export default {

    namespaced: true,

    state: () => ({

    }),

    getters: {},

    mutations: {},

    actuons: {
        // 회원 리스트
        searchUserList(){
            user()
        }
    }
}