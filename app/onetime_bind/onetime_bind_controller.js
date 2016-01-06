/**
 * Created by dvircohen on 1/6/16.
 */

app.controller('oneTimeBindCtrl', function($scope, $timeout) {

    $timeout(function() {
        $scope.onetime = "This will be bind once";
        $scope.twoway = "Two way binding";
    }, 1000);

    $timeout(function(){
        $scope.onetime = "try try try";
        $scope.twoway = "changed!";
    }, 2000);
});