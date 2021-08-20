<template>
  <section class="main-menu__wrapper">
    <div class="main-menu">
      <svg viewBox="0 0 85.2 9" xmlns="http://www.w3.org/2000/svg">
        <text
          style="line-height: 1.25; text-align: center"
          x="63"
          y="92.1"
          font-weight="400"
          font-size="10.6"
          font-family="sans-serif"
          text-anchor="middle"
          transform="translate(-21 -84)"
        >
          <tspan fill="#6ddcec">0</tspan>
        </text>
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainMenu",
});
</script>

<style lang="scss" scoped>
.main-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(~@/assets/img/main-menu.svg);
  background-position: center;
  background-size: 100%;
  &__wrapper {
    position: relative;
    padding-top: 25%;
    width: 100%;
  }
}
@media (min-aspect-ratio: 6/4) {
  .main-menu {
    max-height: 8vw;
    &__wrapper {
      max-width: 30%;
      margin-top: 5vh;
    }
  }
}
</style>
