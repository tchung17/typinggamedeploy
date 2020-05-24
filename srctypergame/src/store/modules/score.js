const state = {
    score: 0
};

const getters = {
    getScore: state => {
        return state.score;
    },
}

const mutations = {
    incrementScore: state => {
        state.score += 1;
    },
}

const actions = {
    incrementScore: ({ commit }) => {
        commit('incrementScore');
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}