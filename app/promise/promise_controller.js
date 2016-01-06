/**
 * Created by dvircohen on 1/6/16.
 */
app.controller('promiseCtrl', function($scope, promiseService, $timeout) {

    $scope.data = "Waiting for response...";

    promiseService.asyncAction().then(
        function(data) {
            $scope.data = data;
        },
        function(error) {
            $scope.data = "Oh no!";
        });

    $timeout(function() {
        promiseService.getPromise().then(function(data) {
            $scope.data2 = data;
        });
    }, 2000);

});
