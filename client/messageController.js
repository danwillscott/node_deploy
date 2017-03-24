/**
 * Created by danielscott on 3/23/17.
 */
app.controller('settingsController', ['settingsFactory', '$scope', '$location', '$cookies', function (settingsFactory, $scope, $location, $cookies) {

    $scope.setSession = function(name){
        $cookies.put('user', name)
        // console.log($cookies.getAll());
    };

    console.log($cookies.get('user'));
    // console.log($cookies);
}]);