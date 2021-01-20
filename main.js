/* eslint-disable no-unused-vars */
var mainContainer = document.getElementById("mainContainer");

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
var numCol = 4;
var numPerCol = 10;
var fullScreen = false;
mainContainer.onclick = function() {
  if (fullScreen == false) {
    mainContainer.requestFullscreen();
    fullScreen = true;
    return;
  }
  if (fullScreen == true) {
    document.exitFullscreen();
    fullScreen = false;
    return;
  }
};

function setup() {
  var blockContainerV = document.createElement("div");
  blockContainerV.setAttribute("id", "blockContainerV");
  var prevBlockContainerV = document.getElementById("blockContainerV");
  if (prevBlockContainerV) {
    mainContainer.removeChild(prevBlockContainerV);
  }
  mainContainer.appendChild(blockContainerV);
  var pageWidth = getWidth();
  var pageHeight = getHeight();
  var blockWidth = 20;
  var borderWidth = 1;
  var numBlocksV = Math.round(pageWidth / (blockWidth + borderWidth * 2) - 1);
  console.log(pageWidth, blockWidth, numBlocksV);

  var backgroundColor;
  for (var i = 0; i < numBlocksV; i++) {
    var newBlockV = document.createElement("div");
    newBlockV.setAttribute("id", "b" + i);
    newBlockV.classList.add("block");
    newBlockV.classList.add("blockV");
    newBlockV.style.width = blockWidth + "px";
    newBlockV.style.height = pageHeight + "px";
    if (i % 2 == 0) {
      backgroundColor = "red";
    } else {
      backgroundColor = "blue";
    }
    newBlockV.style.backgroundColor = backgroundColor;
    blockContainerV.appendChild(newBlockV);
    if (i == numBlocksV - 1) {
      animate();
    }
  }

  // for (var n = 0; n < numCol; n++) {
  //   var newRow = document.createElement("div");
  //   newRow.setAttribute("id", "r" + n);
  //   newRow.classList.add("row" + n);
  //   newRow.classList.add("row");
  //   for (var i = 0; i < numPerCol; i++) {
  //     var newBlock = document.createElement("div");
  //     newBlock.setAttribute("id", "b" + i + "-" + n);
  //     newBlock.classList.add("block");
  //     newBlock.classList.add("block" + n);
  //     newRow.appendChild(newBlock);
  //   }
  //   blockContainer.appendChild(newRow);
  // }
}

function animate() {
  // eslint-disable-next-line no-undef
  const animationV = anime({
    targets: ".blockV",
    // eslint-disable-next-line no-undef
    scale: [
      { value: 0.5, easing: "easeOutSine", duration: 500 },
      { value: 0.95, easing: "easeInOutQuad", duration: 1200 },
    ],
    keyframes: [
      { translateX: -150, rotate: 90 },
      { translateX: 150, rotate: 180 },
      { translateX: 0, rotate: 360 },
      { rotate: 0 },
      {
        rotate: 90,
        // eslint-disable-next-line no-undef
        translateX: anime.stagger([-200, 200], { from: "center" }),
      },
      { translateX: 0, rotate: -90 },
    ],
    // eslint-disable-next-line no-undef
    delay: anime.stagger(7.5),
    // delay: anime.stagger(30, { from: "center" }),
    duration: 8000,
    loop: true,
    direction: "alternate",
  });

  var paused = false;
  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      if (paused == false) {
        animationV.pause();
        paused = true;
      } else {
        animationV.play();
        paused = false;
      }
    }
  });
}
