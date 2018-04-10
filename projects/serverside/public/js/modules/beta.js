angular.module('module.beta', [])
.factory('beta', function() {
	return {
		setBeta: function(data) {
			this.beta = data;
		}
	};
})

.run(function(socket) {
	console.log('Connected to module Beta');
})