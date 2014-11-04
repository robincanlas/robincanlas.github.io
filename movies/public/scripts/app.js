var App = new Marionette.Application();

App.addRegions({
	headerRegion: '#header-region',
	sidebarRegion: '#sidebar-region',
	mainRegion: '#main-region'
});

App.addInitializer(function(){	
	var searchView = new Search();
	App.headerRegion.show(searchView);
});

App.addInitializer(function(){
	var sidebars = new Sidebars([
		{name: 'Home', data:'data-home'},
		{name: 'Movies', data:'data-movies'},
		{name: 'Genres', data:'data-genres'},
		{name: 'Cinema', data:'data-cinema'},
		{name: 'Featured', data:'data-featured'},
		{name: 'Years', data:'data-years'},
		{name: 'Countries', data:'data-countries'},				
		{name: 'Languages', data:'data-languages'},
	]);

	this.sidebarView = new Names({collection:sidebars});
	App.sidebarRegion.show(this.sidebarView);
});

App.addInitializer(function(){	
	var that = this;
	this.listenTo(this.sidebarView, 'childview:show:genres', function(){
		var genresCollection = new genres([
			{type: 'Action', data:'data-action', id:'1'},
			{type: 'Horror', data:'data-horror', id:'2'},
			{type: 'Sci-Fi', data:'data-comedy', id:'3'},
			{type: 'Thriller', data:'data-thriller',id:'4'},
			{type: 'Adventure', data:'data-adventure',id:'5'},
			{type: 'Animation', data:'data-animation',id:'6'},
			{type: 'Comedy', data:'data-sci-fi',id:'7'},				
			{type: 'War', data:'data-war',id:'8'},
		]);
		this.genreView = new Genres({collection: genresCollection});
		App.mainRegion.show(this.genreView);
		this.listenTo(this.genreView, 'childview:filter:by:genre', function(iv){
			var genre = iv.model.get('id');
			var newMovieQuery = new Parse.Query(movie);
			newMovieQuery.descending('createdAt');
			newMovieQuery.equalTo('category', +genre);
			var newMovieList = newMovieQuery.collection();
			var defer = $.Deferred();
			newMovieList.fetch({
				success: function(data){
					defer.resolve(data);
				}
			});

			var newFetchedMovies = defer.promise();
			
			$.when(newFetchedMovies).done(function(data){
				this.collection = data;
				var moviesView = new Movies({collection: this.collection});
				App.mainRegion.show(moviesView);
			});
		});
	});
});

App.addInitializer(function(){	

});

App.on('start', function() {	
	// console.log('app start');
});

App.start();