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

var pageWidth = getWidth();
var pageHeight = getHeight();
var containerWidth = pageWidth - (pageWidth % 50) - 50;
var containerHeight = pageHeight - (pageHeight % 50) - 100;
var numBlocksRow = containerWidth / 50;
var numBlocksCol = containerHeight / 50;
var numBlocks = numBlocksRow * numBlocksCol;

function setup() {
  var blockContainer = document.createElement("div");
  blockContainer.setAttribute("id", "blockContainer");
  blockContainer.style.width = containerWidth + "px";
  blockContainer.style.height = containerHeight + "px";
  var prevBlockContainer = document.getElementById("blockContainer");
  if (prevBlockContainer) {
    mainContainer.removeChild(prevBlockContainer);
  }

  for (var i = 0; i < numBlocks; i++) {
    var blockID = "b" + i;
    var newBlock = document.createElement("div");
    newBlock.classList.add("block");
    newBlock.setAttribute("id", blockID);
    newBlock.style.width = "48px";
    newBlock.style.height = "48px";
    // newBlock.style.position = "absolute";
    // newBlock.style.left = i * 31 + "px";
    // newBlock.style.top = i * 31 + "px";
    newBlock.style.border = "1px solid red";

    animateFunc(this.id);
    var animeID = "#" + blockID;
    // eslint-disable-next-line no-undef
    anime({
      targets: animeID,
      rotateY: "360deg",
      duration: 3000,
      // eslint-disable-next-line no-undef
      delay: anime.stagger(100),
    });

    blockContainer.appendChild(newBlock);
  }
  blockContainer.style.border = "5px solid white";

  mainContainer.appendChild(blockContainer);
}
function animateFunc(id) {
  var blockID = "";
  // eslint-disable-next-line no-undef
  anime({
    targets: blockID,
    rotateY: "360deg",
    duration: 3000,
    // eslint-disable-next-line no-undef
    delay: anime.stagger(100),
  });
}
