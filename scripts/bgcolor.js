var checkBox = document.getElementById("color");
var colors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
document.body.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
document.getElementById('shopt').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
document.getElementById('upgrades').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
document.getElementById('buildings').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
document.getElementById('clickergame').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6);`
function a(){
    if(checkBox.checked){
        colors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
        document.body.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        document.getElementById('shopt').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6); background-color: rgba(255, 0, 0, .3)`
        document.getElementById('upgrades').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6); background-color: rgba(255, 215, 0, .3)`
        document.getElementById('buildings').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6); background-color: rgba(128, 128, 128, .3)`
        document.getElementById('clickergame').style = `border-color: rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .6); background-color: rgba(0, 0, 255, .3)`
    }
    else {
        document.body.style.background = "lightblue"
        document.getElementById('shopt').style = `border-color: red; background-color: rgba(255, 0, 0, .3)`
        document.getElementById('upgrades').style = `border-color: gold; background-color: rgba(255, 215, 0, .3)`
        document.getElementById('buildings').style = `border-color: grey; background-color: rgba(128, 128, 128, .3)`
        document.getElementById('clickergame').style = `border-color: blue; background: url("images/bgclicker.png");`
    }
}
setInterval(a, 500)