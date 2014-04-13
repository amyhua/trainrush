var app = angular.module('app', []);

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