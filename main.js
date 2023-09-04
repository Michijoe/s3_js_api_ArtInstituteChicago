import App from "./modules/App.js";

const mainEL = document.querySelector("main");
let app = new App(mainEL);
let params = new URLSearchParams(window.location.search);
let page;


////////////////////////////////////////////////////////////////////////////
// INITIALISATION 
// Appel de fetchData() de la page 1 du jeu de données ou selon ce qu'il y a
// dans les paramètres URL au chargement
if (params.has('page')) {
	page = params.get('page');
} else {
	page = '1';
	params.set('page', '1');
	history.pushState({}, "", `?${params.toString()}`);
}

app.fetchData(page);


////////////////////////////////////////////////////////////////////////////
// PAGINATION
// Attache un écouteur d'événement sur les boutons de pagination pour appeler
// la page correspondante du jeu de données
const paginationEls = document.querySelectorAll(".pagination button");
paginationEls.forEach(paginationEl => {
	paginationEl.style.cursor = "pointer";
	paginationEl.addEventListener("click", (e) => {
		page = e.target.innerText;
		app.fetchData(page);
		params.set('page', page);
		history.pushState({}, "", `?${params.toString()}`);
	})
});


////////////////////////////////////////////////////////////////////////////
// RECHERCHE
// Attache un écouteur d'évènement au contrôle de recherche. La valeur du
// contrôle est transmise à la méthode `searchPaintings` lorsque le bouton
// associée au contrôle est cliqué.

const searchInput = document.querySelector("#search input");
const searchButton = document.querySelector("#search button[type='submit']");
const resetSearchButton = document.querySelector(
	"#search button[type='reset']"
);

searchButton.addEventListener("click", (element) => {
	element.preventDefault();
	const searchString = searchInput.value;
	app.searchArts(searchString);
});

resetSearchButton.addEventListener("click", () => {
	app.searchArts("");
});