/// Previously, sketch_one would never render, but sketch_two would.  The problem is that p5 files are global by default.  The result being that you can only run one becuase it attachs to the window object.  
/// So to have multiple sketches in one page, you need to make multiple instances of p5.  And you do it like this.
/// p is the new instance and so each time you are calling the methods on that instance.
/// Note: console.log works in global mode, but in this instance mode you need to just use log().

new p5(
  function p (p) {

    p.preload = function () {
      p.log("sketch_two: preload function.")
    }

    p.setup = function () {
      let canvasTwo = p.createCanvas(400,400);
      canvasTwo.parent("container_two");
      p.log("sketch_two: setup.");
      p.noLoop();
    }


    p.draw = function() {
      p.background("red");
      p.rect(200, 0, 200, 400);
      p.log("sketch_two: draw().");
    }

  }
)
