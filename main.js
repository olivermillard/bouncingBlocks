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

  // for (var i = 0; i < 10; i++) {
  //   var newBlock = document.createElement("div");
  //   newBlock.className = "block";
  //   var blockID = "b" + i;
  //   newBlock.setAttribute("id", blockID);
  //   newBlock.style.border = "2px solid white";

  //   blockContainer.appendChild(newBlock);
  // }
  blockContainer.style.border = "5px solid white";
  mainContainer.appendChild(blockContainer);
  createBlock();
}
var counter = 0;
function createBlock() {
  var blockContainer = document.getElementById("blockContainer");
  var block = document.createElement("div");
  block.setAttribute("id", "b" + counter);
  block.className = "block";
  blockContainer.appendChild(block);
  var thisBlock = document.getElementById("b" + counter);
  // eslint-disable-next-line no-undef
  anime({
    targets: thisBlock,
    translateY: 270,
    rotate: anime.stagger([-360, 360]),
    duration: 100,
    complete: function() {
      if (counter < 10) {
        counter++;
        createBlock();
      } else {
        return;
      }
    },
  });
  blockContainer.appendChild(block);
}
