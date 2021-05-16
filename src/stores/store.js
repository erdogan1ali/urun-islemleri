import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product';
import * as  mutations from './mutations';
import * as  actions from './actions';
import * as  getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        Purchase: 0.0,
        Sale: 0.0,
        Balance: 0.0
    },
    modules: {
        product
    },
    mutations,
    actions,
    getters
});