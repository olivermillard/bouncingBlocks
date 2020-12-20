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
var blocksIdArray = [];
var pageWidth = getWidth();
var pageHeight = getHeight();
var containerWidth = pageWidth - (pageWidth % 50);
var containerHeight = pageHeight - (pageHeight % 50) - 50;
var numBlocksRow = containerWidth / 50;
var numBlocksCol = containerHeight / 50;
var numBlocks = numBlocksRow * numBlocksCol;
var marginWidth = (pageWidth % 50) + 50;
var marginHeight = (pageHeight % 50) / 2 + 50;

function setup() {
  var blockContainer = document.createElement("div");
  blockContainer.setAttribute("id", "blockContainer");
  blockContainer.style.width = "100%"; //containerWidth + "px";
  blockContainer.style.height = containerHeight + "px";
  var prevBlockContainer = document.getElementById("blockContainer");
  if (prevBlockContainer) {
    mainContainer.removeChild(prevBlockContainer);
  }

  var currRow = 1;
  for (var i = 0; i < numBlocks; i++) {
    var newBlock = document.createElement("div");
    newBlock.classList.add("block");
    newBlock.style.width = "48px";
    newBlock.style.height = "48px";
    newBlock.style.position = "absolute";
    var x = (i % numBlocksRow) + 1;
    var y;
    if (i % numBlocksRow == numBlocksRow - 1) {
      y = currRow;
      newBlock.style.top = currRow * 50 + "px";
      currRow += 1;
    } else {
      newBlock.style.top = currRow * 50 + "px";
      y = currRow;
    }
    var blockID = "b" + x + "-" + y;
    var xPos = (x - 1) * 50 + numBlocks / marginWidth;
    newBlock.style.left = xPos + "px";
    newBlock.style.border = "1px solid red";
    newBlock.setAttribute("id", blockID);
    blocksIdArray.push(blockID);
    blockContainer.appendChild(newBlock);
  }
  blockContainer.style.border = "5px solid white";
  mainContainer.appendChild(blockContainer);
  // animateFunc();
}

function animateFunc() {
  for (var i = 0; i < numBlocks; i++) {
    var animeID = "#" + blocksIdArray[i];
    // eslint-disable-next-line no-undef
    anime({
      targets: animeID,
      //delay: 1000 + i * 10,
      translateX: 10,
      //loop: true,
      duration: 3000,
      direction: "alternate",
    });
  }
}
