function novyCitat() {

    let citaty = [

        "Nikdy sa nevzdávaj.",
        "Každý deň je nová príležitosť.",
        "Ver si a dokážeš veľké veci.",
        "Úspech začína prvým krokom.",
        "Sny sa plnia tým, ktorí na nich pracujú.",
        "Buď lepší ako včera.",
        "Každá chyba je nová skúsenosť.",
        "Trpezlivosť prináša výsledky.",
        "Aj malý krok je pokrok.",
        "Odvaha je začiatok úspechu.",
        "Usmievaj sa na život.",
        "Nikdy nie je neskoro začať.",
        "Ver svojim schopnostiam.",
        "Nevzdávaj sa po prvom neúspechu.",
        "Každý deň sa môžeš zlepšiť.",
        "Tvrdá práca sa vyplatí.",
        "Pozitívne myslenie mení svet.",
        "Úspech patrí vytrvalým.",
        "Dnes je dobrý deň na nový začiatok.",
        "Rob to, čo ťa robí šťastným.",
        "Všetko je možné.",
        "Každý úspech začína rozhodnutím.",
        "Buď sám sebou.",
        "Život patrí odvážnym.",
        "Nájdi silu v sebe.",
        "Ver svojej ceste.",
        "Každá výzva ťa posúva vpred.",
        "Nestrácaj nádej.",
        "Mysli pozitívne.",
        "Úsmev je sila.",
        "Každý deň má svoj význam.",
        "Buď trpezlivý.",
        "Nezastavuj sa.",
        "Využi svoj potenciál.",
        "Úspech nie je náhoda.",
        "Nikdy neprestaň snívať.",
        "Dôležité je pokračovať.",
        "Si silnejší, než si myslíš.",
        "Každý cieľ je dosiahnuteľný.",
        "Ver v lepšie zajtrajšky."
    ];

    let nahodneCislo =
        Math.floor(Math.random() * citaty.length);

    document.getElementById("citat").innerHTML =
        '"' + citaty[nahodneCislo] + '"';
}
function toggleCitaty() {
    const sekcia = document.getElementById("oblubeneCitaty");
    const btn = document.getElementById("toggleBtn");

    if (sekcia.style.display === "none") {
        sekcia.style.display = "block";
        btn.innerHTML = '<i class="bi bi-chevron-up"></i>';
    } else {
        sekcia.style.display = "none";
        btn.innerHTML = '<i class="bi bi-chevron-down"></i>';
    }
}
function toggleFormular() {
    const form = document.getElementById("formularBox");
    const btn = document.getElementById("formBtn");

    if (form.style.display === "none") {
        form.style.display = "block";
        btn.innerHTML = '<i class="bi bi-eye-fill"></i> Skryť formulár';
    } else {
        form.style.display = "none";
        btn.innerHTML = '<i class="bi bi-eye-slash-fill"></i> Zobraziť formulár';
    }
}
function odoslatFormular(event) {
    event.preventDefault();

    const meno = document.getElementById("meno").value;

    alert("Ďakujeme, " + meno + "! 🙌\n\nĎakujeme, že ste sa podelili o svoj obľúbený citát. Vaša inšpirácia môže motivovať ostatných!");


    event.target.reset();
}
function searchCitaty() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const quotes = document.getElementsByClassName("quote-item");

    for (let i = 0; i < quotes.length; i++) {
        const text = quotes[i].innerText.toLowerCase();

        if (text.includes(input)) {
            quotes[i].style.display = "block";
        } else {
            quotes[i].style.display = "none";
        }
    }
}
let citaty = [
    "Nikdy sa nevzdávaj.",
    "Každý deň je nová príležitosť.",
    "Ver si a dokážeš veľké veci.",
    "Úspech začína prvým krokom.",
    "Sny sa plnia tým, ktorí na nich pracujú.",
    "Buď lepší ako včera.",
    "Každá chyba je nová skúsenosť.",
    "Trpezlivosť prináša výsledky.",
    "Aj malý krok je pokrok.",
    "Odvaha je začiatok úspechu.",
    "Usmievaj sa na život.",
    "Nikdy nie je neskoro začať.",
    "Ver svojim schopnostiam.",
    "Nevzdávaj sa po prvom neúspechu.",
    "Každý deň sa môžeš zlepšiť.",
    "Tvrdá práca sa vyplatí.",
    "Pozitívne myslenie mení svet.",
    "Úspech patrí vytrvalým.",
    "Dnes je dobrý deň na nový začiatok.",
    "Rob to, čo ťa robí šťastným.",
    "Všetko je možné.",
    "Každý úspech začína rozhodnutím.",
    "Buď sám sebou.",
    "Život patrí odvážnym.",
    "Nájdi silu v sebe.",
    "Ver svojej ceste.",
    "Každá výzva ťa posúva vpred.",
    "Nestrácaj nádej.",
    "Mysli pozitívne.",
    "Úsmev je sila.",
    "Každý deň má svoj význam.",
    "Buď trpezlivý.",
    "Nezastavuj sa.",
    "Využi svoj potenciál.",
    "Úspech nie je náhoda.",
    "Nikdy neprestaň snívať.",
    "Dôležité je pokračovať.",
    "Si silnejší, než si myslíš.",
    "Každý cieľ je dosiahnuteľný.",
    "Ver v lepšie zajtrajšky."
];


function searchCitaty() {

    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsBox = document.getElementById("searchResultsBox");
    let results = document.getElementById("searchResults");

    results.innerHTML = "";

    if (input === "") {
        resultsBox.style.display = "none";
        return;
    }

    let found = false;

    for (let i = 0; i < citaty.length; i++) {

        if (citaty[i].toLowerCase().includes(input)) {

            results.innerHTML += `
    <div class="card p-2 m-2">

        <p class="citat">"${citaty[i]}"</p>

        <button
            class="mojeTlacidlo mt-2"
            onclick="pridatKonkretnyCitat('${citaty[i]}')">

            <i class="bi bi-heart-fill"></i>
            Páči sa mi

        </button>

    </div>
`;

            found = true;
        }
    }

    if (!found) {
        results.innerHTML = `
            <p class="text">Žiadne citáty sa nenašli.</p>
        `;
    }

    resultsBox.style.display = "block";
}
let oblubeneCitaty = [];

function pridatOblubeny() {

    let text = document.getElementById("citat")
        .innerText
        .replace(/"/g, "");

    ulozCitat(text);
}

function pridatKonkretnyCitat(text) {

    ulozCitat(text);
}
function odstranitCitat(btn, text) {

    oblubeneCitaty =
        oblubeneCitaty.filter(citat => citat !== text);

    btn.closest(".col-md-4").remove();
}

function ulozCitat(text) {

    if (oblubeneCitaty.includes(text)) {
        return;
    }

    oblubeneCitaty.push(text);

    let container =
        document.getElementById("oblubeneContainer");

    container.innerHTML += `

    <div class="col-md-4">

        <div class="card p-3 h-100">

            <p class="citat">
                "${text}"
            </p>

            <button
                class="mojeTlacidlo mt-2"
                onclick="odstranitCitat(this, '${text}')">

                <i class="bi bi-heartbreak-fill"></i>
                Odstrániť

            </button>

        </div>

    </div>

`;
}

function toggleOblubene() {

    const sekcia =
        document.getElementById("oblubenePouzivatela");

    const btn =
        document.getElementById("toggleOblubeneBtn");

    if (sekcia.style.display === "none") {

        sekcia.style.display = "block";

        btn.innerHTML =
            '<i class="bi bi-chevron-up"></i>';

    } else {

        sekcia.style.display = "none";

        btn.innerHTML =
            '<i class="bi bi-chevron-down"></i>';
    }
}