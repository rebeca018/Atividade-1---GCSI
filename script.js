function zoomImage(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s ease";
}

function resetImage(element) {
    element.style.transform = "scale(0.9)";
}
