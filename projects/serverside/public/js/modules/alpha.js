angular.module('module.alpha', [])
.factory('alpha', function() {
	return {
		setAlpha: function(data) {
			this.alpha = data;
		}
	};
})

.run(function(socket) {
	console.log('Connected to module Alpha');
})