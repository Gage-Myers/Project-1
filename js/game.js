var gameport = document.getElementById('gameport');

var renderer = PIXI.autoDetectRenderer(400,400, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture_player = PIXI.Texture.fromImage("../images/Character.png");

var player = new PIXI.Sprite(texture_player);

var texture_trophy = PIXI.Texture.fromImage("../images/Win.png");

var trophy = new PIXI.Sprite(texture_trophy);

player.anchor.x = 0.5;
player.anchor.y = 0.5;

trophy.anchor.x = 0.5;
trophy.anchor.y = 0.5;

player.position.x = 200;
player.position.y = 200;

trophy.position.x = 50;
trophy.position.y = 50;

stage.addChild(player);
stage.addChild(trophy);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}

animate();