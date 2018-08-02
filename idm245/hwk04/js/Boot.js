var gameObj = {
  // Global variables are decleared here!
  gScore: 3770,
  gTime: "00:00"
};

gameObj.Boot = function (game) {};

gameObj.Boot.prototype = {
  preload: function () {
    console.log("State - Boot");	

  },
  create: function () {
    this.state.start('Preloader');
  }
};