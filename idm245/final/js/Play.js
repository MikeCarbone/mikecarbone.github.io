gameObj.Play = function (game) {
    var txScore;
    var timerText;
    var timerObj;
    var timerSeconds;
    var scoreText;
    var delayer = 0;
    var allRocks;
    var numHitsAllowed;
    var healthFill;
    var healthFillScaleX;
    var healthFillAddValue;
};

gameObj.Play.prototype = {
  create: function () {
    gameObj.gScore = 0;
    gameObj.gTime = "02:00";
    
    delayer = 0;
    allRocks = [];
    numHitsAllowed = 40;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    var spBackground = this.add.sprite(0, 0, 'background');
    
    var fire;
    var city = this.add.sprite(0, 546, 'city');

    var generalStyle = {
        width: '150px',
        font: '20px Permanent Marker',
        fill: 'black',
        align: 'left',
    };
   
    //let score = 2010;
    scoreText = this.add.text(70, 30, `Score: ${gameObj.gScore}`, generalStyle);
    scoreText.anchor.setTo(0.5, 0.5);

    //let timer = '1:04';
    timerText = this.add.text(this.world.centerX, 40, `${gameObj.gTime}`, generalStyle);
    timerText.anchor.setTo(0.5, 0.5);
    timerText.fontSize = '40px';

    var healthgreen = this.add.sprite(850, 30, 'healthgreen');
    healthgreen.anchor.setTo(0.5, 0.5);
    healthgreen.scale.setTo(0.9, 0.71);

    healthFillMaxX = 0.19;
    healthFillScaleX = 0;
    healthFillAddValue = healthFillMaxX / numHitsAllowed;
    //console.log('ADD VALUE 1: ', healthFillAddValue);

    healthFill = this.add.sprite(760, 13, 'background');
    healthFill.scale.setTo(healthFillScaleX, 0.045);

    var healthbar = this.add.sprite(850, 30, 'healthbox');
    healthbar.anchor.setTo(0.5, 0.5);
    healthbar.scale.setTo(0.9, 0.71);

    //Setup and start the countdown timer
    timerSeconds = 120; //1:10 = 70s
    
    //Create timer object
    timerObj = this.game.time.create(false);

    //Set timerevent to occur every one s
    timerObj.loop(1000, this.updateTimerFun, this);
    timerObj.start();
    
    music = this.add.audio('music');
    explosion1 = this.add.audio('explosion1');
    breakSound = this.add.audio('break');

    music.play();

  },

  winnerFun: function () {
    music.destroy();
     this.state.start('Win');
  },

  loserFun: function() {
    music.destroy();
  	this.state.start('Lose');
  },

  rockClick: function(rock){
    gameObj.gScore += 10;
    scoreText.text = `Score: ${gameObj.gScore}`;
    rock.loadTexture(rock.key + 'Burst');
    breakSound.play();
    setTimeout(function(){rock.destroy();}, 100);
  },

  updateTimerFun: function(){
    
    if (timerSeconds > 0) {
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
  },

  generateAsteroid: function(){
    var delayer;
    if (timerSeconds < 15){
      delayer = this.rnd.integerInRange(39, 44);
    } else if (timerSeconds < 60){
      delayer = this.rnd.integerInRange(15, 50);
    } else {
      delayer = this.rnd.integerInRange(1, 50);
    }
    
    var x = this.rnd.integerInRange(1, 810);
   
    if (delayer > 40){
      //console.log('Spawning rock...');
      let whichRock = this.rnd.integerInRange(1, 3);
      let selectedRock = 'rock' + whichRock;
      
      rock = this.add.sprite(x, -20, selectedRock);
      rock.animations.add('crush');
      let rockRotation = this.rnd.integerInRange(1, 360);
          rock.rotation = rockRotation;
          rock.inputEnabled = true;
          rock.events.onInputDown.add(this.rockClick, this);
    
      this.game.physics.arcade.enable(rock);

      let randomVeloX = this.rnd.integerInRange(-50, 50);
      let randomVeloY = this.rnd.integerInRange(30, 150);

      rock.body.velocity.x = randomVeloX;
      rock.body.velocity.y = randomVeloY;

      allRocks.push(rock);

    } else {
     // console.log('Waiting for rock to spawn...');
    }
  },

  update: function(){
    if (healthFillScaleX >= healthFillMaxX){
        this.loserFun();
    }

    allRocks.forEach(function(rock, index, obj){
      if (rock.position.y > 550){
        //Things to do when city is hit
        explosion1.play();
        
        healthFillScaleX += healthFillAddValue;
        healthFill.scale.setTo(healthFillScaleX, 0.045);
        
        gameObj.gScore -= 50;
        scoreText.text = `Score: ${gameObj.gScore}`;
        
        rock.loadTexture(rock.key + 'Burst');
        setTimeout(function(){rock.destroy();}, 100);

        obj.splice(index, 1);
      }

      if (rock.position.x <= 2) {
        rock.destroy();
      }

      if (rock.position.x >= 955){
        rock.destroy();
      }
    });
  
    delayer += 1;
    if (delayer > 5){
      this.generateAsteroid();
      delayer = 0;
    }
  },
};
