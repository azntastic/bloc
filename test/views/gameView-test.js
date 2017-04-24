"strict mode";

var GameView = require('../../src/views/gameView.js');

describe("GameView", function(){
var gameView;

beforeEach(function(){
  gameView = new GameView();
});

 it("exists", function(){
   expect(gameView).not.to.be.undefined;
  });

it("can return a canvas", function(){
  console.log(gameView.getCanvas());
  expect(gameView.getCanvas()).to.be.a('Canvas');
  });
});
