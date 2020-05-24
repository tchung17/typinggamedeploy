import Vue from 'vue';
import Vuex from 'vuex';
import score from './modules/score';
import time from './modules/time';
import username from './modules/username'
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        score,
        time,
        username
    }

});