new p5(
  function p (p) {

    p.preload = function () {
      p.log("sketch_three: preload function.")
    }

    p.setup = function () {
      let canvasThree = p.createCanvas(400,400);
      canvasThree.parent("container_three");
      p.log("sketch_three: setup.");
      p.noLoop();   //This does not solve the instance issue but does stop it from rendering endlessly.
    }


    p.draw = function() {
      p.background("yellow");
      p.rect(200, 0, 200, 400);
      p.log("sketch_three: draw().");
    }

  }
)


