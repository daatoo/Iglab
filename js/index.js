let container = document.getElementById("container");
let child = container.children;
let NumOfNews = child.length;
let NumOfScroll = Math.ceil(NumOfNews / 3);
let html = document.getElementById("html");
let fullhtml = [];
let circle = document.getElementsByClassName("circle");
let scrolll = 0
// function for slider right click
function right() {
  scrolll += 1020
  if(scrolll >= NumOfScroll * 1020){
    scrolll = (NumOfScroll-1) * 1020
  }
  container.scrollLeft = scrolll
  let page = Math.ceil(container.scrollLeft / 1020) + 1;
  if (page > circle.length - 1) {
    page = circle.length - 1;
  }
}

// function for slider selft click
function left() {
  scrolll -= 1020
  if(scrolll <= 0){
      scrolll = 0
  }
  container.scrollLeft = scrolll
  let page = Math.ceil(container.scrollLeft / 1020) - 1;
  if (page < 0) {
    page = 0;
  }

}


