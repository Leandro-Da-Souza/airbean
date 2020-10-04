<template>
  <div class="about">
    <Cart />
    <Header />
    <h1>Vårt Kaffe</h1>
    <h5>
      Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds
      dripper, crema, strong whipped, variety extra iced id lungo half and half
      mazagran. Pumpkin spice.
    </h5>
    <p>
      Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
      aftertaste, con panna milk black, arabica white rich beans single shot
    </p>
    <p>
      Roast id macchiato, single shot siphon mazagran milk fair trade est aroma
      a half and half and, so, galão iced to go, whipped as cream cup pumpkin
      spice iced. At extra, rich grinder, brewed to go, steamed half and half
      at, that, percolator macchiato trifecta and body as arabica dripper.
    </p>
    <img src="../assets/graphics/eva-cortado.jpg" alt="" />
    <h3>Eva Cortado</h3>
    <span>VD & Grundare</span>
  </div>
</template>

<script>
import Header from "../components/Header";
import Cart from "../components/Cart";
export default {
  components: {
    Cart,
    Header,
  },
};
</script>

<style scoped>
@import "../assets/css/variables.css";

.about {
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
}

.about p,
h1,
h5 {
  margin: 10px;
  text-align: left;
}

img {
  border-radius: 50%;
}

.about h3,
p {
  text-align: center;
}

.about span {
  font-size: 0.8rem;
}
</style>
