gameObj.Help = function (game) {};

gameObj.Help.prototype = {
  create: function () {
    console.log('State - Help');
    var spBackground = this.add.sprite(0, 0, 'background');
      
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

    var backButton = this.add.button(100, 50, 'backButton', this.actionOnClick, this, 1, 0, 2);
    backButton.anchor.setTo(0.5, 0.5);

   

    var helpText = this.add.text(this.world.centerX, 100, "Help", titleStyle);
    helpText.anchor.setTo(0.5, 0.5);
      
    var text1 = this.add.text(this.world.centerX, 255, `Score points by clicking and destroying asteroids`, detailStyle);
    text1.anchor.setTo(0.5, 0.5);

    var text2 = this.add.text(this.world.centerX, 355, `Lose points by letting asteroids hit the city`, detailStyle);
    text2.anchor.setTo(0.5, 0.5);

    var text2 = this.add.text(this.world.centerX, 455, `Win by defending the city until time runs out`, detailStyle);
    text2.anchor.setTo(0.5, 0.5);

    var check1 = this.add.sprite(100, 225, 'checkmark');

    var check2 = this.add.sprite(800, 225, 'checkmark');

    var x1 = this.add.sprite(100, 325, 'redx');

    var x2 = this.add.sprite(800, 325, 'redx');

    var trophy1 = this.add.sprite(100, 425, 'trophy');

    var trophy2 = this.add.sprite(800, 425, 'trophy');
    
  },
  
  actionOnClick: function () {
     console.log('actionOnClick called');
     this.state.start('Main');
  }
};
