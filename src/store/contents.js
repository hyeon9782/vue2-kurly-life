import { fetchContents } from '@/api/contents'

export default {

    namespaced: true,

    state: () => ({
        contents: [],
        keyword: "감자",
    }),

    getters: {},

    mutations: {
        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
    },

    actuons: {
        // 컨텐츠 리스트
        async searchContents({ state, commit }, payload){
            
            const res = await fetchContents(payload)

            const contents = res.data.postList

            commit('updateState', {
                contents
            })

            const pageLength = 1

            if (pageLength > 1) {
                for (let page = 2; page <= pageLength; page += 1) {
                    if (page > (payload.number / 12)) break
                    const res = await fetchContents(payload)
                    const contents = res.data.postList
                    commit('updateState', {
                        contents: [...state.movies, ...contents]
                    })
                }
            }





        }
    }
}