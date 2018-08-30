gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
  preload: function () {
    console.log("State - Preloader");


    this.load.image('background', 'assets/background.png');

    this.load.image('city', 'assets/city.png');

    this.load.image('healthbox', 'assets/healthbox.png');

    this.load.image('healthgreen', 'assets/healthgreen.png');

    this.load.image('rock1Burst', 'assets/rock1_burst.png');

    this.load.image('rock2Burst', 'assets/rock2_burst.png');

    this.load.image('rock3Burst', 'assets/rock3_burst.png');

    this.load.image('contact', 'assets/contact.png');

    this.load.image('background', 'assets/background.png');

    this.load.spritesheet('backButton', 'assets/backarrow3.png', 85, 0);

    this.load.image('trophy', 'assets/trophy.png');

    this.load.image('checkmark', 'assets/checkmark.png');

    this.load.image('redx', 'assets/redx.png');

    this.load.image('city', 'assets/city.png');

    this.load.image('fire', 'assets/fire.png');

    this.load.image('smoke', 'assets/smoke.png');

    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

    this.load.spritesheet('playButton', 'assets/startbutton.png', 192, 0);

    this.load.spritesheet('replayButton', 'assets/replaybutton.png', 67, 0);

    this.load.spritesheet('homeButton', 'assets/homebutton.png', 196, 0);

    this.load.spritesheet('helpButton', 'assets/helpbutton.png', 196, 0);

    this.load.spritesheet('blankButton', 'assets/blank_button.png', 196, 0);

    this.load.spritesheet('rock1', 'assets/rock1_button.png', 109, 0, 2);

    this.load.spritesheet('rock2', 'assets/rock2_button.png', 54, 0, 2);
    
    this.load.spritesheet('rock3', 'assets/rock3_button.png', 48, 0, 2);

    this.load.audio('music', 'assets/stardust.mp3');

    this.load.audio('explosion1', 'assets/explosion1.mp3');

    this.load.audio('break', 'assets/break.mp3');

  },
  create: function () {
	this.state.start('Main');
  }
};