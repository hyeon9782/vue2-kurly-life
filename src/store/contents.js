import { fetchContents, fetchScrapContents, fetchUserContents } from '@/api/contents'

export default {

    namespaced: true,

    state: () => ({
        contents: [],
        scrapContents: [],
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

    actions: {
        // 컨텐츠 리스트
        async searchContents({ commit }, payload){

            try{

                const res = await fetchContents(payload)

                console.log(res)

                const contents = res.data.data.postList

                commit('updateState', {
                    contents
                })

                console.log(contents)

            }catch (err) {
                console.log(err)
            }
            
            // const pageLength = 1

            // if (pageLength > 1) {
            //     for (let page = 2; page <= pageLength; page += 1) {
            //         if (page > (payload.number / 12)) break
            //         const res = await fetchContents(payload)
            //         const contents = res.data.postList
            //         commit('updateState', {
            //             contents: [...state.movies, ...contents]
            //         })
            //     }
            // }

        },

        // 사용자가 스크랩한 컨텐츠를 조회
        async searchScrapContents({commit}, payload){

            try{
                const res = await fetchScrapContents(payload)

                console.log(res)

                const scrapContents = res.data.data.scrapItemList

                commit('updateState', {
                    scrapContents
                })

                console.log(scrapContents)

            }catch (err){
                console.log(err)
            }
        },

        // 사용자가 작성한 컨텐츠를 조회 
        async searchUserContents({commit}, payload){
            try{
                const res = await fetchUserContents(payload)

                console.log(res)

                const userContents = res.data.data.scrapItemList

                commit('updateState', {
                    userContents
                })

                console.log(userContents)

            }catch (err){
                console.log()
            }
        },

    }
}