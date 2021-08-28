<template>
  <section class="game__wrapper">
    <div class="game">
      <div class="game__field" ref="game-field">
        <template v-for="(row, rowNumber) in level.tiles" :key="rowNumber">
          <div
            v-for="(piece, columnNumber) in row"
            :key="columnNumber"
            :class="'piece gem' + piece.gem"
            :style="{
              width: divWidth + '%',
              height: divHeight + '%',
              left: (rowNumber * 100) / columns + '%',
              top: (columnNumber * 100) / rows + '%'
            }"
          ></div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import Level from '@/services/Level';

gsap.registerPlugin(Draggable);

export default defineComponent({
  name: 'MainGame',
  data() {
    return {
      columns: 9,
      rows: 9,
      level: new Level(9, 9),
      pieceWidth: 0
    };
  },
  computed: {
    divWidth(): number {
      return 100 / this.columns;
    },
    divHeight(): number {
      return 100 / this.rows;
    },
    pieces(): number {
      return this.columns * this.rows;
    }
  },
  methods: {
    resizeWindow() {
      const field = this.$refs['game-field'] as HTMLElement;
      let fieldWidth = 0;
      if (field) fieldWidth = field.getBoundingClientRect().width;
      this.pieceWidth = fieldWidth / this.columns;
    }
  },
  mounted() {
    this.level.generate();
    console.log(this.level);

    Draggable.create('.piece', {
      type: 'x,y',
      edgeResistance: 1,
      lockAxis: true,
      cursor: 'grab',
      onPress: function () {
        let pieceWidth = 100;
        Draggable.get(this.target).applyBounds({
          minX: -pieceWidth,
          minY: -pieceWidth,
          maxX: pieceWidth,
          maxY: pieceWidth
        });
        this.startX = this.x;
        this.startY = this.y;
      },
      onDragEnd: function () {
        const target = this.target;
        Draggable.get(target).disable();
        gsap.to(target, {
          duration: 0.3,
          x: this.startX,
          y: this.startY,
          ease: 'bounce.out',
          onComplete: function () {
            Draggable.get(target).enable();
          }
        });
      }
    });
  },
  created() {
    window.addEventListener('resize', this.resizeWindow);
  },
  unmounted() {
    window.removeEventListener('resize', this.resizeWindow);
  }
});
</script>

<style lang="scss" scoped>
.game {
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
  &__field {
    position: absolute;
    top: 7.5%;
    left: 7.5%;
    width: 85%;
    height: 85%;
  }
}
.piece {
  position: absolute;
  background-size: 80%;
  background-position: center;
}

@for $i from 1 through 5 {
  .gem#{$i} {
    background-image: url(~@/assets/img/gem#{$i}.svg);
  }
}

@media (min-aspect-ratio: 6/4) {
  .game__wrapper {
    width: 100vh;
    flex-shrink: 0;
  }
}
</style>
