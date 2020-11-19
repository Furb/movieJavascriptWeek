var movies = {
	"Willow": {
		"Title": "Willow",
		"YouTubeId": "v=uzn2izehkno",
		"API": "http://www.omdbapi.com/?t=Willow&apikey=dab96338"
	},
	"UP": {
		"Title": "Up",
		"YouTubeId": "ORFWdXl_zJ4",
		"API": "http://www.omdbapi.com/?t=Up&apikey=dab96338"
	},
  	 "Lord of the Rings": {
		"Title": "Lord of the Rings",
		"YouTubeID": "V75dMMIW2B4 ",
		"API": "http://www.omdbapi.com/?t=Lord+of+the+rings&apikey=dab96338"
	},
  	"The Princess Bride": {
  		"Title": "The princess bride",
		"YouTubeId": "WNNUcHRiPS8",
		"API": "http://www.omdbapi.com/?t=The+princess+bride&apikey=dab96338"
		
	},
	"Alice in Wonderland": {
		"Title": "Alice in Wonderland",
		"YouTubeId": "P_IVeP3i7B0",
		"API": "http://www.omdbapi.com/?t=Alice+in+wonderland&apikey=dab96338"
	},
	"Indiana Jones": {
		"Title": "Indiana Jones",
		"YouTubeId": "v=Rh_BJXG1-44",
		"API": "http://www.omdbapi.com/?t=Indiana+jones&apikey=dab96338"
	},
};

let youtube = {
	getIdFromUrl: function (videoIdOrUrl) {
		if (videoIdOrUrl.indexOf('http') === 0) {
			return videoIdOrUrl.split('v=')[1];
		}
		else {
			return videoIdOrUrl;
		}
	},

	generateThumbnailUrl: function(videoIdOrUrl) {
		return 'http://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
	},

	generateEmbedUrl: function (videoIdOrUrl) {
		return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIdOrUrl);
	}
};
const app = document.getElementById("root")

//fetch the movies variable in this file
fetch(movies)
	.then(respnse => {
	return Response.json();
	})
//construct a div with the class trailer container
	.then(data => {
	data.forEach(movies => {
		const video = document.createElement('div');
		video.setAttribute('class', 'trailer');

		//add title to the movie
		const h2 = document.createElement('h2');
		h2.textContent = movies.Title
	
		video.appendChild(h2);
		

		
	
		
		})
	})
	.catch(err =>  {
	const errorMessage = document.createElement('marquee');
	errorMessage.textContent = "It's not working";
	app.appendChild(errorMessage);
	});