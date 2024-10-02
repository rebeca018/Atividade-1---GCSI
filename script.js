function blurImage(element) {
    element.style.filter = "blur(5px)";
    element.style.transition = "filter 0.3s ease";
}

function resetBlur(element) {
    element.style.filter = "blur(0px)";
}
