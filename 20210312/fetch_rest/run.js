const fetch = require("node-fetch");

const URL_USERS = "https://jsonplaceholder.typicode.com/users";
const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

const getData = (url) => fetch(url).then((response) => response.json());

const showUsers = async () => {
	let dataUser = await getData(URL_USERS);
	let dataPosts = await getData(URL_POSTS);

	let getUserPosts = (userID) => {
		return dataPosts.filter((i) => i.userId == userID);
	};

	let dataMerged = dataUser.map((i) => ({
		nom_utilisateur: i.username,
		ville: i.address.city,
		nom_compagnie: i.company.name,
		titres_posts: getUserPosts(i.id).map((i) => i.title),
	}));

	console.log(dataMerged);
};

showUsers();
