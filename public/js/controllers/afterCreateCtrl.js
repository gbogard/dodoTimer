app.controller('afterCreateCtrl', function ($scope, $state, $stateParams) {
    if(!$stateParams.event){
        $state.go('start');
        return;
    }

    $scope.getUrl = function(slug){
        return $state.href('show', {slug: slug}, {absolute: true});
    };
    
    $scope.event = $stateParams.event;
});