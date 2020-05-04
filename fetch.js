// let pokemons = [];
let container = document.getElementById('container');
// console.log(container);
function fetchPokemons() {
	for (let i = 1; i < 201; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon-form/${i}/?limit`;
		fetch(url)
			.then((data) => data.json())
			.then((pokemon) => {
				let boxPoke = document.createElement('div');
				boxPoke.id = 'boxPoke';
				let title = document.createElement('h2');
				title.innerHTML = pokemon.name;
				boxPoke.appendChild(title);
				// console.log(boxPoke);
				let img = document.createElement('img');
				img.setAttribute('src', pokemon.sprites.front_shiny);
				boxPoke.appendChild(img);
				container.appendChild(boxPoke);
			})
			.catch((Error) => {
				console.log(`server response : ${Error}`);
			});
	}
}
fetchPokemons();

let histories = JSON.parse(localStorage.getItem('pokemons')) || [];
// console.log(histories)
