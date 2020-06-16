var config = {
	type: Phaser.AUTO,
	width: 720,
	height: 1280,
	physics: {
	        default: 'arcade',
	        arcade: {
	            debug: false
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
	var fond;
	var verticalCamera;
	var cursors;
	var player;
	var lave;
	var cailloux;
	var mur;


function init() {

}

function preload()
{
	this.load.image('background','assets/Jeu2/routes.png');
	this.load.image('camion','assets/Jeu2/camion.png');
	this.load.image('cailloux','assets/Jeu2/pierre.png');
	this.load.image('lave','assets/Jeu2/Magma.png');
	this.load.image('sol','assets/Jeu2/sol.png');
	this.load.image('mur','assets/Jeu2/mur.png');
}


function create ()
{
	fond = this.add.image(360, -640,'background');


	player = this.physics.add.sprite(300,700,'camion').setScale(0.7);

	//Mur invisible
	mur = this.physics.add.staticGroup();
	mur.create(150, 0,'mur').setVisible(false);
	mur.create(570, 0,'mur').setVisible(false);

	mur.create(150, 720,'mur').setVisible(false);
	mur.create(570, 720,'mur').setVisible(false);

	mur.create(150, -1140,'mur').setVisible(false);
	mur.create(570, -1140,'mur').setVisible(false);

	mur.create(150, -1540,'mur').setVisible(false);
	mur.create(570, -1540,'mur').setVisible(false);

	lave = this.physics.add.staticGroup();
		lave.create(200, -440,'lave');
		lave.create(360, -50,'lave');
		lave.create(505, -1100,'lave');
		lave.create(200, -1700,'lave');
		lave.create(360, -2400,'lave');

	cailloux = this.physics.add.staticGroup();
		cailloux.create(505, 500,'cailloux');
		cailloux.create(360, -640,'cailloux');
		cailloux.create(200, -1000,'cailloux');
		cailloux.create(505, -2200,'cailloux');
		cailloux.create(360, -1600,'cailloux');

	this.physics.add.collider(player,mur);
	this.physics.add.collider(player,lave, hitObstacles, null, this);
	this.physics.add.collider(player,cailloux, hitObstacles, null, this);

	cursors = this.input.keyboard.createCursorKeys();



	this.cameras.main.setSize(720, 1280);
	verticalCamera = this.cameras.add(0, 60, 720, 1280);
	text2 = this.add.text(300, 100,"",{ font: "50px Arial", fill: "#FFF", backgroundColor:'black'	,align: "center" });
	textWin = this.add.text(250, 100,"",{ font: "60px Arial", fill: "#FF0000",align: "center" });
	this.timer = this.time.addEvent({ delay: 14000, callback: onEvent, callbackScope: this, loop: false });
	this.graphic = this.add.graphics();

	}

	function update(delta)
	{
		if(cursors.left.isDown){
			player.setVelocityX(-300);
		}else if(cursors.right.isDown){
			player.setVelocityX(300);
		}else{
			player.setVelocityY(-160);
			player.setVelocityX(0);
		}

	    verticalCamera.scrollY -= 2;
			if (verticalCamera.scrollY > 1)
    {
        verticalCamera.scrollY = -640;
    }

	this.graphic.clear();
	this.graphic.fillStyle(0xff0000);
	this.graphic.fillRect(10, 10, 520 - 520 * this.timer.getProgress(), 70);

}
function onEvent ()
{
	textWin.setText('VICTOIRE');
}
function hitObstacles (){
	this.physics.pause();
	player.setTint(0xff0000);
	gameOver = true;
	text2.setText('GAME OVER');
	this.timer.paused = true;

}
