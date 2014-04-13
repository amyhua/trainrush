app.controller('gameController', function($scope, $http){
	$scope.user = 'Amy Hua';
	$scope.imageUrl = 'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn1/t1.0-9/17224_4448134324485_1278419956_n.jpg';
	$scope.challenges = [
		{ word: "狗", options: [
			{ option: "cat", correct: false},
			{ option: "dog", correct: true},
			{ option: "meow", correct: false}
			] },
			{
				word: "紅",
				options: [
				{
					option: "red",
					correct: true
				},
				{
					option: "yellow",
					correct: false
				},
				{
					option: "blue",
					correct: false
				}
				]
			},
			{
				word: "黃",
				options: [
				{
					option: "blue",
					correct: false
				},
				{
					option: "yellow",
					correct: true
				},
				{
					option: "red",
					correct: false
				}
				]
			},
			{
				word: "藍",
				options: [
				{
					option: "blue",
					correct: true
				},
				{
					option: "yellow",
					correct: false
				},
				{
					option: "red",
					correct: false
				}
				]
			}
			];

	$scope.bingo = false;
	$scope.username = 'Amy';
	$scope.line = 6;
	$scope.level = 2;


	$scope.$on('bingo', function(){
		console.log('bingo!')
	});

});