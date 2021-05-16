import Vue from "vue";
import { api } from "../global";

export const setTrade = ({ state }) => {
    Vue.http.put(api + '/tradeResult.json', {
        Purchase: state.Purchase,
        Sale: state.Sale
    }).then((response) => {
        console.log({
            Purchase: state.Purchase,
            Sale: state.Sale
        });
    })
}

export const getTrade = ({ commit }) => {
    Vue.http.get(api + '/tradeResult.json')
        .then((response) => {
            commit("updateTrade", {
               Purchase: response.body != null ? response.body.Purchase : 0,
               Sale: response.body != null ? response.body.Sale : 0,
           })
        })
}