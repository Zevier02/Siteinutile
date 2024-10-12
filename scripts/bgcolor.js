var checkBox = document.getElementById("color");
document.body.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
function a(){
    if(checkBox.checked){
        document.body.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
    else {
        document.body.style.background = "white"
    }
}
setInterval(a, 500)