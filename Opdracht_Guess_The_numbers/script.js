function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("hallo").innerHTML =
            "Hey " + person;
    }
}



var pogingen = 5;

function nummerCheck() {
    var num = Math.floor(Math.random() * 25);
    myFunction();
    do {
        var raden = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
        if (raden > num) {
            pogingen--;
            alert("Dat is niet correct. Probeer een kleiner nummer. Je hebt nog zoveel pogingen:" + pogingen);

        }
        else if (raden < num) {
            pogingen--;
            alert("Dat is niet correct. Probeer een groter nummer. Je hebt nog zoveel pogingen:" + pogingen);
        }
    }
    while (raden != num) {
        alert("Gefeliciteerd je hebt gewonnen!");
        return (true);
    }

}
if (pogingen == 0) {
    alert("You have lost");
}

