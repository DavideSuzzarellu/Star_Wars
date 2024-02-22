const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			films: [],
			filmsDetails: {},
			people: [],
			peopleDetails: [],
			planets: [],
			planetsDetails: [],
			species: [],
			speciesDetails: [],
			starships: [],
			starshipsDetails: [],
			vehicles: [],
			vehiclesDetails: [],
			favorites: [],
		},

		actions: {
			
			getFilms: async () => {
				const cachedData = localStorage.getItem('films');
				if (cachedData) {
				  setStore({ films: JSON.parse(cachedData) });
				  return;
				}			  
				const response = await fetch("https://www.swapi.tech/api/films");
				if (!response.ok) return response.status;			  
				const data = await response.json();
				setStore({ films: data.result });
				localStorage.setItem('films', JSON.stringify(data.result));
			},
			  
			getPeople: async () => {
			const cachedData = localStorage.getItem('people');
			if (cachedData) {
				setStore({ people: JSON.parse(cachedData) });
				return;
			}			  
			const response = await fetch("https://www.swapi.tech/api/people");
			if (!response.ok) return response.status;			  
			const data = await response.json();
			setStore({ people: data.results });
			localStorage.setItem('people', JSON.stringify(data.results));
			},

			getPlanets: async () => {
				const cachedData = localStorage.getItem('planets');				
				if (cachedData) {
					setStore({ planets: JSON.parse(cachedData) });
					return
				} else {
				const response = await fetch("https://www.swapi.tech/api/planets")
				if(!response.ok) return response.status
				const data = await response.json()
				setStore({ planets: data.results})
				localStorage.setItem('planets', JSON.stringify(data.results));
				}
			},

			getSpecies: async () => {
				const cachedData = localStorage.getItem('species');
				if (cachedData) {
					setStore({ species: JSON.parse(cachedData) });
					return;
				}
				const response = await fetch("https://www.swapi.tech/api/species");
				if (!response.ok) return response.status;
				const data = await response.json();
				setStore({ species: data.results });
				localStorage.setItem('species', JSON.stringify(data.results));
			},

			getStarships: async () => {
				const cachedData = localStorage.getItem('starships');
				if (cachedData) {
					setStore({ starships: JSON.parse(cachedData) });
					return;
				}
				const response = await fetch("https://www.swapi.tech/api/starships");
				if (!response.ok) return response.status;
				const data = await response.json();
				setStore({ starships: data.results });
				localStorage.setItem('starships', JSON.stringify(data.results));
			},

			getVehicles: async () => {
				const cachedData = localStorage.getItem('vehicles');
				if (cachedData) {
					setStore({ vehicles: JSON.parse(cachedData) });
					return;
				}
				const response = await fetch("https://www.swapi.tech/api/vehicles");
				if (!response.ok) return response.status;
				const data = await response.json();
				setStore({ vehicles: data.results });
				localStorage.setItem('vehicles', JSON.stringify(data.results));
			},

			getDetailsVehicles: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				if(!response.ok) return response.status
				const data = await response.json()
				setStore({ vehiclesDetails: data.result.properties })	
				console.log(getStore().vehiclesDetails)	
			},

			getDetailsStarships: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/starships/${id}`)
				if(!response.ok) return response.status
				const data = await response.json()
				setStore({ starshipsDetails: data.result.properties })	
			},

			getDetailsSpecies: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/species/${id}`)
				if(!response.ok) return response.status
				const data = await response.json()
				setStore({ speciesDetails: data.result.properties })	
			},
			
			getDetailsPlanets: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				if(!response.ok) return response.status
				const data = await response.json()
				setStore({ planetsDetails: data.result.properties })	
			},

			getDetailsPeople: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
				if(!response.ok) return response.status
				const data = await response.json()
				setStore({ peopleDetails: data.result.properties })	
			},

			getDetailsFilms: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/films/${id}`)
				if(!response.ok) return response.status
				const data = await response.json()
				setStore({ filmsDetails: data.result.properties })
			},

			handleErrorImg: (event) => {
				event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
			},

			getFavorites: () => {
				const favoritesFromLocalStorage = localStorage.getItem('favorites');
				const parsedFavorites = JSON.parse(favoritesFromLocalStorage);
				setStore({
				  favorites: parsedFavorites
				});
			  },

			addFavorites: (newFavorites) => {
				const store = getStore();		
				if (!store.favorites.includes(newFavorites)) {
				  const updatedFavorites = [...store.favorites, newFavorites];
				  setStore({ favorites: updatedFavorites });
				  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
				} else {
				  getActions().removeFavorites(newFavorites, store.favorites);
				}
			  },	

			removeFavorites: (item, array) => {
			const updatedFavorites = array.filter((element) => element !== item);
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
			setStore({ favorites: updatedFavorites });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
