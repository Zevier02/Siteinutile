var z = 0
var zsec = 0
var esclco = 10
var resclco = 10
var reste = 0
var clickerpower = 1
var dcco = 100
var pescl = 0

function Clicker(){
    z+=clickerpower
    document.getElementById('clickernb').innerHTML = z
}

function gain(){
    if(Math.floor(zsec/1000) != zsec/1000){
        z+=Math.floor(zsec/1000)
        reste += zsec/1000-Math.floor(zsec/1000)
        while(reste > 1){
            z++
            reste-=1
        }
    }
    else {
        z+=zsec
    }
    document.getElementById('clickernb').innerHTML = z
}
setInterval(gain, 1)

function esclb(){
    if(z>=esclco){
        z-=esclco
        pescl++
        zsec=(zsec*10+1)/10
        esclco = Math.floor((resclco*12)/10)
        resclco = (resclco*12)/10
        document.getElementById('clickernbs').innerHTML = zsec
        document.getElementById('esclco').innerHTML = esclco
        document.getElementById('clickernb').innerHTML = z
        document.getElementById('pescl').innerHTML = pescl
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