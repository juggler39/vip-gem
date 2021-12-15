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
      field: this.$refs['game-field'] as HTMLElement,
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
  methods: {},
  mounted() {
    this.level.generate();
    const items = document.querySelectorAll('.piece');

    Draggable.create('.piece', {
      type: 'x,y',
      edgeResistance: 1,
      lockAxis: true,
      cursor: 'grab',
      onPress: function () {
        Draggable.get(this.target).applyBounds({
          minX: -this.target.offsetWidth,
          minY: -this.target.offsetHeight,
          maxX: this.target.offsetWidth,
          maxY: this.target.offsetHeight
        });
        this.startX = this.x;
        this.startY = this.y;
      },
      onDrag: function () {
        let i = items.length;
        while (--i > -1) {
          if (this.hitTest(items[i], 60)) {
            console.log('hit');
          }
        }
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
