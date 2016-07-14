app.controller('createCtrl', function($scope, $timeout, $state, Event){
    Waves.displayEffect();
    
    $scope.data = {};
    $scope.contentClass = {};

    $scope.save = function(){
        $scope.error = null;

        if(!$scope.data.title){
            $scope.error = 'Vous devez donner un titre à cet évènement.';
            return;
        }

        if(!$scope.data.date || !$scope.data.date.match(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)){
            $scope.error = 'La date doit être au format JJ/MM/AAAA.';
            return;
        }

        var hours = Number($scope.data.hours);
        var minutes = Number($scope.data.minutes);
        if((!hours && hours !=0) || (!minutes && minutes !=0)){
            $scope.error = 'Les heures et les minutes doivent être des nombres entiers.';
            return;
        }

        if(minutes > 59 || hours > 23){
            $scope.error = 'L\'horaire indiqué est invalide.';
            return;
        }

        var date =  moment($scope.data.date+' hours:minutes', 'DD/MM/YYYY HH:mm');

        if(!date.isValid()){
            $scope.error = 'La date indiquée est invalide.';
            return;
        }

        $scope.contentClass = {
            'animated': true,
            'fadeOutUp': true
        };

        Event.create({title: $scope.data.title, date: date.toISOString()}).then(function(res){
            $state.go('afterCreate', {event: res.data});
        }, function(err){
            $scope.error = err;
        })
    }
});