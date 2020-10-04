<template>
  <div class="home">
    <Cart />
    <Header />
    <div class="menu">
      <h2>Meny</h2>
      <ul>
        <li
          class="menuItem"
          v-for="menuItem in getMenu.menu"
          :key="menuItem.id"
        >
          <div class="wrapper">
            <img
              src="../assets/graphics/add.svg"
              alt=""
              @click="addToCart(menuItem)"
            />
          </div>
          <div class="left">
            <h3>{{ menuItem.title }}..........</h3>
            <span>{{ menuItem.desc }}</span>
          </div>
          <h4>{{ menuItem.price }} kr</h4>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    Cart,
    Header,
    Footer,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getMenu", "getCart"]),
  },
  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    addToCart(item) {
      this.ADD_TO_CART(item);
      console.log(this.getCart);
    },
  },
  created() {
    this.getMenu;
  },
  updated() {},
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.wrapper img {
  background: #333;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
}

.menuItem {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
}

.left {
  text-align: left;
}
.menu {
  margin-top: 10px;
}

.menu h2 {
  font-family: Georgia, "Times New Roman", Times, serif;
  /* margin-bottom: 20px; */
}
</style>
