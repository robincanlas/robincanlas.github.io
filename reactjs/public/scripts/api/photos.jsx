export const Photos = {
  photoAlbumUrl: 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=1bebc2dcb88a22bf64c2e90eb20dd3e5&user_id=43569478%40N04&format=json&nojsoncallback=1',
  get(callback) {
    fetch(this.photoAlbumUrl)
		.then(res => res.json())
		.then((result) => {
			if (result.stat === 'ok') {
        callback(result.photos.photo);
			}else{
				console.log('API STATUS NOT OK');			
			}
		}, (error) => {
			console.log('API ERROR', error)
		});
  }
};