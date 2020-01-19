import { Graphic } from '../classes/Graphic.js';
import { MultiPartGraphic } from '../classes/MultiPartGraphic.js';
import * as parts from './partialGraphics.js';

export const fighter_1_graphic = new Graphic([
  [[0, -2, 0], [0, 0, 0.5], [0, 1, 0], [0, 0, -0.5], [0, -2, 0]], // front to back shell
  [[1, 0, 0], [0, 0, 0.5], [-1, 0, 0], [0, 0, -0.5], [1, 0, 0]], // side to side shell
  [[0, -2, 0], [1, 0, 0], [0, 1, 0], [-1, 0,  0], [0, -2, 0]], // flat shell
], 2);

export const fighter_2_graphic = new Graphic([
  [[0, -2, 0], [0, 0, 0.5], [0, 1, 0], [0, 0, -0.5], [0, -2, 0]], // front to back shell
  [[2.5, 3, 0], [0, 0, 0.5], [-2.5, 3, 0], [0, 0, -0.5], [2.5, 3, 0]], // side to side shell
  [[0, -2, 0], [2.5, 3, 0], [0, 1, 0], [-2.5, 3,  0], [0, -2, 0]], // flat shell
], 2);

export const winged_1_graphic = new Graphic([
  // main body
  [[0, -2, 0], [0, 0, 0.5], [0, 1, 0], [0, 0, -0.5], [0, -2, 0]], // front to back shell
  [[1, 0, 0], [0, 0, 0.5], [-1, 0, 0], [0, 0, -0.5], [1, 0, 0]], // side to side shell
  [[0, -2, 0], [1, 0, 0], [0, 1, 0], [-1, 0,  0], [0, -2, 0]], // flat shell
  //left wing
  [[0.8, -2, 0], [0.8, 0, 0.5], [0.8, 1, 0], [0.8, 0, -0.5], [0.8, -2, 0]], // outline
  [[0.8, 1, 0], [1.8, 0, 0], [0.8, -2, 0]], // front to back
  [[0.8, 0, 0.5], [1.8, 0, 0], [0.8, 0, 0.5]], // top to bottom
  //right wing
  [[-0.8, -2, 0], [-0.8, 0, 0.5], [-0.8, 1, 0], [-0.8, 0, -0.5], [-0.8, -2, 0]], // outline
  [[-0.8, 1, 0], [-1.8, 0, 0], [-0.8, -2, 0]], // front to back
  [[-0.8, 0, 0.5], [-1.8, 0, 0], [-0.8, 0, 0.5]], // top to bottom
], 2);

export const beast_1_graphic = new Graphic([
  [[0, -1, 0], [4, -2, 0], [4, 4, 0], [0, 6, 0], [-4, 4, 0], [-4, -2, 0], [0, -1, 0]], // mid line
  [[0, -1, 0], [0, -2, 2], [0, 4, 2], [0, 6, 0], [0, 4, -2], [0, -2, -2], [0, -1, 0]],  //front to back
  [[0, -2, 2], [4, -2, 0], [0, -2, -2], [-4, -2, 0], [0, -2, 2]], //front ring
  [[0, 4, 2], [4, 4, 0], [0, 4, -2], [-4, 4, 0], [0, 4, 2]], //back ring
], 2);

export const beast_2_graphic = new Graphic([
  [[-5, 7, 0], [-5, 0, 0], [-4, -1, 0], [-4, -2, 0], [0, -1, 0], [4, -2, 0], [4, -1, 0], [5, 0, 0], [5, 7, 0]], // mid line
  [[0, -2, 2], [4, -2, 0], [0, -2, -2], [-4, -2, 0], [0, -2, 2]], //front ring
  [[0, -1, 0], [0, -2, 2], [0, 2, 2], [0, 4, 0], [0, 2, -2], [0, -2, -2], [0, -1, 0]],  //front to back
  [[4, -1, 0], [2, 0, 1], [2, 2, 1], [3, 3, 0.5], [5, 7, 0]],  // upper right wing
  [[4, -1, 0], [2, 0, -1], [2, 2, -1], [3, 3, -0.5], [5, 7, 0]], // lower right wing
  [[-4, -1, 0], [-2, 0, 1], [-2, 2, 1], [-3, 3, 0.5], [-5, 7, 0]],  // upper left wing
  [[-4, -1, 0], [-2, 0, -1], [-2, 2, -1], [-3, 3, -0.5], [-5, 7, 0]], // lower left wing
  [[2, 0, 1], [5, 0, 0], [2, 0, -1]], // right wing detail front
  [[-2, 0, 1], [-5, 0, 0], [-2, 0, -1]], // left wing detail front
  [[2, 3, 0], [3, 3, 0.5], [3, 3, -0.5], [2, 3, 0]], // right wing detail back
  [[-2, 3, 0], [-3, 3, 0.5], [-3, 3, -0.5], [-2, 3, 0]], // left wing detail back
  [[2, 3, 0], [0, 4, 0], [-2, 3, 0]], // back detail
  [[0, 2, 2], [2, 2, 1], [2, 3, 0], [2, 2, -1], [0, 2, -2], [-2, 2, -1], [-2, 3, 0], [-2, 2, 1], [0, 2, 2]], //back ring
], 2);

export const base_1_graphic = new MultiPartGraphic([
  {graphic: parts.base_room, z:  100},
  {graphic: parts.base_room, z:   90},
  {graphic: parts.base_room, z:   80},
  {graphic: parts.base_room, z:   70},
  {graphic: parts.base_room, z:   60},
  {graphic: parts.base_room, z:   50},
  {graphic: parts.base_room, z:   40},
  {graphic: parts.base_room, z:   30},
  {graphic: parts.base_room, z:   20},
  {graphic: parts.base_room, z:   10},
  {graphic: parts.base_room, z:    0},
  {graphic: parts.base_room, z:  -10},
  {graphic: parts.base_room, z:  -20},
  {graphic: parts.base_room, z:  -30},
  {graphic: parts.base_room, z:  -40},
  {graphic: parts.base_room, z:  -50},
  {graphic: parts.base_room, z:  -60},
  {graphic: parts.base_room, z:  -70},
  {graphic: parts.base_room, z:  -80},
  {graphic: parts.base_room, z:  -90},
  {graphic: parts.base_room, z: -100},
]);

// TODO: 3d-ify all the graphics below, and rescale

export const test_multi_ship = new MultiPartGraphic([
  {graphic: parts.box_graphic_test},
  {graphic: parts.front_graphic_test, y: -3, r: Math.PI * 1},
]);

export const turret_1_graphic = new Graphic([
  [[5, 5], [15, 5]], // detail front
  [[-5, 5], [-15, 5]], // detail front
  [[-5, -5], [-15, -15]], // detail back
  [[5, -5], [15, -15]], // detail back
  [[5, 35], [5, -5], [-5, -5], [-5, 35], [5, 35]], // turret rectangle
  [[5, 15], [15, 5], [15, -15], [-15, -15], [-15, 5], [-5, 15]], // outer layer
], 2);
