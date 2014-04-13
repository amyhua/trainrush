app.controller('gameController', function($scope, $http){
	$scope.user = 'Amy Hua';
	$scope.imageUrl = 'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn1/t1.0-9/17224_4448134324485_1278419956_n.jpg';
	$scope.challenges = [
		{ word: "狗a", options: [
			{ option: "a", correct: true},
			{ option: "b", correct: false},
			{ option: "c", correct: false}
		] },
		{ word: "狗b", options: [
			{ option: "a", correct: true},
			{ option: "b", correct: false},
			{ option: "c", correct: false}
		] },
		{ word: "狗c", options: [
			{ option: "a", correct: true},
			{ option: "b", correct: false},
			{ option: "c", correct: false}
		] }
	];

	$scope.bingo = false;
	$scope.username = 'Amy';
	$scope.line = 6;
	$scope.level = 2;

	$scope.$on('bingo', function(){
		$http.post('http://trainrush.dustcoin.com/bingo?user=' + $scope.username + '&line=' + $scope.line + '&level=' + $scope.level).then(function(result, status){
			// TODO
			console.log('bingo!');
			console.log(status);
		});
	});

});