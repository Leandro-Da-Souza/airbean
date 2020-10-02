<template>
  <div class="home">
    <Cart />
    <div class="menu">
      pls work
      <ul>
        <li v-for="menu in getMenu" :key="menu.id">
          {{ menu }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart.vue";
import { mapGetters } from "vuex";

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
  created() {
    this.getMenu;
  },
};
</script>

<style scoped></style>
