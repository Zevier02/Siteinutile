var scorebot = 0;
var score = 0;
var parties = 0;
function Play(what) {
var bot = Math.floor(Math.random() * 3);
    if(what == 1){
        if(bot == 0){
            document.getElementById('robot').innerHTML = "Toi : Pierre; Robot : Pierre, égalité."
        }
        else if(bot == 1){
            scorebot = scorebot + 1 * 1;
            document.getElementById('robot').innerHTML = "Toi : Pierre; Robot : Papier, défaite."
        }
        else if(bot == 2){
            score = score + 1 * 1;
            document.getElementById('robot').innerHTML = "Toi : Pierre; Robot : Ciseaux, victoire."
        }
    }

    if(what == 2){
        if(bot == 0){
            score = score + 1 * 1;
            document.getElementById('robot').innerHTML = "Toi : Papier; Robot : Pierre, victoire."
        }
        else if(bot == 1){
            document.getElementById('robot').innerHTML = "Toi : Papier; Robot : Papier, égalité."
        }
        else if(bot == 2){
            scorebot = scorebot + 1 * 1;
            document.getElementById('robot').innerHTML = "Toi : Papier; Robot : Ciseaux, défaite."
        }
    }
    if(what == 3){
        if(bot == 0){
            scorebot = scorebot + 1 * 1;
            document.getElementById('robot').innerHTML = "Toi : Ciseaux; Robot : Pierre, défaite."
        }
        else if(bot == 1){
            score = score + 1 * 1;
            document.getElementById('robot').innerHTML = "Toi : Ciseaux; Robot : Papier, victoire."
        }
        else if(bot == 2){
            document.getElementById('robot').innerHTML = "Toi : Ciseaux; Robot : Ciseaux, égalité."
        }
    }
document.getElementById('score').innerHTML = "Toi : " + score + "; Robot : " + scorebot;
parties += 1;
if(parties == 100){
    alert("Tu n'as pas quelque chose de mieux à faire que de faire 100 parties ?")
}
}