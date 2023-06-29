export default class Art {
	#imageId;
	#title;
	#dimensions;
	#artist;

	/**
	 * Initialise les métadonnées de l'oeuvre selon l'objet reçu.
	 *
	 * @param {Object} art - Object contenant les métadonnées de l'oeuvre.
	 */
	constructor(art) {
		this.#imageId = art.image_id;
		this.#title = art.title;
		this.#dimensions = art.dimensions;
		this.#artist = art.artist_display;
	}


	/**
	 * Crée et retourne un élément `<article>` qui contient une image et les
	 * métadonnées de l'oeuvre.
	 *
	 * @returns {HTMLElement} - Un élément `<article>`.
	 */
	createArticleEl() {
		const articleEl = document.createElement("article");
		if (this.#imageId) {
			const imageEl = document.createElement("img");
			imageEl.src = `https://www.artic.edu/iiif/2/${this.#imageId}/full/843,/0/default.jpg`;
			imageEl.alt = `Poster image for ${this.#title}`;
			articleEl.appendChild(imageEl);
		}
		if (this.#title) {
			const titleEl = document.createElement("h2");
			titleEl.innerText = this.#title;
			articleEl.appendChild(titleEl);
		}
		if (this.#dimensions) {
			const dimensionsEl = document.createElement("span");
			dimensionsEl.innerText = `Dimensions: ${this.#dimensions}`;
			articleEl.appendChild(dimensionsEl);
		}
		if (this.#artist) {
			const artistEl = document.createElement("span");
			artistEl.innerText = `Artist: ${this.#artist}`;
			articleEl.appendChild(artistEl);
		}

		return articleEl;
	}
}
