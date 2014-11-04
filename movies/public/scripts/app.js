var App = new Marionette.Application();

// App = {
// 	home: function()
// }

var that = this;

var home = function(){
	var homeView = new HomeLayout();
	App.mainRegion.show(homeView);	

	// CINEMA REGION
	$.when(cinemaMoviesHome).done(function(){
		var cinemaCollection = cinemaMoviesHome;
		this.cinemaView = new Cinemas({collection: cinemaCollection});
		homeView.cinemaRegion.show(this.cinemaView);
	});

	// FEATURED REGION
	$.when(featuredMoviesHome).done(function(){
		var featuredCollection = featuredMoviesHome;
		this.featuredView = new Featureds({collection: featuredCollection});
		homeView.featuredRegion.show(this.featuredView);
	});
};

var filter = function(columnName, id){
	var moviePerYear = new Parse.Query(movie)
		.descending('createdAt')
		.include('test')
		.equalTo(columnName, id);
	var newList = moviePerYear.collection();
	var deferFilter = $.Deferred();
	newList.fetch({
		success: function(data){
			deferFilter.resolve(data);
		}
	});

	return deferFilter.promise();
};

var search = function(columnName, string){
	if ( columnName === 'name' ) {
		var query = new Parse.Query(movie)
			.descending('createdAt')
			.include('test')
			.matches(columnName, string);
	} else {
		// FOR SEARCHING INSIDE THE POINTER
		var innerQuery = new Parse.Query(information);
		innerQuery.matches(columnName, string);
		// console.log(innerQuery);
		var query = new Parse.Query(movie);
		query.matchesQuery("test", innerQuery);
		// console.log(query);
		query.find({
		  success: function(data) {}
		});
	}

	var movieList = query.collection();
	movieList.fetch();
	return movieList;
};

var showDetails = function(view){
	view.on('childview:show:details', function(iv){
		var detailsView = new Details({model: iv.model});
		App.mainRegion.show(detailsView);
	});
};

App.addRegions({
	headerRegion: '#header-region',
	sidebarRegion: '#sidebar-region',
	mainRegion: '#main-region'
});

// var x = function(string1){
// 	return function(string2){
// 		return function(string3){
// 			// console.log(string1, string2, string3);
// 		}
// 	}
// }

// HOME
App.addInitializer(function(){	
	home();
	showDetails(cinemaView);
	showDetails(featuredView);
});

// SEARCH
App.addInitializer(function(){	
	var searchView = new Search();
	App.headerRegion.show(searchView);

	this.listenTo(searchView,'search:movie', function(){
		var selectedOption = searchView.ui.select.val();
		var text = searchView.ui.input.val();
		var re = new RegExp(text, "i");
		if ( selectedOption === 'actor' ) {
			var test = new Parse.Query(actor)
				.descending('createdAt')
				.include('films')
				.matches('name', re);
			var fetchActors = test.collection();
			var defer = $.Deferred();
			fetchActors.fetch({
				success: function(data){
					defer.resolve(data);
				}
			});
			var x = defer.promise();
			var temp = [];
			$.when(x).done(function(data){
				data.map(function(model){
					var x = model.get('films');
					x.map(function(films){
						temp.push(films.toJSON());
					});
				});
				var collectionByActor = new Empty(temp);
				var moviesView = new Movies({collection: collectionByActor});
				App.mainRegion.show(moviesView);
				showDetails(moviesView);
			});
		}else{
			var moviesSearch = search(selectedOption, re);			
			$.when(moviesSearch).done(function(){
				this.collection = moviesSearch;
				var moviesView = new Movies({collection: this.collection});
				App.mainRegion.show(moviesView);
				showDetails(moviesView);
			});
		}
	});
});

// SIDEBAR
App.addInitializer(function(){
	this.sidebarView = new Names({collection:sidebars});
	App.sidebarRegion.show(this.sidebarView);
});

App.addInitializer(function(){	
	var that = this;
	
	this.listenTo(this.sidebarView, 'childview:show:home', function(){
		home();
		showDetails(cinemaView);
		showDetails(featuredView);
	});

	this.listenTo(this.sidebarView, 'childview:show:movies', function(){
		var fetchedMovies = defer.promise();

		$.when(movies).done(function(){
			this.collection = movies;
			this.moviesView = new Movies({collection: this.collection});
			App.mainRegion.show(this.moviesView);
		});

		showDetails(moviesView);
	});

	this.listenTo(this.sidebarView, 'childview:show:genres', function(){

		this.genreView = new Genres({collection: genresCollection});
		App.mainRegion.show(this.genreView);
	
		this.listenTo(this.genreView, 'childview:filter:by:genre', function(iv){
			var genre = iv.model.get('id');
			var newMovieList = filter('genre', +genre);			

			$.when(newMovieList).done(function(data){
				var collection = data;
				var moviesView = new Movies({collection: collection});
				App.mainRegion.show(moviesView);
				showDetails(moviesView);
			});
		});
	});

	this.listenTo(this.sidebarView, 'childview:show:cinema', function(){	
		$.when(cinemaMoviesHome).done(function(){
			var collection = cinemaMoviesHome;
			var moviesView = new Movies({collection: collection});
			App.mainRegion.show(moviesView);
			showDetails(moviesView);
		});
	});

	this.listenTo(this.sidebarView, 'childview:show:featured', function(){		
		$.when(featuredMoviesHome).done(function(){
			var collection = featuredMoviesHome;
			var moviesView = new Movies({collection: collection});
			App.mainRegion.show(moviesView);
			showDetails(moviesView);
		});
	});

	this.listenTo(this.sidebarView, 'childview:show:years', function(){
		var yearsView = new YearsView({collection: yearsCollection});
		App.mainRegion.show(yearsView);

		this.listenTo(yearsView, 'childview:filter:by:year', function(iv){
			var yearSelected = iv.model.get('year').toString();
			var fetchedMovies = filter('year', yearSelected);

			$.when(fetchedMovies).done(function(data){
				this.collection = data;
				var moviesView = new Movies({collection: this.collection});
				App.mainRegion.show(moviesView);
				showDetails(moviesView);
			});
		});
	});

	this.listenTo(this.sidebarView, 'childview:show:countries', function(){
		this.countryView = new CountriesCollection({collection: countryCollection});
		App.mainRegion.show(this.countryView);

		this.listenTo(this.countryView, 'childview:filter:by:country', function(iv){
			var countryId = iv.model.get('id');
			var fetchMovies = filter('country', countryId);
			
			$.when(fetchMovies).done(function(data){
				this.collection = data;
				var moviesView = new Movies({collection: this.collection});
				App.mainRegion.show(moviesView);
				showDetails(moviesView);
			});
		});
	});

	this.listenTo(this.sidebarView, 'childview:show:languages', function(){
		var countryView = new CountriesCollection({collection: languageCollection});
		App.mainRegion.show(countryView);
		countryView.on('childview:filter:by:country', function(iv){
			var languageId = iv.model.get('id');
			var fetchMovies = filter('language', languageId);
			
			$.when(fetchMovies).done(function(data){
				this.collection = data;
				var moviesView = new Movies({collection: this.collection});
				App.mainRegion.show(moviesView);
				showDetails(moviesView);
			});
		});
	});
});

App.on('start', function(){});

App.start();