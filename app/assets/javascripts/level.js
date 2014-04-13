app.directive('level', function(){
	return {
		restrict: 'EAC',
		link: function($scope, element, attrs){
			element.on('click', function(){
				$scope.level = Number(attrs.difficulty);
				console.log($scope.level);
				$('#game').addClass('active');
			});

			$.get('http://trainrush.dustcoin.com/api/line_leaders', function(data){
				debugger
			})
		}
	}
});