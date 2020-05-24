"use strict";
exports.__esModule = true;
var state = {
    time: 90,
    difficulty: 'easy',
    win: false,
    lose: false
};
var getters = {
    getTime: function (state) {
        return state.time;
    },
    getDifficulty: function (state) {
        return state.difficulty;
    },
    getWin: function (state) {
        return state.win;
    },
    getLose: function (state) {
        return state.lose;
    }
};
var mutations = {
    incrementTime: function (state) {
        console.log("called");
        if (state.difficulty == "easy") {
            if (state.time >= 95) {
                state.time = 100;
                state.win = true;
            }
            else {
                state.time += 5;
            }
        }
        else if (state.difficulty == "medium") {
            if (state.time >= 97) {
                state.time = 100;
                state.win = true;
            }
            else {
                state.time += 3;
            }
        }
        else if (state.difficulty == "hard") {
            if (state.time >= 98) {
                state.time = 100;
                state.win = true;
            }
            else {
                state.time += 2;
            }
        }
        else {
            console.log('err');
        }
    },
    timerTick: function (state) {
        state.time -= 1;
        if (state.time <= 0) {
            state.time = 0;
            state.lose = true;
        }
    },
    setDifficulty: function (state, payload) {
        state.difficulty = payload;
    },
    restartGame: function (state) {
        state.time = 90;
        state.win = false;
        state.lose = false;
        state.score = 0;
        state.username = '';
        state.difficulty = 'easy';
    }
};
var actions = {
    incrementTime: function (_a, payload) {
        var commit = _a.commit;
        commit('incrementTime', payload);
    },
    setTime: function (_a, payload) {
        var commit = _a.commit;
        commit('setTime', payload);
    },
    timerTick: function (_a) {
        var commit = _a.commit;
        commit('timerTick');
    },
    restartGame: function (_a) {
        var commit = _a.commit;
        commit('restartGame');
    },
    setDifficulty: function (_a, payload) {
        var commit = _a.commit;
        commit('setDifficulty', payload);
    }
};
exports["default"] = {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};
