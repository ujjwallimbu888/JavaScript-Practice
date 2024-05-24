"use strict";

const canvas = document.getElementById("canvas1");
//! To draw in the canvas, we need to create a 2D context object which is returned by getContext or null if the context identifier isn't supported or the context has already been set to a different context mmode.
const ctx = canvas.getContext("2d");

// By default, canvas dimension is 300*150 px. And to ensure the output isn't distorted, we set the canvas value to the dimension we've set of the  HTML el.
const canvasWidth = (canvas.width = 600); //We don't have to mention, px because it's default.
const canvasHeight = (canvas.height = 600);
const playerImage = new Image(); //It's normal HTML img class constructor
playerImage.src = `/assets/shadow_dog.png`;
const spriteHeight = 523;
const spriteWidth = 575;
let frameX = 0;
let frameY = 2; //But we enounter a problem, the frameY value is different for each animation and the counter in the conditional statement
let gameFrame = 0;
const staggerFrames = 5;

/* Simpler Approach
const animate = function () {
  //In order to ensure the canvas is empty every time we draw
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  //ctx.fillRect(50, 50, 100, 100);
  //creating rectange at position 50,50 with 100*100px

  //# ctx.drawImage(playerImage, 0, 0, 500, 500); //the more control you want, the more arguments should be passed in
  //second TWO values: The canvas itself is 600*600 and the position we're in is 0*0
  //Third Two values: allows you magnify or zoom out on command
  //There's also sx, sy, sw, sh that you want to cut from the image and dx, dy, dw, dh which is of the destination.
  //The last 4 values work the same as only having 5 values as in the purple. But they're not used to position and stretch the entire element but only a certain cut out image.

  ctx.drawImage(
    playerImage,
    frameX * spriteWidth, //If I do this, I'm jumping one pixel to the Y-axis
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight,
  );

  //! Frame rate
  if (gameFrame % staggerFrames == 0) {
    if (frameX < 6) {
      frameX++;
    } else {
      frameX = 0;
    }
  }

  gameFrame++;
  requestAnimationFrame(animate); //This is a built in method that runs the function that we pass to it. This will create an infinite loop. However it may appear static, but it's because it's running this at extremely fast pace.
};

animate(); //The color always defaults black, unless otherwise specified.
 
*/
let playerState = "idle";
const select = document.querySelector(`.select`);
select.addEventListener("change", function () {
  playerState = select.value;
});

const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "gethit",
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };

  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

//! Advanced approach

const animate = function () {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations[playerState].loc.length;

  //The variables declared with the same name isn't necessary now.
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight,
  );
  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
