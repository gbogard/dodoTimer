app.controller('startCtrl', function($scope, $timeout, $state){
    Waves.displayEffect();

    $scope.wrapperClass = {
        'day-background': true,
        'animatedBackground': true
    };
    
    $scope.contentClass = {};
    
    $scope.start = function(){
        $scope.wrapperClass['day-background'] = false;
        $scope.wrapperClass['night-background'] = true;

        $scope.contentClass = {
            'animated': true,
            'fadeOutUp': true
        };

        $timeout(function(){
            $state.go('create');
        }, 900)
    }
});