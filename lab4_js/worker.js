var prev;
function updateDate() {
    const color_pool = ["red","green","blue","yellow","black","white","lightgrey"];
    var currentTime = new Date().toString();
    var colortext = color_pool[Math.floor(Math.random() * 6)];
    var colorbg = color_pool[Math.floor(Math.random() * 6)];
    if(colortext == colorbg || prev == colortext){
        colortext = color_pool[Math.floor(Math.random() * 6)];
    }
    postMessage([currentTime, colortext, colorbg]);
    prev = colortext;
    setTimeout(updateDate, 1000);
}
updateDate();
