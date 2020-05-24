const state = {
    time: 10,
    difficulty: 'easy',
    win: false,
    lose: false,
}

const getters = {
    getTime: state => {
        return state.time;
    },
    getDifficulty: state => {
        return state.difficulty;
    },
    getWin: state => {
        return state.win;
    },
    getLose: state => {
        return state.lose;
    },
}

const mutations = {
    incrementTime: state => {
        console.log("called")
        if (state.difficulty == "easy") {
            if (state.time >= 95) {
                state.time = 100;
                state.win = true;
            } else {
                state.time += 5;
            }
        }
        else if (state.difficulty == "medium") {
            if (state.time >= 97) {
                state.time = 100;
                state.win = true;
            } else {
                state.time += 3;
            }
        }
        else if (state.difficulty == "hard") {
            if (state.time >= 98) {
                state.time = 100;
                state.win = true;
            } else {
                state.time += 2;
            }
        }
        else {
            console.log('err')
        }
    },
    timerTick: state => {
        state.time -= 1;
        if (state.time <= 0) {
            state.time = 0;
            state.lose = true;
        }
    },
    setDifficulty: (state, payload) => {
        state.difficulty = payload;
    },
    restartGame: state => {
        state.time = 90;
        state.win = false;
        state.lose =false;
        state.score = 0;
        state.username = '';
        state.difficulty = 'easy';
    },
}

const actions = {
    incrementTime: ({ commit }, payload) => {
        commit('incrementTime', payload);
    },
    setTime: ({ commit }, payload) => {
        commit('setTime', payload);
    },
    timerTick: ({ commit }) => {
        commit('timerTick');
    },
    restartGame: ({ commit }) => {
        commit('restartGame');
    },
    setDifficulty: ({ commit }, payload) => {
        commit('setDifficulty', payload);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}