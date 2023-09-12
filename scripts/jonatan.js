function getValue() {
    var input = document.getElementById("jaune").value;

    if(input == "jonatan"){
        document.getElementById('reponse').innerHTML = input + " (gg tu as trouvé)";
    }
    else {
        document.getElementById('reponse').innerHTML = input + " (c'est pas ça c'est jonatan)";
    }
}