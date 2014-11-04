var Details = Backbone.Marionette.ItemView.extend({
	template: '#details',
	templateHelpers: {
		movieDescription: function(){
			return this.description;
		},
		movieDirector: function(){
			return this.director;
		},
		movieDuration: function(){
			return this.duration;
		},
		movieGenre: function(){
			var movieGenre = this.genre;
			var temp = [];
			var genres = ['Action', 'Horror', 'Sci-fi', 'Thriller', 'Adventure', 'Animation', 'Comedy', 'War'];
			for(var i = 0; i < movieGenre.length; i++){
				var id = movieGenre[i];
				temp.push(genres[id-=1]);
			}
			return temp.join(', ');
		},
		movieCast: function(){
			return this.cast.join(', ');
		},
		movieCountry: function(){
			var country = ['US', 'UK', 'Japan'];
			var id = this.country;
			return country[id-=1];
		}
	},
	serializeData: function(){
		var data = this.model.toJSON();
		var info = this.model.get('test').toJSON();
		
		data.description = info.description;
		data.director = info.director;
		data.duration = info.duration
		
		return data;
	}
});