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
        ADD_TO_CART: (state, data) => {
            state.cart.push({
                id: data.id,
                price: data.price,
                title: data.title,
                quantity: 1,
            });
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
        getCartLength(state) {
            return state.cart.length;
        },
        getCart(state) {
            return state.cart;
        },
    },
});
