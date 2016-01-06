/**
 * Created by dvircohen on 1/6/16.
 */
app.service('promiseService', function ($q, $timeout) {

    this.asyncAction = function() {
        var def = $q.defer();
        $timeout(function () {
            if (Math.round(Math.random())) {
                def.resolve("Response returned")
            }
            else {
                def.reject("Error")
            }
        }, 1000);
        return def.promise;
    };

    this.getPromise = function() {
        return $q.when("Promise returned");
    };
});