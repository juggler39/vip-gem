<template>
  <section class="main-game__wrapper">
    <div class="main-game" id="game-field">
      <svg
        class="game-field"
        width="81.397mm"
        height="81.397mm"
        version="1.1"
        viewBox="0 0 81.397 81.397"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          class="piece"
          x="10.623"
          y="16.643"
          width="6.3529"
          height="6.3529"
          stop-color="#000000"
        />
        <rect
          class="piece"
          x="29.499"
          y="49.532"
          width="6.3529"
          height="6.3529"
          stop-color="#000000"
        />
        <rect
          class="piece"
          x="48.286"
          y="28.287"
          width="6.3529"
          height="6.3529"
          stop-color="#000000"
        />
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default defineComponent({
  name: "MainGame",
  data: function () {
    return {
      gridWidth: 10,
      gridHeight: 10,
    };
  },
  mounted() {
    const gridContainer = document.getElementById("game-field");
    const gridWidth = this.gridWidth;
    const gridHeight = this.gridHeight;
    Draggable.create(".piece", {
      bounds: gridContainer,
      type: "x,y",
      edgeResistance: 1,
      liveSnap: true,
      cursor: "grab",
      snap: {
        x: function (endValue) {
          return Math.round(endValue / gridWidth) * gridWidth;
        },
        y: function (endValue) {
          return Math.round(endValue / gridHeight) * gridHeight;
        },
      },
    });
  },
});
</script>

<style lang="scss" scoped>
.main-game {
  position: relative;
  padding-top: 100%;
  width: 100%;
  background-image: url(~@/assets/img/main-game-frame.svg);
  background-position: center;
  &__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }
}

.game-field {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 6/4) {
  .main-game__wrapper {
    width: 100vh;
    flex-shrink: 0;
  }
}
</style>
