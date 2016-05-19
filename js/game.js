/*
  Project 1: Moon lander
  Author: Gag Myers
*/

var acceleration = .5;
var ast_arr = [];

var gameport = document.getElementById('gameport');

var renderer = PIXI.autoDetectRenderer(800,400, {backgroundColor: 0x0});
gameport.appendChild(renderer.view);


var stage = new PIXI.Container();

var ship = new PIXI.Sprite(PIXI.Texture.fromImage("../images/Ship.png"));

for (var i = 0; i < Math.floor((Math.random() * 10) + 50); i++) {
	var asteroid = new PIXI.Sprite(PIXI.Texture.fromImage("../images/Moon.png"));
	stage.addChild(asteroid);
	asteroid.anchor.x = 0.5;
	asteroid.anchor.y = 0.5;

	asteroid.position.x = Math.floor((Math.random() * 800) + 50);
	asteroid.position.y = Math.floor((Math.random() * 800) + 50);
	asteroid.scale.set(0.25,0.25);

	ast_arr.push(asteroid);
}

stage.addChild(ship);

ship.anchor.x = 0.5;
ship.anchor.y = 0.5;

ship.position.x = 0;
ship.position.y = 50;

ship.scale.set(0.5,0.5);

function isIntersecting(player,ast) {
	return !((ast.position.x + ast.width) > (player.position.x + player.width) || 

           (ast.position.x + ast.width) < (player.position.x + player.width) || 

           (ast.position.y - ast.height) > (player.position.y - player.height) ||

           (ast.position.y - ast.height) < (player.position.y - player.height));
}


function contains(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isIntersecting(ship, arr[i]) ) {
            return true;
        }
    }
    return false;
}


function keydownEventHandler(e) {
	if (e.keyCode == 81) {
		acceleration *= -1;
	}
}

document.addEventListener('keydown', keydownEventHandler);
function animate() {
	requestAnimationFrame(animate);

	if (contains(ast_arr)) {
		ship.position.x += 0;
		ship.position.y += 0;
	} else {
		ship.position.x += .75;
		ship.position.y += acceleration;
	}

	renderer.render(stage);
}

animate();