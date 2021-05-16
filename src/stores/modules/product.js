import Vue from 'vue';
import VueResource from 'vue-resource'

import { api } from '../../global';

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return key => state.products.filter(element => {
            return element.Id == key;
        })
    }
}

const mutations = {
    pushProduct(state, product) {
        state.products.push(product);
    }
}

const actions = {
    getProducts({ commit }, payload) {
        Vue.http.get(api + '/products.json')
            .then((response) => {
                let list = response.body;
                for (let i in response.body) {
                    list[i].Id = i;
                    commit("pushProduct", list[i]);
                }
            }).catch((e) => { console.log(e); })
    },
    saveProduct({ commit, dispatch }, product) {
        Vue.http.post(api + '/products.json', product)
            .then((response) => {
                console.log(response);
                product.Id = response.body.name;
                commit("pushProduct", product);
            })
            .catch((x) => {
                console.log(x);
            });
    },
    sellProduct({ commit, state }, payload) {
        let product = state.products.filter(element => {
            return element.Id == payload.key.Id;
        });

        if (product) {
            if (payload.count > product[0].Quantity) {
                alert("not enough quantity");
                return false;
            } else {
                product[0].Quantity -= payload.count;
                Vue.http.patch(api + '/products/' + product[0].Id + '.json', {
                    Quantity: product[0].Quantity
                })
                    .then((response) => {
                        return true;
                    })
                    .catch((x) => {
                        console.log(x);
                        alert("is Not Success");
                        return false;
                    });
                return true;
            }
        }
        else {
            alert("Product is not found");
            return false;
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}