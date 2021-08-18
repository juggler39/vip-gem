<template>
  <inline-svg
    :src="require('../assets/img/frontpage.svg')"
    @loaded="svgLoaded()"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InlineSvg from "vue-inline-svg";
import { gsap } from "gsap";

//Vue Class Component style
// import { Vue, Options } from "vue-class-component";
// @Options({
//   name: "StartScreen",
//   components: {
//     InlineSvg,
//   },
// })
// export default class StartScreen extends Vue {}

//normal style
export default defineComponent({
  name: "StartScreen",
  components: {
    InlineSvg,
  },
  methods: {
    svgLoaded() {
      const tl = gsap.timeline();
      gsap.set(".sunbeam", {
        opacity: 0,
      });
      gsap.set("#logo, #play-button", {
        scale: 0,
        transformOrigin: "50% 50%",
      });
      gsap.set(".tile", {
        y: 170,
      });
      gsap.set(".gem", {
        opacity: 0,
      });
      gsap.set(".cloud", {
        scale: 0,
        transformOrigin: "50% 50%",
      });
      gsap.set("#earth", {
        y: 220,
      });
      tl.to("#preloader", {
        opacity: 0,
        duration: 3,
        onComplete: this.removePreloader,
      })
        .to(
          "#earth",
          {
            y: 0,
            duration: 3,
          },
          0
        )
        .to(".cloud", {
          opacity: 1,
          scale: 1,
          duration: 3,
          delay: -2,
        })
        .to(".sunbeam", {
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          delay: -1,
        })
        .to(
          ".tile",
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
          },
          "<"
        )
        .to(
          ".gem",
          {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "bounce.out",
          },
          ">-2"
        )
        .to(
          "#logo",
          {
            scale: 1,
            duration: 2,
            ease: "bounce.out",
          },
          ">-2"
        )
        .to(
          "#play-button",
          {
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          ">-1"
        );
    },
    removePreloader() {
      const elem = document.getElementById("preloader");
      elem?.remove();
    },
  },
});
</script>

<style lang="scss" scoped>
svg {
  height: 100vh;
  width: 100vw;
}
</style>
