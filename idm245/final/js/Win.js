gameObj.Win = function (game) {};

gameObj.Win.prototype = {
  create: function () {
    console.log('State - Win');
    var spBackground = this.add.sprite(0, 0, 'background');
          
    var city = this.add.sprite(0, 546, 'city');

    var generalStyle = {
        width: '150px',
        font: '34px Permanent Marker',
        fill: 'black',
        align: 'left',
    };

    var titleStyle = {
        width: '150px',
        font: '94px Permanent Marker',
        fill: 'black',
        align: 'left',
    };

    var detailStyle = {
        width: '150px',
        font: '25px Permanent Marker',
        fill: 'black',
        align: 'left',
    };

    var winText = this.add.text(this.world.centerX, 100, "Win!", titleStyle);
    winText.anchor.setTo(0.5, 0.5);

    var otherText = this.add.text(this.world.centerX, 175, "You saved the city!", generalStyle);
    otherText.anchor.setTo(0.5, 0.5);
      
    //let score = 124;
    var scoreText = this.add.text(this.world.centerX, 255, `Score: ${gameObj.gScore}`, detailStyle);
    scoreText.anchor.setTo(0.5, 0.5);
    
    //let time = '0:00';
    var timeText = this.add.text(this.world.centerX, 285, `Time remaining: ${gameObj.gTime}`, detailStyle);
    timeText.anchor.setTo(0.5, 0.5);
    
    //the number given are the indexes of the frame in this order: OVER, OUT, DOWN

    var replayButton = this.add.button(this.world.centerX, 370, 'replayButton', this.replayClick, this, 1, 0, 2);
    replayButton.anchor.setTo(0.5, 0.5);

    var homeButton = this.add.button(this.world.centerX, 450, 'homeButton', this.homeClick, this, 1, 0, 2);
    homeButton.anchor.setTo(0.5, 0.5);
    
  },

  homeClick: function(){
    this.state.start('Main');
  },

  replayClick: function(){
    this.state.start('Play');
  }
};
