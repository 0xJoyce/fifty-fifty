new p5(
  function p (p) {

    p.preload = function () {
      p.log("sketch_one: preload function.")
    }

    p.setup = function () {
      let canvasOne = p.createCanvas(400,400);
      canvasOne.parent("container_one");
      p.log("sketch_one: setup.");
      p.noLoop();
    }


    p.draw = function() {
      p.background("black");
      p.rect(200, 0, 200, 400);
      p.log("sketch_one: draw().");
    }

  }
)


