var config = {
	type: Phaser.AUTO,
	width: 720,
	height: 1280,
	scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

	var victoire = 0;
function init() {

}

function preload(){

	this.load.image('background','assets/Jeu1/Potager.png');
	this.load.image('plante11','assets/Jeu1/Plantes_1.png');
	this.load.image('plante12','assets/Jeu1/Plantes_1.png');
	this.load.image('plante13','assets/Jeu1/Plantes_1.png');
	this.load.image('plante14','assets/Jeu1/Plantes_1.png');
	this.load.image('plante15','assets/Jeu1/Plantes_1.png');
	this.load.image('plante16','assets/Jeu1/Plantes_1.png');
	this.load.image('plante17','assets/Jeu1/Plantes_1.png');
	this.load.image('plante18','assets/Jeu1/Plantes_1.png');

	this.load.image('plante21','assets/Jeu1/Plantes_2.png');
	this.load.image('plante22','assets/Jeu1/Plantes_2.png');
	this.load.image('plante23','assets/Jeu1/Plantes_2.png');
	this.load.image('plante24','assets/Jeu1/Plantes_2.png');
	this.load.image('plante25','assets/Jeu1/Plantes_2.png');
	this.load.image('plante26','assets/Jeu1/Plantes_2.png');
	this.load.image('plante27','assets/Jeu1/Plantes_2.png');
	this.load.image('plante28','assets/Jeu1/Plantes_2.png');

}


function create ()
{
	this.input.setDefaultCursor('url(assets/Jeu1/arro.cur), pointer');
	this.add.image(343,640,'background');
	//plantes
	var plante15 = this.add.image(270,430,'plante15').setScale(0.25).setVisible(true);
	var plante25 = this.add.image(270,430,'plante25').setScale(0.35).setInteractive().setVisible(false);

	var plante23 = this.add.image(250,530,'plante23').setScale(0.35).setInteractive();
	var plante13 = this.add.image(250,530,'plante13').setScale(0.25).setVisible(false);

	var plante24 = this.add.image(450,450,'plante24').setScale(0.35).setInteractive();
	var plante14 = this.add.image(450,450,'plante14').setScale(0.25).setVisible(false);

	var plante16 = this.add.image(500,780,'plante16').setScale(0.25).setVisible(true);
	var plante26 = this.add.image(500,780,'plante26').setScale(0.35).setInteractive().setVisible(false);

	var plante18 = this.add.image(250,640,'plante18').setScale(0.25).setVisible(true);
	var plante28 = this.add.image(250,640,'plante28').setScale(0.35).setInteractive().setVisible(false);

	var plante17 = this.add.image(480,550,'plante17').setScale(0.25).setVisible(true);
	var plante27 = this.add.image(480,550,'plante27').setScale(0.35).setInteractive().setVisible(false);

	var plante21 = this.add.image(250,780,'plante21').setScale(0.35).setInteractive();
	var plante11 = this.add.image(250,780,'plante11').setScale(0.25).setVisible(false);

	var plante22 = this.add.image(480,640,'plante22').setScale(0.35).setInteractive();
	var plante12 = this.add.image(480,640,'plante12').setScale(0.25).setVisible(false);

//Plante1
plante21.on('pointerdown', function (pointer) {

		this.destroy(true);
		plante11.setVisible(true);
		victoire += 1;
		plante16.setVisible(false);
		plante26.setVisible(true);


});
plante26.on('pointerdown', function (pointer) {

		this.destroy(true);
		plante16.setVisible(true);
		victoire += 1;
		plante17.setVisible(false);
		plante27.setVisible(true);

});
plante27.on('pointerdown', function (pointer) {

		this.destroy(true);
		plante17.setVisible(true);
		victoire += 1;

});
plante25.on('pointerdown', function (pointer) {

		this.destroy(true);
		plante15.setVisible(true);
		victoire += 1;

});
//Plante1
plante22.on('pointerdown', function (pointer) {

		this.destroy(true);
		plante12.setVisible(true);
		plante15.setVisible(false);
		plante25.setVisible(true);
		victoire += 1;

});
//Plante1
plante23.on('pointerdown', function (pointer) {

		this.destroy(true);
		plante13.setVisible(true);
		victoire += 1;

});
//Plante1
plante24.on('pointerdown', function (pointer) {

		this.destroy(true);
		plante14.setVisible(true);
		victoire += 1;
		plante18.setVisible(false);
		plante28.setVisible(true);
});
plante28.on('pointerdown', function (pointer) {

		this.destroy(true);
		plante18.setVisible(true);
		victoire += 1;

});
	text2 = this.add.text(200, 100,"",{ font: "50px Arial", fill: "#FFF", backgroundColor:'black'	,align: "center" });
	textWin = this.add.text(250, 100,"",{ font: "50px Arial", fill: "#FF0000",align: "center" });
	this.timer = this.time.addEvent({ delay: 5000, callback: onEvent, callbackScope: this, loop: false });
	this.graphic = this.add.graphics();

	}

function update(){
	this.graphic.clear();
	this.graphic.fillStyle(0xff0000);
	this.graphic.fillRect(10, 10, 520 - 520 * this.timer.getProgress(), 70);
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
