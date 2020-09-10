<template>
  <div>
    <section class="wrapper">
      <img src="../assets/graphics/airbean-landing.svg" alt />
    </section>
  </div>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/home");
    }, 3000);
  },
};
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
  background-color: #42b890;
  background-image: url("../assets/graphics/intro-graphic-left.svg"),
    url("../assets/graphics/intro-graphic-right.svg");
  background-position: left, right;
  background-repeat: no-repeat, no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>