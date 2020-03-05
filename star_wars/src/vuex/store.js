import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        people: []
    },
    mutations:{
        SET_PEOPLES: (state, people) => {
            state.people = people
        }
    },
    actions: {
        GET_PEOPLES({commit}){
            return axios('https://swapi.co/api/people/?format=json', {
                method: "GET"
            })
                .then((people) => {
                    commit('SET_PEOPLES', people.data)
                    return people.data
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    },
    getters:{
        PEOPLES(state){
            return state.people
        }
    }
})
export default store