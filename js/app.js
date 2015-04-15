var app = angular.module('app', ['ngAnimate']);

app.controller('MainController', ['$scope', function($scope){
    $scope.ball = Math.floor(Math.random() * (3 - 1) + 1);
    $scope.message = 'Make Your first Guess!';
    $scope.win = false;
    $scope.lose = false;
    $scope.guess = 0;
    
    $scope.shells = [1,2,3];
    
    
    $scope.updateGame = function(){
        $scope.ball = Math.floor(Math.random() * (3 - 1) + 1);
        $scope.message = 'Make Your first Guess!';
        $scope.guess = 0;
        $scope.win = false; 
        $scope.lose = false;
        //alert($scope.ball);
    }
    
    $scope.examine = function(shell){
            if($scope.win === false && $scope.guess < 2){
                if(shell === $scope.ball){
                    $scope.message = 'You found the pearl';
                    $scope.win = true;
                    $scope.guess = 0;
                }else{
                    $scope.guess = $scope.guess + 1;
                    $scope.message = 'Guess # ' + $scope.guess + ': You did not find the shell, Try Again!';
                    $scope.win = false;
                }                
            }else{
                $scope.message = 'You Lost!';
                $scope.lose = true;
                $scope.guess = 0;
            }
    };
}]);



