import { createStore } from 'vuex';

export default createStore({
    state: {
        menu: [],
        cart: [],
        order: {},
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
        ADD_QUANTITY: (state, item) => {
            let index = state.cart.findIndex((i) => i.id === item.id);
            state.cart[index].quantity++;
        },
        REMOVE_QUANTITY: (state, item) => {
            let index = state.cart.findIndex((i) => i.id === item.id);
            if (state.cart[index].quantity <= 1) {
                state.cart.splice(index, 1);
            } else {
                state.cart[index].quantity--;
            }
        },
        CLEAR_CART: (state) => {
            state.cart = [];
        },
        SET_ORDER: (state, data) => {
            state.order = data;
        },
    },
    actions: {
        async GET_MENU({ commit }) {
            const response = await fetch('http://localhost:5050/api/beans/');
            const data = await response.json();
            commit('SET_MENU', data);
            return true;
        },
        ADD_TO_CART_OR_QUANT({ state, commit }, data) {
            if (state.cart.find((i) => i.id === data.id)) {
                commit('ADD_QUANTITY', data);
            } else {
                commit('ADD_TO_CART', data);
            }
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
        getCartPrice(state) {
            let total = 0;
            state.cart.forEach((item) => {
                total += item.price * item.quantity;
            });
            return total;
        },
        getOrder(state) {
            return state.order;
        },
    },
});
