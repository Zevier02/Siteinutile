var checkBox = document.getElementById("color");
var colors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
document.body.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
document.getElementById('shopt').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
document.getElementById('upgrades').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
document.getElementById('buildings').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
function a(){
    if(checkBox.checked){
        colors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
        document.body.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        document.getElementById('shopt').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
        document.getElementById('upgrades').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
        document.getElementById('buildings').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
    }
    else {
        document.body.style.background = "lightblue"
        document.getElementById('shopt').style = `border-color: blue; background: url("images/bgshop.png");`
        document.getElementById('upgrades').style = `border-color: gold;`
        document.getElementById('buildings').style = `border-color: grey;`
    }
}
setInterval(a, 500)