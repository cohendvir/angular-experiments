/**
 * Created by dvircohen on 1/6/16.
 */
function createDirective(name, priority) {
    return function() {
        return {
            restrict: 'A',
            priority: priority,

            compile: function () {
                console.log(name + ": compile");
                return {
                    pre: function () {
                        console.log(name + ": pre link");
                    },

                    post: function () {
                        console.log(name + ": post link");
                    }
                }
            }
        }
    }
}

app.directive('levelOne', createDirective('levelOne', 1));
app.directive('levelTwo', createDirective('levelTwo', 3));
app.directive('levelThree', createDirective('levelThree', 2));