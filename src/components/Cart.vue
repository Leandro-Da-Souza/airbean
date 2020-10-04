<template>
  <div class="container" :class="this.showCart ? 'open' : 'shut'">
    <div class="imgWrapper" @click="this.showCart = !this.showCart">
      <img
        src="../assets/graphics/bag.svg"
        alt=""
        :class="getCartLength > 0 ? 'moveOverABit' : ''"
      />
      <p class="cartLength" v-if="getCartLength > 0">{{ getCartLength }}</p>
    </div>
    <transition name="fade" mode="out-in">
      <div class="modal-overlay" v-if="this.showCart" @click="toggleCart">
        <div class="modal">
          <h3>Din beställning</h3>
          <ul>
            <li v-for="item in getCart" :key="item.id">
              <div class="left">
                <h4>{{ item.title }}</h4>
                <span>{{ item.price }} kr</span>
              </div>
              <div class="right">
                <span>+</span>
                <p>{{ item.quantity }}</p>
                <span>-</span>
              </div>
            </li>
          </ul>
          <div class="total"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    ...mapGetters(["getCartLength", "getCart"]),
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped>
@import "../assets/css/variables.css";

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99;
  color: var(--paragraph-color);
}

.open {
  animation: openFromTop 0.7s ease;
  animation-fill-mode: forwards;
}

.shut {
  animation: shutFromBottom 0.7s ease;
  animation-fill-mode: forwards;
}

.imgWrapper {
  width: 50px;
  height: 50px;
  background-color: #222;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
  margin: 20px 10px 0 0;
}

.imgWrapper:hover {
  background-color: #111;
}
.imgWraper:focus {
  outline: none;
}

.moveOverABit {
  margin-left: 17px;
}

.modal-overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: absolute;
  bottom: 0px;
  width: 90%;
  height: 550px;
  background-color: whitesmoke;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.cartLength {
  color: whitesmoke;
  background-color: orange;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

ul li {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
}

.left {
  text-align: left;
}

@keyframes openFromTop {
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
}
@keyframes shutFromBottom {
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
}
</style>
