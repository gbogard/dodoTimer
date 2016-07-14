app.controller('showCtrl', function ($scope, event, $timeout) {
    $scope.event = event;
    $scope.count = 0;

    var now = moment();
    var date = moment(event.date);

    $scope.count = Math.ceil(date.diff(now, 'days', true));
});