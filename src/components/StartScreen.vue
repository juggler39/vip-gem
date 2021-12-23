<template>
  <inline-svg
    :src="require('../assets/img/frontpage.svg')"
    @loaded="svgLoaded()"
  />
  <div @click="openGameScreen" class="play-game">
    <div class="play-button"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InlineSvg from 'vue-inline-svg';
import { gsap } from 'gsap';

export default defineComponent({
  name: 'StartScreen',
  emits: ['startGame'],
  components: {
    InlineSvg
  },
  methods: {
    openGameScreen() {
      this.$emit('startGame', true);
    },
    svgLoaded() {
      const tl = gsap.timeline();
      gsap.set('.sunbeam', {
        opacity: 0
      });
      gsap.set('#logo, .play-game, .cloud', {
        scale: 0,
        transformOrigin: '50% 50%'
      });
      gsap.set('.tile', {
        y: 170
      });
      gsap.set('.gem', {
        opacity: 0
      });
      gsap.set('#earth', {
        y: 220
      });
      tl.to(
        '#earth',
        {
          y: 0,
          duration: 3
        },
        0
      )
        .to('.cloud', {
          opacity: 1,
          scale: 1,
          duration: 3,
          delay: -2
        })
        .to('.sunbeam', {
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          delay: -1
        })
        .to(
          '.tile',
          {
            y: 0,
            duration: 1,
            stagger: 0.1
          },
          '<'
        )
        .to(
          '.gem',
          {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'bounce.out'
          },
          '>-2'
        )
        .to(
          '#logo',
          {
            scale: 1,
            duration: 2,
            ease: 'bounce.out'
          },
          '>-2'
        )

        .to(
          '.play-game',
          {
            opacity: 0.9,
            scale: 1,
            duration: 1,
            ease: 'power4.out'
          },
          '>'
        );
    }
  }
});
</script>

<style lang="scss" scoped>
svg {
  height: 100vh;
  width: 100vw;
}
.play-button {
  background-image: url(~@/assets/img/play-button.svg);
  background-size: 95%;
  background-position: center;
  width: 100%;
  height: 100%;
}
.play-game {
  position: absolute;
  opacity: 0;
  width: 400px;
  max-width: 100%;
  height: 120px;
  background: repeating-linear-gradient(
    -45deg,
    red 0%,
    yellow 7.14%,
    lime 14.28%,
    aqua 21.42%,
    cyan 28.56%,
    blue 35.7%,
    magenta 42.84%,
    red 50%
  );
  border-radius: 100px;
  overflow: hidden;
  background-size: 600vw;
  animation: slide 10s infinite linear forwards;
  top: 55%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
  @keyframes slide {
    0% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: 600vw;
    }
  }
}
</style>
