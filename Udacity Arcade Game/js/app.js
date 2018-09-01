// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x; // position of enemy on x-axis
    this.y = y; // position of enemy on y-axis
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // reseting enemies position when it is out of canvas
    if(this.x > 505) {
      this.x = -80;
    }
    // setting up collision position
    if(player.x < this.x + 50 &&
      player.x + 40 > this.x &&
      player.y < this.y + 30 &&
      player.y + 25 > this.y) {
      player.sprite = 'images/enemy-bug.png';
      this.x = -80;

    //reseting the player position after collision
    setTimeout (() => {
      player.sprite = 'images/char-boy.png';
      player.x = 202;
      player.y = 410;
    }, 1);
  }
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Boss {
  constructor(x, y, speed) {
    this.x = x;          // setting up position of player(Boss) on x-axis
    this.y = y;          // setting up position of player(Boss) on y-axis
    this.speed = speed;  // setting up speed of player(Boss)
    this.sprite = 'images/char-boy.png';
  }
}

Boss.prototype.update = function(dt) {

};

Boss.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Boss.prototype.handleInput = function(keyPress){
  switch(keyPress){
    // player will move left side of the canvas
    case 'left':
    this.x -= this.speed;
    if(this.x < 0) {
      x.this = 0;
    }
    break;
    //player will move right side of the canvas
    case 'right':
    this.x += this.speed;
    if(this.x > 420) {
      this.x = 420;
    }
    break;
    // player will move upper side of the canvas
    case 'up':
    this.y -= this.speed;
    if(this.y < 0) {
        this.x = 202;
        this.y = 410;
       alert("Congratulations! You won the game."); // if player has reached in the water game will be over
      }
    break;
    //player will move down side of the canvas
    case 'down':
    this.y += this.speed;
    if(this.y > 410) {
      this.y = 410;
    }
    break;
    }
  };
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Boss(202, 410, 45); // Initial position of player and his speed
// list of all enemies
const allEnemies = [];
const enemy1 = new Enemy(-80, 60, 250);
const enemy2 = new Enemy(-80, 125, 400);
const enemy3 = new Enemy(-80, 150, 250);
const enemy4 = new Enemy(-80, 180, 500);
const enemy5 = new Enemy(-80, 240, 50);
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
