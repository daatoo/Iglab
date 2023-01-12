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
    if (scrolll >= NumOfScroll * 1020) {
        scrolll = (NumOfScroll - 1) * 1020
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
    if (scrolll <= 0) {
        scrolll = 0
    }
    container.scrollLeft = scrolll
    let page = Math.ceil(container.scrollLeft / 1020) - 1;
    if (page < 0) {
        page = 0;
    }

}
let a = 0
let blurImage1 = document.getElementsByClassName("blurImage")[0]
let blurImage2 = document.getElementsByClassName("blurImage")[1]
blurImage1.addEventListener('mouseover', function (event) {
    blurImage1.children[1].classList.remove("hidden")
    blurImage1.children[2].classList.remove("backdrop-filter", "backdrop-blur-[5px]", "bg-[#00000033]")
    blurImage1.children[2].classList.add("gap-2.5")
    blurImage1.children[2].children[1].classList.add("mb-3")
    blurImage1.children[2].children[2].classList.remove("hidden")
    blurImage1.children[2].children[2].classList.add("flex")
    a++

})
blurImage1.addEventListener('mouseout', function (event) {
    a = 0
    blurImage1.children[1].classList.add("hidden")
    blurImage1.children[2].classList.add("backdrop-filter", "backdrop-blur-[5px]", "bg-[#00000033]")
    blurImage1.children[2].classList.remove("gap-2.5")
    blurImage1.children[2].children[1].classList.remove("mb-3")
    blurImage1.children[2].children[2].classList.add("hidden")
    blurImage1.children[2].children[2].classList.remove("flex")

})
blurImage2.addEventListener('mouseover', function (event) {
    blurImage2.children[1].classList.remove("hidden")
    blurImage2.children[2].classList.remove("backdrop-filter", "backdrop-blur-[5px]", "bg-[#00000033]")
    blurImage2.children[2].classList.add("gap-2.5")
    blurImage2.children[2].children[1].classList.add("mb-3")
    blurImage2.children[2].children[2].classList.remove("hidden")
    blurImage2.children[2].children[2].classList.add("flex")
    a++

})
blurImage2.addEventListener('mouseout', function (event) {
    a = 0
    blurImage2.children[1].classList.add("hidden")
    blurImage2.children[2].classList.add("backdrop-filter", "backdrop-blur-[5px]", "bg-[#00000033]")
    blurImage2.children[2].classList.remove("gap-2.5")
    blurImage2.children[2].children[1].classList.remove("mb-3")
    blurImage2.children[2].children[2].classList.add("hidden")
    blurImage2.children[2].children[2].classList.remove("flex")

})

