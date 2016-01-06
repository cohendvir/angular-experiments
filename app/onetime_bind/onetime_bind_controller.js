/**
 * Created by dvircohen on 1/6/16.
 */

app.controller('oneTimeBindCtrl', function($scope, $timeout) {
    $scope.onetime = "This will be bind once";
    $scope.twoway = "Two way binding";

    $timeout(function(){
        $scope.onetime = "try try try";
        $scope.twoway = "changed!";
    }, 2000);
});