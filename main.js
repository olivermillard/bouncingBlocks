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

function setup() {
  var pageWidth = getWidth();
  var pageHeight = getHeight();

  var cubeContainer = document.createElement("div");
  cubeContainer.setAttribute("id", "cubeContainer");

  var containerWidth = pageWidth - (pageWidth % 50) - 50;
  cubeContainer.style.width = containerWidth + "px";
  var containerHeight = pageHeight - (pageHeight % 50) - 100;
  cubeContainer.style.height = containerHeight + "px";

  var prevcubeContainer = document.getElementById("cubeContainer");
  if (prevcubeContainer) {
    mainContainer.removeChild(prevcubeContainer);
  }
  numCubesRow = containerWidth / 50;
  numCubesCol = containerHeight / 50;
  numCubes = numCubesRow * numCubesCol;

  for (var i = 0; i < numCubes; i++) {
    var newCube = document.createElement("div");
    newCube.className = "cube";
    var cubeID = "c" + i;
    newCube.setAttribute("id", cubeID);
    newCube.style.backgroundColor = colors[getRandomInt(colors.length)];
    newCube.style.border = "5px solid " + colors[getRandomInt(colors.length)];
    var content = document.createElement("div");
    content.setAttribute("id", "i" + i);
    content.style.backgroundColor = colors[getRandomInt(colors.length)];
    content.style.border = "5px solid " + colors[getRandomInt(colors.length)];
    if (getRandomInt(2) == 0) {
      content.className = "circle";
    } else {
      content.className = "square";
    }
    newCube.appendChild(content);
    cubeContainer.appendChild(newCube);
  }
  cubeContainer.style.border = "5px solid white";
  mainContainer.appendChild(cubeContainer);
  setAnimations();
}

var cube1 = document.getElementById("cube1");

const animation = anime({
  targets: cube1,
  translateX: 250,
  duration: 2000,
  direction: "alternate",
  loop: true,
});

animation.play();
