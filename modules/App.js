import Art from "./Art.js";

export default class App {
	data;
	#displayTarget;

	/**
	 *
	 * @param {HTMLElement} displayTarget - Élément dans lequel afficher le jeu
	 * de donnés.
	 */
	constructor(displayTarget) {
		this.#displayTarget = displayTarget;
	}


	////////////////////////////////////////////////////////////////////////////
	// FETCH API DONNEES
	/**
	 * Fetch le jeu de données de l'api de la page passée en paramètre et appelle
	 * la méthode displayArts()
	 * @param {String} page - Numéro de la page du jeu de données de l'api à afficher.
	 */
	async fetchData(page) {
		try {
			const url = `https://api.artic.edu/api/v1/artworks?page=${page}&fields=id,title,image_id,artist_display,dimensions&limit=10`;
			const res = await fetch(url);
			const json = await res.json();
			console.log(json);
			this.data = json.data;
			this.displayArts(this.data);
		} catch (error) {
			console.log(error);
		}
	}


	////////////////////////////////////////////////////////////////////////////
	// AFFICHAGE
	/**
	 * Instancie un nouvel object `Art` pour chaque oeuvre du jeu des données,
	 * et ajoute ceux-ci dans l'élément désiré.
	 *
	 * @param {String} page - Numéro de la page des données de l'api à afficher.
	 */
	displayArts(arts) {
		const divEl = document.createElement("div");
		divEl.setAttribute("class", "mosaic");

		for (const art of arts) {
			const artObj = new Art(art);
			const artArticleEl = artObj.createArticleEl();
			divEl.appendChild(artArticleEl);
		}
		this.#displayTarget.replaceChildren(divEl);
	}


	////////////////////////////////////////////////////////////////////////////
	// RECHERCHE
	/**
	 * Filtre le tableau `this.data` contenant les objets affichés `Art` selon la chaîne
	 * reçue, et affiche le résultat. La chaîne reçue ainsi que la valeur des
	 * propriétés ciblées sont converties en bas de casse.
	 *
	 * @param {String} searchString - Chaîne selon laquelle filter les oeuvres
	 * affichées.
	 */
	searchArts(searchString) {
		const formattedSearchString = searchString.toLowerCase().trim();
		const results = this.data.filter(
			(art) =>
				art.title.toLowerCase().includes(formattedSearchString)
		);

		this.displayArts(results);
	}
}