gameObj.Play = function (game) {
    var txScore;
    var timerText;
    var timerObj;
    var timerSeconds;
    var scoreText;
};

gameObj.Play.prototype = {
  create: function () {
    
    gameObj.gScore = 0;
    gameObj.gTime = "01:20"

    var spBackground = this.add.sprite(0, 0, 'background');

    var city = this.add.sprite(0, 546, 'city');

    var generalStyle = {
        width: '150px',
        font: '20px Arial',
        fill: 'black',
        align: 'left',
    };

    var pointButton = this.add.button(30, 400, 'playButton', this.pointsClicked, this, 1, 0, 2); 
    var pointText = this.add.text(30, 350, "POINT BUTTON", generalStyle);
   
    //let score = 2010;
    scoreText = this.add.text(70, 20, `Score: ${gameObj.gScore}`, generalStyle);
    scoreText.anchor.setTo(0.5, 0.5);

    //let timer = '1:04';
    timerText = this.add.text(this.world.centerX, 40, `${gameObj.gTime}`, generalStyle);
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


    //Setup and start the countdown timer
    timerSeconds = 80; //1:10 = 70s
    
    //Create timer object
    timerObj = this.game.time.create(false);

    //Set timerevent to occur every one s
    timerObj.loop(1000, this.updateTimerFun, this);
    timerObj.start();

  },
  winnerFun: function () {
     this.state.start('Win');
  },

  loserFun: function() {
  	this.state.start('Lose');
  },

  pointsClicked: function(){
    gameObj.gScore += 10;
    scoreText.text = gameObj.gScore;
    console.log('Points: ', gameObj.gScore);
  },

  updateTimerFun: function(){
    
    if (timerSeconds > 0) {
       // console.log(timerObj);
        //txTime.setText(timerObj);
        timerSeconds--;

        var displayMin = Math.floor(timerSeconds / 60) % 60;

        if (displayMin < 10){
            displayMin = '0' + displayMin;
        }

        var displaySec = Math.floor(timerSeconds) % 60;
        if (displaySec < 10) {
            displaySec = '0' + displaySec;
        }
        timerText.text = timerSeconds;
        timerText.text = `${displayMin}:${displaySec}`;
        gameObj.gTime =  timerText.text;
    } else {
      if (gameObj.gScore >= 100 ) {
        this.winnerFun();
      } else {
        this.loserFun();
      }
    }
  }
};
