import Tile from '@/types/Tile';
export default class Level {
  columns: number;
  rows: number;
  tiles: Tile[][];

  constructor(columns: number, rows: number) {
    this.columns = columns;
    this.rows = rows;
    this.tiles = [...Array(columns)].map(() => Array(rows).fill(0));
  }

  generate(): void {
    for (let i = 0; i < this.columns; i++) {
      for (let k = 0; k < this.rows; k++) {
        this.tiles[i][k] = {
          gem: Math.floor(1 + Math.random() * 5),
          bottom: 0
        };
      }
    }
  }
}
