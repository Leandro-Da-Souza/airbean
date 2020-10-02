<template>
  <div class="home">
    <Cart />
    <div class="menu">
      <ul>
        <li class="menuItem" v-for="menu in getMenu.menu" :key="menu.id">
          <div class="wrapper">
            <img src="../assets/graphics/add.svg" alt="" />
          </div>
          <div class="left">
            <h3>{{ menu.title }}........</h3>
            <span>{{ menu.desc }}</span>
          </div>
          <h4>{{ menu.price }} kr</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    Cart,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getMenu"]),
  },
  methods: {
    ...mapMutations(["SET_CART"]),
  },
  created() {
    this.getMenu;
    console.log(this.getMenu);
  },
};
</script>

<style scoped>
.home {
  z-index: 999;
}
.wrapper img {
  background: #333;
  width: 35px;
  height: 35px;
  border-radius: 50%;
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
  margin-top: 50px;
}
</style>
