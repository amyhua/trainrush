app.directive('level', function(){
	return {
		restrict: 'EAC',
		link: function($scope, element, attrs){
			element.on('click', function(){
				$scope.level = Number(attrs.difficulty);
				$('game').addClass('active');
			});
		}
	}
});