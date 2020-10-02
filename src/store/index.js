import { createStore } from 'vuex';

export default createStore({
    state: {
        menu: [],
        cart: [],
    },
    mutations: {
        SET_MENU: (state, data) => {
            state.menu = data;
        },
        SET_CART: (state, data) => {
            state.cart.push(data);
        },
    },
    actions: {
        async GET_MENU({ commit }) {
            const response = await fetch('http://localhost:5050/api/beans/');
            const data = await response.json();
            commit('SET_MENU', data);
            return true;
        },
    },
    modules: {},
    getters: {
        getMenu(state) {
            return state.menu;
        },
    },
});
