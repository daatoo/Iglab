let container = document.getElementById("container");
let child = container.children;
let NumOfelements = child.length;
let NumOfScroll = Math.ceil(NumOfelements / 3);
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
let blurImage1 = document.getElementsByClassName("blurImage")[0]
let blurImage2 = document.getElementsByClassName("blurImage")[1]
blurImage1.addEventListener('mouseover', function (event) {
    blurImage1.children[1].classList.add("backdrop-filter", "backdrop-blur-[5px]")
    blurImage1.children[2].classList.remove("backdrop-filter", "backdrop-blur-[5px]", "bg-[#00000033]")
    blurImage1.children[2].classList.add("gap-2.5")
    blurImage1.children[2].children[1].classList.add("mb-3")
    blurImage1.children[2].children[2].classList.remove("hidden")
    blurImage1.children[2].children[2].classList.add("flex")
})
blurImage1.addEventListener('mouseout', function (event) {
    blurImage1.children[1].classList.remove("backdrop-filter", "backdrop-blur-[5px]")
    blurImage1.children[2].classList.add("backdrop-filter", "backdrop-blur-[5px]", "bg-[#00000033]")
    blurImage1.children[2].classList.remove("gap-2.5")
    blurImage1.children[2].children[1].classList.remove("mb-3")
    blurImage1.children[2].children[2].classList.add("hidden")
    blurImage1.children[2].children[2].classList.remove("flex")

})
blurImage2.addEventListener('mouseover', function (event) {
    blurImage2.children[1].classList.add("backdrop-filter", "backdrop-blur-[5px]")
    blurImage2.children[2].classList.remove("backdrop-filter", "backdrop-blur-[5px]", "bg-[#00000033]")
    blurImage2.children[2].classList.add("gap-2.5")
    blurImage2.children[2].children[1].classList.add("mb-3")
    blurImage2.children[2].children[2].classList.remove("hidden")
    blurImage2.children[2].children[2].classList.add("flex")

})
blurImage2.addEventListener('mouseout', function (event) {
    blurImage2.children[1].classList.remove("backdrop-filter", "backdrop-blur-[5px]")
    blurImage2.children[2].classList.add("backdrop-filter", "backdrop-blur-[5px]", "bg-[#00000033]")
    blurImage2.children[2].classList.remove("gap-2.5")
    blurImage2.children[2].children[1].classList.remove("mb-3")
    blurImage2.children[2].children[2].classList.add("hidden")
    blurImage2.children[2].children[2].classList.remove("flex")

})

let project = document.getElementById("project")
console.log(project)
project.addEventListener('mouseover', function(event){
    project.classList.remove("bg-white")
    project.classList.add("bg-[#FF6D00]")
    project.children[0].children[0].children[1].classList.remove("hidden")
    project.children[0].children[0].children[1].classList.add("flex")

    project.children[0].children[0].children[0].classList.add("hidden")
    project.children[0].children[0].children[0].classList.remove("flex")

    project.children[0].children[1].classList.remove("text-[#000000]")
    project.children[0].children[1].classList.add("text-white")

    project.children[2].children[0].classList.remove("text-[#000000]")
    project.children[2].children[0].classList.add("text-white")


})
project.addEventListener('mouseout', function(){
    project.classList.remove("bg-[#FF6D00]")
    project.classList.add("bg-white")
    project.children[0].children[0].children[1].classList.add("hidden")
    project.children[0].children[0].children[1].classList.remove("flex")

    project.children[0].children[0].children[0].classList.remove("hidden")
    project.children[0].children[0].children[0].classList.add("flex")

    project.children[0].children[1].classList.add("text-[#000000]")
    project.children[0].children[1].classList.remove("text-white")

    project.children[2].children[0].classList.add("text-[#000000]")
    project.children[2].children[0].classList.remove("text-white")
})

document.querySelectorAll('.trainings').forEach(item => {
    item.addEventListener('mouseover', function(event){
        item.classList.remove("bg-white")
        item.classList.add("bg-[#FF6D00]")

    
        item.children[0].children[1].classList.remove("text-[#000000]")
        item.children[0].children[1].classList.add("text-white")
    
        item.children[2].children[0].classList.remove("text-[#000000]")
        item.children[2].children[0].classList.add("text-white")
    
    
    })
    item.addEventListener('mouseout', function(){
        item.classList.remove("bg-[#FF6D00]")
        item.classList.add("bg-white")

    
        item.children[0].children[1].classList.add("text-[#000000]")
        item.children[0].children[1].classList.remove("text-white")
    
        item.children[2].children[0].classList.add("text-[#000000]")
        item.children[2].children[0].classList.remove("text-white")
    })
})