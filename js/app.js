var app = angular.module('firstPage', ["ngRoute"]);
app.directive('rightContent', function () { 
    return {
        restrict: "A",
        template: '<div class="right-content"><label><input type="checkbox" class="checkbox" /><span class="private">&nbsp;Make Private</span><span><img src="images/question.png" alt="question icon" id="question"></span></label> </div>'
    }
});
app.config(['$routeProvider','$qProvider',function ($routeProvider,$qProvider) {
    $routeProvider.when("/edit", {
            templateUrl: "edit.html",
            controller: 'editController'
        });
        $qProvider.errorOnUnhandledRejections(false);
}]);
app.filter("unique", function () {
    return function (list, keyvalue) {
        var output = [],
            keys = [];
        angular.forEach(list, function (item) {
            var key = item[keyvalue];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
