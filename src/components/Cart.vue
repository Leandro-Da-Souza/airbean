<template>
  <div class="container" :class="this.showCart ? 'open' : 'shut'">
    <div class="imgWrapper" @click="this.showCart = !this.showCart">
      <img src="../assets/graphics/bag.svg" alt="" />
    </div>
    <transition name="fade" mode="out-in">
      <div class="modal-overlay" v-if="this.showCart">this is the cart vue</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      showCart: false,
    };
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
.modal-overlay {
  width: 100vw;
  height: 100vh;
  z-index: 999;
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
