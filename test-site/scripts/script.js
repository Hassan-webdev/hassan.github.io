let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let srcAttr = myImage.getAttribute("src");
  if (srcAttr === "images/hiroshima-bomb-pic-1.jpg") {
    myImage.setAttribute("src", "images/hiroshima-bomb-pic-2.jpg");
  } else {
    myImage.setAttribute("src", "images/hiroshima-bomb-pic-1.jpg");
  }
});

