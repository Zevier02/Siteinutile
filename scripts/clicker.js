var z = 0
var zsec = 0
var esclco = 10
var resclco = 10
var reste = 0
var clickerpower = 1
var dcco = 100
var pescl = 0
var stagco = 100
var rstagco = 100
var pstag = 0
var gescl = 0.1
var gstag = 0.5
var foua = false
var fouco = 500

function Clicker(){
    z+=clickerpower
    document.getElementById('clickernb').innerHTML = z
}

function maj(){
    if(Math.floor(zsec/100) != zsec/100){
        z+=Math.floor(zsec/100)
        reste += zsec/100-Math.floor(zsec/100)
        while(reste > 1){
            z++
            reste-=1
        }
    }
    else {
        z+=zsec/100
    }
    document.getElementById('clickernb').innerHTML = z
}
setInterval(maj, 10)

function esclb(){
    if(z>=esclco){
        z-=esclco
        pescl++
        zsec=(zsec*10+gescl*10)/10
        esclco = Math.floor((resclco*12)/10)
        resclco = (resclco*12)/10
        document.getElementById('clickernbs').innerHTML = zsec
        document.getElementById('esclco').innerHTML = esclco
        document.getElementById('clickernb').innerHTML = z
        document.getElementById('pescl').innerHTML = pescl
        if(pescl >= 10 && !foua){
            document.getElementById("fou").style.display = "block"
            document.getElementById("foul").style.display = "block"
        }
    }
}

function stagb(){
    if(z>=stagco){
        z-=stagco
        pstag++
        zsec=(zsec*10+gstag*10)/10
        stagco = Math.floor((rstagco*12)/10)
        rstagco = (rstagco*12)/10
        document.getElementById('clickernbs').innerHTML = zsec
        document.getElementById('stagco').innerHTML = stagco
        document.getElementById('clickernb').innerHTML = z
        document.getElementById('pstag').innerHTML = pstag
    }
}

function dcb(){
    if(z>=dcco){
        z-=dcco
        clickerpower+=1
        document.getElementById("dc").style.display = "none"
        document.getElementById("dcl").style.display = "none"
    }
}
function foub(){
    if(z>=fouco){
        z-=fouco
        gescl+=0.1
        zsec = (gescl*pescl*100 + gstag*pstag*100)/100
        document.getElementById("fou").style.display = "none"
        document.getElementById("foul").style.display = "none"
        document.getElementById("gescl").innerHTML = gescl
        document.getElementById('clickernbs').innerHTML = zsec
        foua = true
    }
}