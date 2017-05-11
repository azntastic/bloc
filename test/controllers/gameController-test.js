"strict mode";

var GameController = require('../../app/controllers/gameController.js');
var Shape = require('../../app/models/shape.js');
function GameViewDouble() {

}
GameViewDouble.prototype = {
  getCanvas: function(){
    return true;
  }
};

function GameDouble() {
  this.shapes = [];
}

GameDouble.prototype = {
  getShapes: function(){
    return true;
  },
  addShape: function(){
    return true;
  },
  deleteShape: function(coordinates){
    return true;
  },
  getScale: function(){
    return true;
  },
  clearShapes: function(){
    return true;
  },
  getSize: function(){
    return true;
  }
};

describe("GameController", function(){
  var gameController;
  var gameViewDouble;
  var gameDouble;

  beforeEach(function(){
    gameViewDouble = new GameViewDouble();
    gameDouble =  new GameDouble();
    gameController = new GameController(gameDouble, gameViewDouble);
  });

  it("exists", function(){
    expect(gameController).to.exist;
  });

  it("getAllShapes calls getShapes on game", function(){
    var spyGetShapes = sinon.spy(gameDouble, "getShapes");
    gameController.getAllShapes();
    expect(spyGetShapes).to.have.been.calledOnce;
  });

  it(".createShape returns a shape", function(){
    var spyAddShape = sinon.spy(gameDouble, "addShape");
    gameController.createShape();
    expect(spyAddShape).to.have.been.calledOnce;
  });

  it(".removeShape calls deleteShape on game", function(){
    var deleteSpy = sinon.spy(gameDouble, "deleteShape");
    gameController.removeShape(0,0,0);
    expect(deleteSpy).to.have.been.calledWith({x: 0, y: 0, z: 0});
    expect(deleteSpy).to.have.been.calledOnce;
  });

  it(".resetWorld calls clearShapes on game", function(){
    var resetSpy = sinon.spy(gameDouble, "clearShapes");
    gameController.resetWorld();
    expect(resetSpy).to.have.been.calledOnce;
  });

  it(".getGameSize calls getSize on game", function(){
    var sizeDouble = sinon.spy(gameDouble, "getSize");
    gameController.getGameSize();
    expect(sizeDouble).to.have.been.calledOnce;
  });

});
