import { GameObject } from './GameObject.js';
import { Ai } from './Ai.js';

export class Ship extends GameObject {
  constructor(template, team) {
    super({
      graphic: template.graphic,
      color: team.color,
      scale: template.scale,
      behaviour: template.aiType,
    });

    this.team = team;

    // ship statistics
    this.speed = template.speed;
    this.rotationSpeed = template.rotationSpeed;

    this.shield = template.shieldMax;
    this.shieldMax = template.shieldMax;
    this.drop = template.drop;

    this.weapon = template.weapon;
    this.weaponCooldown = 0;

    // control systems
    this.movingForward = false;
    this.movingBackward = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.useWeapon = false;

    this.offset = 3.14159 * -0.5;
  }

  move() {
    if (this.movingForward) {
      this.Vx += Math.cos(this.r + this.offset) * this.speed;;
      this.Vy += Math.sin(this.r + this.offset) * this.speed;;
    }
    if (this.movingBackward) {
      this.Vx -= Math.cos(this.r + this.offset) * this.speed;;
      this.Vy -= Math.sin(this.r + this.offset) * this.speed;;
    }
    if (this.turningLeft) {
      this.Vr -= this.rotationSpeed;;
    }
    if (this.turningRight) {
      this.Vr += this.rotationSpeed;;
    }
  }

  weapons(game) {
    if (this.weapon !== null && this.useWeapon) {
      this.weapon(this, game);
    }
  }

  deathCheck(game) {
    if (this.shield <= 0) {
      game.gameLoop.unregisterObject(this);

      let drop = new GameObject(this.drop);
      drop.x = this.x;
      drop.y = this.y;
      game.gameLoop.registerObject(drop);
    }
  }

  run(game) {
    this.weapons(game);
    this.move();
    super.run(game);
    this.deathCheck(game); // needs to be last, may unregister ship
  }
}
