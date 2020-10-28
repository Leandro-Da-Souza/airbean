<template>
  <div class="checkout">
    <div class="order" v-if="orderData !== ''">
      <p>Ordernummer #{{ orderData.orderNr }}</p>
      <img src="../assets/graphics/drone.svg" alt="" />
      <h2>Din beställning är påväg!</h2>
      <p>{{ orderData.eta }} <span>minuter</span></p>
      <button @click="this.$router.push('/home')">Ok, cool!</button>
    </div>
    <div v-else-if="orderData === 'wait'">
      <p>Laddar din order</p>
    </div>
    <div v-else>
      <h2>Inga beställningar gjorda än!</h2>
      <button @click="this.$router.push('/home')">Go Back</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      orderData: "",
    };
  },
  methods: {
    async getData() {
      const response = await fetch("http://localhost:5000/api/beans/", {
        method: "POST",
      });

      const data = await response.json();
      this.orderData = data;
    },
  },
  computed: {
    ...mapGetters(["getCart", "getOrder"]),
  },
  async created() {
    if (this.getOrder === "order sent") {
      this.orderData = "wait";
      this.getData();
    } else {
      return;
    }
  },
};
</script>

<style scoped>
.checkout {
  width: 100vw;
  height: 100vh;
  background-color: #ff735b;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  color: whitesmoke;
}

.order {
  margin-top: 20px;
}

.checkout img {
  margin-top: 50px;
  margin-bottom: 30px;
}

.checkout button {
  margin-top: 10px;
  padding: 5px 10px;
  color: #333;
  background-color: whitesmoke;
}
</style>