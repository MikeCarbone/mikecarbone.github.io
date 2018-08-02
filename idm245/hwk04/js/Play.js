gameObj.Play = function (game) {};

gameObj.Play.prototype = {
  create: function () {
    var spBackground = this.add.sprite(0, 0, 'background');

    var city = this.add.sprite(0, 546, 'city');

    var generalStyle = {
        width: '150px',
        font: '20px Arial',
        fill: 'black',
        align: 'left',
    };
   
    let score = 2010;
    var scoreText = this.add.text(70, 20, `Score: ${score}`, generalStyle);
    scoreText.anchor.setTo(0.5, 0.5);

    let timer = '1:04';
    var timerText = this.add.text(this.world.centerX, 40, `${timer}`, generalStyle);
    timerText.anchor.setTo(0.5, 0.5);
    timerText.fontSize = '40px';

    var healthbar = this.add.sprite(850, 30, 'healthbar');
    healthbar.anchor.setTo(0.5, 0.5);

    var rock1 = this.add.sprite(230, 210, 'rock1');

    var rock2 = this.add.sprite(330, 10, 'rock2');

    var rock3 = this.add.sprite(30, 110, 'rock3');

    var rock4 = this.add.sprite(530, 310, 'rock1');

    var rock5 = this.add.sprite(20, 510, 'rock2');

    var rock6 = this.add.sprite(830, 310, 'rock3');

    var rock7 = this.add.sprite(720, 550, 'rock2');
    rock7.anchor.setTo(.5, .5);

    var contactRock7 = this.add.sprite(720, 550, 'contact');
    contactRock7.anchor.setTo(.5, .5);
    contactRock7.scale.setTo(.75, .75);

  },
  winnerFun: function () {
     console.log('winnerFun called');
  },

  loserFun: function() {
  	console.log('loserFun called');
  }
};
