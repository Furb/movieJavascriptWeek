var movies = {
	"Willow": {
		"Name": "Willow"
		"YouTubeID": "v=uzn2izehkno"
	},
	"UP": {
		"Title": "Up",
		"YouTubeId": "ORFWdXl_zJ4"
	},
  	 "Lord of the Rings": {
		"Title": "Lord of the Rings",
		"YouTubeID": "V75dMMIW2B4 "
	},
  	"The Princess Bride": {
  		"Title": "The princess bride",
        		"YouTubeId": "WNNUcHRiPS8"
	},
	"Alice in Wonderland": {
		"Title": "Alice in Wonderland",
		"YouTubeId": "P_IVeP3i7B0"
	},
	"Indiana Jones": {
		"Name": "Indiana Jones"
		"YouTubeID": "v=Rh_BJXG1-44"
	},
};

fetch()
	.then(respnse => {
	return Response.json();
	})
	.then(data => {
	data.forEach(movies => {
		const card = document.createElement('div');
        card.setAttribute('class', 'trailer container');
		
	});
	})

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