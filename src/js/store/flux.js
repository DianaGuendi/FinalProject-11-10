import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			students: [
				{
					id: 1,
					name: "Daniel",
					companyID: 1
				},
				{
					id: 2,
					name: "Andres",
					companyID: 2
				},
				{
					id: 3,
					name: "Diana",
					companyID: 3
				}
			],
			quotes: [
				// {
				// 	id: 1,
				// 	userEmail: "koko@kiki.com",
				// 	cLength: 48,
				// 	Width: 40,
				// 	Height: 50,
				// 	Weight: 500,
				// 	Address: "8621 NW 15th St",
				// 	City: "Pembroke Pines",
				// 	state: "Florida",
				// 	zipcode: 33024
				// },
				// {
				// 	id: 2,
				// 	userEmail: "koko@kiki.com",
				// 	cLength: 48,
				// 	Width: 40,
				// 	Height: 60,
				// 	Weight: 800,
				// 	Address: "13022 SW 88th terr",
				// 	City: "Miami",
				// 	state: "Florida",
				// 	zipcode: 33186
				// },
				// {
				// 	id: 3,
				// 	userEmail: "koo@kiki.com",
				// 	cLength: 48,
				// 	Width: 40,
				// 	Height: 46,
				// 	Weight: 300,
				// 	Address: "12015 Main street ",
				// 	City: "Greenville ",
				// 	state: "South Carolina",
				// 	zipcode: 29614
				// }
			],
			currentUser: ""
		},
		actions: {
			setCurrentUser: email => {
				let store = getStore();
				store.currentUser = email;
				setStore(store);
				getActions().loadSomeData();
			},
			getStudents: () => {
				return getStore().students;
			},
			getStudent: id => {
				const students = getStore().students;
				id = parseInt(id);
				let student = {};

				students.forEach(element => {
					if (id == element.id) {
						student = element;
					}
				});

				return student;
			},
			addStudent: (name, course) => {
				console.log(name, course);
				const store = getStore();
				let slength = store.students.length;
				let lastID = store.students[slength - 1].id;

				let newStudent = { id: lastID + 1, name: name, companyID: course };
				store.students = [...store.students, newStudent];
				setStore(store);
				console.log(store);
			},

			getQuotes: () => {
				return getStore().quotes;
			},
			getQuote: id => {
				const quotes = getStore().quotes;
				id = parseInt(id);
				let quote = {};

				quotes.forEach(element => {
					if (id == element.id) {
						quote = element;
					}
				});

				return quote;
			},
			getQuotesByUser: email => {
				// GETS QUOTES BY USER EMAIL
				const quotes = getStore().quotes;
				// id = parseInt(id);
				let quote = {};
				let userQuotes = [];

				quotes.forEach(element => {
					if (email == element.useremail) {
						quote = element;
						userQuotes.push(quote);
					}
				});

				return userQuotes;
			},
			loadSomeData: () => {
				let store = getStore();
				let body = { email: store.currentUser };
				let url =
					"https://8080-d118460f-73f7-43cc-8374-bde70c8ac01f.ws-us03.gitpod.io/wp-json/sample_api/v1/quotes";

				if (store.currentUser !== "") {
					console.log(body);
					fetch(url, {
						method: "post",
						body: JSON.stringify(body)
					})
						.then(response => {
							if (response.status === 200) {
								return response.json();
							}
						})
						.then(jsonResponse => {
							console.log(jsonResponse);
							// getStore().quotes.push(jsonResponse);
							//SET the store with the quotes from the server
							store.quotes = jsonResponse;
							setStore(store);
						})
						.catch(error => {
							console.log(error);
						});
				}
			},

			addQuote: (cLength, Width, Heigth, Weight, Address, City, state, zipcode, userId) => {
				console.log(cLength, Width, Heigth, Weight, Address, City, state, zipcode, userId);
				const store = getStore();

				// let hlength = store.quotes.length;
				// let lastID = store.quotes[hlength - 1].id;
				//body of the request
				let newQuote = {
					title: "new quote",
					clength: cLength,
					width: Width,
					height: Heigth,
					weight: Weight,
					address: Address,
					city: City,
					state: state,
					zipcode: zipcode,
					useremail: userId
				};
				let url =
					"https://8080-d118460f-73f7-43cc-8374-bde70c8ac01f.ws-us03.gitpod.io/wp-json/sample_api/v1/quote";

				if (store.currentUser !== "") {
					// console.log(body);
					fetch(url, {
						method: "post",
						body: JSON.stringify(newQuote)
					})
						.then(response => {
							if (response.status === 200) {
								return response.json();
							}
						})
						.then(jsonResponse => {
							console.log(jsonResponse);
							// getStore().quotes.push(jsonResponse);
							//SET the store with the new quote and refresh
							store.quotes.push(newQuote);
							setStore(store);
						})
						.catch(error => {
							console.log(error);
						});
				}
				// store.quotes = [...store.quotes, newQuotes];
				// setStore(store);
				// console.log(store);
			}
		}
	};
};

export default getState;
