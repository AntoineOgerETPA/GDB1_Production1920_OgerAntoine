var config = {
	type: Phaser.AUTO,
	width: 720,
	height: 1280,
	physics: {
					default: 'arcade',
					arcade: {
						debug: false,
				 		gravity: { y: 0 }
					}
			},
	scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

	var victoire = 0;
	var lave;
	var cailloux1;
	var cailloux2;
	var cailloux3;
	var cailloux4;
	var caisse1;
	var caisse2;
	var caisse3
	var caisse4;
function init() {

}

function preload(){

	this.load.image('background','assets/Jeu3/Decors.png');
	this.load.image('caisse','assets/Jeu3/Caisse.png');
	this.load.image('cailloux','assets/Jeu3/Pierre.png');
	this.load.image('collisions1','assets/Jeu3/collisions.png');
	this.load.image('collisions2','assets/Jeu3/collisions.png');
	this.load.image('sol','assets/Jeu3/sol.png');
	this.load.image('mur','assets/Jeu3/mur.png');


}


function create ()
{
	this.add.image(360,640,'background');


	cailloux1 = this.physics.add.image(350, 70,'cailloux').setCollideWorldBounds(true);
	this.input.setDraggable(cailloux1.setInteractive());
	cailloux2 = this.physics.add.image(350, 540,'cailloux').setCollideWorldBounds(true);
	this.input.setDraggable(cailloux2.setInteractive());
	cailloux3 = this.physics.add.image(350, 830,'cailloux').setCollideWorldBounds(true);
	this.input.setDraggable(cailloux3.setInteractive());
	cailloux4 = this.physics.add.image(350, 990,'cailloux').setCollideWorldBounds(true);
	this.input.setDraggable(cailloux4.setInteractive());

	caisse1 = this.physics.add.image(350, 230,'caisse').setCollideWorldBounds(true);
	this.input.setDraggable(caisse1.setInteractive());
	caisse2 = this.physics.add.image(350, 380,'caisse').setCollideWorldBounds(true);
	this.input.setDraggable(caisse2.setInteractive());
	caisse3 = this.physics.add.image(350, 680,'caisse').setCollideWorldBounds(true);
	this.input.setDraggable(caisse3.setInteractive());
	caisse4 = this.physics.add.image(350, 1150,'caisse').setCollideWorldBounds(true);
	this.input.setDraggable(caisse4.setInteractive());


	this.input.on('dragstart', function (pointer, obj)
	{
			obj.body.moves = false;
	});

	this.input.on('drag', function (pointer, obj, dragX, dragY)
	{
			obj.setPosition(dragX, dragY);
	});

	this.input.on('dragend', function (pointer, obj)
	{
			obj.body.moves = true;
	});

	mur = this.physics.add.staticGroup();
	mur.create(500, 300,'mur').setVisible(false);
	mur.create(230, 300,'mur').setVisible(false);

	collisions1 = this.physics.add.staticGroup();
	collisions1.create(50, 1080,'collisions1').setVisible(false);
	collisions2 = this.physics.add.staticGroup();
	collisions2.create(690, 1080,'collisions2').setVisible(false);

	var sol = this.physics.add.staticGroup();
	sol.create(400, 1250,'sol').setVisible(false);



	this.physics.add.collider(cailloux1, collisions2, hitCaisse1, null, this);
	this.physics.add.collider(cailloux1,collisions1, hitCailloux1, null, this);

	this.physics.add.collider(cailloux2, collisions2, hitCaisse2, null, this);
	this.physics.add.collider(cailloux2,collisions1, hitCailloux2, null, this);

	this.physics.add.collider(cailloux3, collisions2, hitCaisse3, null, this);
	this.physics.add.collider(cailloux3,collisions1, hitCailloux3, null, this);

	this.physics.add.collider(cailloux4, collisions2, hitCaisse4, null, this);
	this.physics.add.collider(cailloux4,collisions1, hitCailloux4, null, this);

	this.physics.add.collider(caisse1, collisions2, hitCaisse11, null, this);
	this.physics.add.collider(caisse1,collisions1, hitCailloux11, null, this);

	this.physics.add.collider(caisse2, collisions2, hitCaisse22, null, this);
	this.physics.add.collider(caisse2,collisions1, hitCailloux22, null, this);

	this.physics.add.collider(caisse3, collisions2, hitCaisse33, null, this);
	this.physics.add.collider(caisse3,collisions1, hitCailloux33, null, this);

	this.physics.add.collider(caisse4, collisions2, hitCaisse44, null, this);
	this.physics.add.collider(caisse4,collisions1, hitCailloux44, null, this);



	text2 = this.add.text(200, 100,"",{ font: "50px Arial", fill: "#FFF", backgroundColor:'black'	,align: "center" });
	textWin = this.add.text(200, 100,"",{ font: "70px Arial", fill: "#FFF",align: "center" });
	this.timer = this.time.addEvent({ delay: 9000, callback: onEvent, callbackScope: this, loop: false });
	this.graphic = this.add.graphics();

	}

function update(){
	this.graphic.clear();
	this.graphic.fillStyle(0xff0000);
	this.graphic.fillRect(5, -70, 720 - 720 * this.timer.getProgress(), 100);
	if(victoire == 8)
	{
		this.timer.paused = true;
		textWin.setText('VICTOIRE');
		text2.destroy(true);
	}

}
function onEvent ()
{
	text2.setText('GAME OVER');
}
function hitCaisse1 () {
	cailloux1.destroy(true);
	this.timer.paused = true;
	text2.setText('GAME OVER');
}
function hitCailloux1 (){
	cailloux1.destroy(true);
	victoire +=1;
}

function hitCaisse2 () {
	cailloux2.destroy(true);
	this.timer.paused = true;
	text2.setText('GAME OVER');
}
function hitCailloux2 (){
	cailloux2.destroy(true);
	victoire +=1;
}

function hitCaisse3 () {
	cailloux3.destroy(true);
	this.timer.paused = true;
	text2.setText('GAME OVER');
}
function hitCailloux3 (){
	cailloux3.destroy(true);
	victoire +=1;
}

function hitCaisse4  () {
	cailloux4.destroy(true);
	this.timer.paused = true;
	text2.setText('GAME OVER');
}
function hitCailloux4 (){
	cailloux4.destroy(true);
	victoire +=1;
}



function hitCaisse11 () {
	caisse1.destroy(true);
	victoire +=1;
}
function hitCailloux11 (){
	caisse1.destroy(true);
	this.timer.paused = true;
	text2.setText('GAME OVER');
}
function hitCaisse22 () {
	caisse2.destroy(true);
	victoire +=1;
}
function hitCailloux22 (){
	caisse2.destroy(true);
	this.timer.paused = true;
	text2.setText('GAME OVER');
}

function hitCaisse33 () {
	caisse3.destroy(true);
	victoire +=1;
}
function hitCailloux33 (){
	caisse3.destroy(true);
	this.timer.paused = true;
	text2.setText('GAME OVER');
}

function hitCaisse44  () {
	caisse4.destroy(true);
	victoire +=1;
}
function hitCailloux44 (){
	caisse4.destroy(true);
	this.timer.paused = true;
	text2.setText('GAME OVER');
}
