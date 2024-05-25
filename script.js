function oblicz() {
    var rodzaj = document.getElementById('rodzaj').value;
    var litry = document.getElementById('litry').value;
    var koszt = 0;
    
    if (rodzaj == 1) {
        koszt = litry * 4;
    } else if (rodzaj == 2) {
        koszt = litry * 3.5;
    }
    
    document.getElementById('wynik').innerHTML = "koszt paliwa: " + koszt + " zł";
}