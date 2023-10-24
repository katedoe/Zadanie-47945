let paragrafOpis = document.getElementById("opis");

const przyciskPokazOpis = document.querySelector("#pokazOpis");

function dodajOpis() {
    paragrafOpis.textContent = "Nowy teskt dodany jako opis produktu."
}

przyciskPokazOpis.onclick = dodajOpis;