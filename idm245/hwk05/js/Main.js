gameObj.Main = function (game) {};

gameObj.Main.prototype = {
  create: function () {
    console.log('State - Main');
	
    var spBackground = this.add.sprite(0, 0, 'background');

    var city = this.add.sprite(0, 546, 'city');

    var generalStyle = {
          width: '150px',
          font: '34px Arial',
          fill: 'black',
          align: 'left',
    };

    var titleStyle = {
          width: '150px',
          font: '94px Cursive',
          fill: 'black',
          align: 'left',
    };

    var doodle = this.add.text(this.world.centerX, 100, "Doodle", titleStyle);
    doodle.anchor.setTo(0.5, 0.5);

    var defender = this.add.text(this.world.centerX, 200, "Defender", titleStyle);
    defender.anchor.setTo(0.5, 0.5);

    var helpButton = this.add.button(this.world.centerX, 330, 'helpButton', this.helpClick, this, 1, 0, 2);
    helpButton.anchor.setTo(.5, .5);
    helpButton.scale.setTo(.9, .85);
      
    //the number given are the indexes of the frame in this order: OVER, OUT, DOWN
    var playButton = this.add.button(this.world.centerX, 400, 'playButton', this.startClick, this, 1, 0, 2);


    playButton.anchor.setTo(0.5, 0.5);
  },
  
  startClick: function () {
     console.log('actionOnClick called');
     this.state.start('Play');
  },

  helpClick: function(){
    this.state.start('Help');
  },

  winClick: function(){
    this.state.start('Win');
  },

  loseClick: function(){
    this.state.start('Lose');
  }
};
