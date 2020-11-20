var movies = [
	{
		"Title": "Willow",
		"YouTubeId": "v=uzn2izehkno",
		"API": "http://www.omdbapi.com/?t=Willow&apikey=dab96338"
	},

	{
		"Title": "Up",
		"YouTubeId": "ORFWdXl_zJ4",
		"API": "http://www.omdbapi.com/?t=Up&apikey=dab96338"
	},
	{
		"Title": "The Lord of the Rings: The Fellowship of the Ring",
		"YouTubeId": "V75dMMIW2B4 ",
		"API": "http://www.omdbapi.com/?t=Lord+of+the+rings&apikey=dab96338"
	},
	{
		"Title": "The Princess Bride",
		"YouTubeId": "WNNUcHRiPS8",
		"API": "http://www.omdbapi.com/?t=The+princess+bride&apikey=dab96338"

	},
	{
		"Title": "Alice in Wonderland",
		"YouTubeId": "P_IVeP3i7B0",
		"API": "http://www.omdbapi.com/?t=Alice+in+wonderland&apikey=dab96338"
	},
	{
		"Title": "Indiana Jones and the Last Crusade",
		"YouTubeId": "v=Rh_BJXG1-44",
		"API": "http://www.omdbapi.com/?t=Indiana+jones&apikey=dab96338"
	}]

/*

let youtube = {
getIdFromUrl: function (YouTubeId) {
	if (YouTubeId.indexOf('http') === 0) {
		return YouTubeId.split('v=')[1];
	}
	else {
		return YouTubeId;
	}
},

generateThumbnailUrl: function(YouTubeId) {
	return 'http://i3.ytimg.com/vi/' + youtube.getIdFromUrl(YouTubeId) + '/default.jpg';
},

generateEmbedUrl: function (YouTubeId) {
	return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(YouTubeId);
}
};

*/

//finding the root element
const app = document.getElementById('root');

//creating an element for the logo
//const logo = document.createElement('img');
//logo.src = 'logo.png';

//creating a container element
const container = document.createElement('div');
container.setAttribute('class', 'container');

//attaching the logo and the container to the root element
//app.appendChild(logo);
app.appendChild(container);


movies.forEach(movie => {
	const video = document.createElement('div');
	video.setAttribute('class', 'trailer');

	//add title to the movie
	const h2 = document.createElement('h2');
	h2.textContent = movie.Title

	let div=document.createElement('div');
	div.setAttribute("id",movie.Title);
	let htmldiv=document.getElementById('movieInfo');
	htmldiv.appendChild(div);
	//get from API
	apiUrl = movie.API;
	fetch(apiUrl)

		.then(response => { return response.json(); })
		.then(data => {
			const h3 = document.createElement('h3');
			h3.textContent = data.Title;
			let div=document.getElementById(data.Title);
			div.appendChild(h3);
		})

		.catch(err => {
			// Do something for an error here
			const errorMessage = document.createElement('marquee');
			errorMessage.textContent = `Gah, it's not working!`;
			app.appendChild(errorMessage);
		})
});
