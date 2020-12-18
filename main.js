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
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setup() {
  var pageWidth = getWidth();
  var pageHeight = getHeight();

  var blockContainer = document.createElement("div");
  blockContainer.setAttribute("id", "blockContainer");

  var containerWidth = pageWidth - (pageWidth % 50) - 50;
  blockContainer.style.width = containerWidth + "px";
  var containerHeight = pageHeight - (pageHeight % 50) - 100;
  blockContainer.style.height = containerHeight + "px";

  var prevblockContainer = document.getElementById("blockContainer");
  if (prevblockContainer) {
    mainContainer.removeChild(prevblockContainer);
  }
  // numBlocksRow = containerWidth / 50;
  // numBlocksCol = containerHeight / 50;
  // numBlocks = numBlocksRow * numBlocksCol;

  for (var i = 0; i < 10; i++) {
    var newBlock = document.createElement("div");
    newBlock.className = "block";
    var blockID = "c" + i;
    newBlock.setAttribute("id", blockID);
    // newBlock.style.backgroundColor = colors[getRandomInt(colors.length)];
    // newBlock.style.border = "5px solid " + colors[getRandomInt(colors.length)];

    blockContainer.appendChild(newBlock);
  }
  blockContainer.style.border = "5px solid white";
  mainContainer.appendChild(blockContainer);
}

var block1 = document.getElementById("block1");

const animation = anime({
  targets: block1,
  translateX: 250,
  duration: 2000,
  direction: "alternate",
  loop: true,
});

animation.play();
