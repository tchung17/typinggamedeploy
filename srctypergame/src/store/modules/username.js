const state = {
    username: ''
}

const getters = {
    getUsername: state => {
        return state.username;
    }
}

const mutations = {
    setUsername: (state, payload) => {
        state.username = payload;
    }
}

const actions = {
    setUsername: ({ commit }, payload) => {
        commit('setUsername', payload);
    }
}

export default {
    state, 
    getters, 
    mutations,
    actions
}