var app = angular.module('app', []);

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

app.directive('game', function(){
	return {
		restrict: 'EA',
		templateUrl: 'templates/game-template.html'
	}
});

app.directive('gamecard', function($timeout){
	return {
		restrict: 'EA',
		link: function($scope, element, attrs){
			console.log('game');
			$(element).on('click', '.option.clickable', function(){
				// highlight correct one
				var correctEl = $(element).find('.correct');
				$(correctEl).addClass('highlight');
				$(correctEl).append('<span class="option-icon entypo-check"></span>');
				$(element).find('.option').removeClass('clickable');

				// -- POST --
				if ($(this).hasClass('correct')){
					// BINGO!
					$scope.$emit('bingo');
				}
				// -- SLIDER ---
				// slide the next one in, after a delay
				// TODO: what if multiple game-wrapper's ?
				var topPix = Number($('.game-wrapper').css('top').split('px')[0]);
				var newTopPix = topPix - 700;

				var duration = 100;

				// ponder more if was wrong
				if ($(this).hasClass('incorrect')) duration = 1000;

				$timeout(function(){
					$('.game-wrapper').css('top', newTopPix + 'px');
				}, duration);
			});
		}
	}
});


app.directive('option', function(){
	return {
		restrict: 'EA',
		scope: {
			name: '=',
			correct: '='
		},
		replace: true,
		template: '<div class="option clickable" lang="zh-Hans">{{name}}</div>',
		link: function($scope, element, attrs){
				if ($scope.correct) {
					// color RIGHT
					$(element).addClass('correct');
				} else {
					// color WRONG
					$(element).addClass('incorrect');
				}
			// answering

			$(element).on('click', function(){
				if (!$(element).hasClass('clickable')) return;
				if ($scope.correct) {
					// color RIGHT
					$(element).addClass('active');
					$(element).append('<span class="option-icon entypo-check"></span>')
				} else {
					// color WRONG
					$(element).addClass('active');
					$(element).append('<span class="option-icon entypo-cancel-circled"></span>')
					// show RIGHT
				}
			})
		}
	}
});