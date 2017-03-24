/**
 * Created by danielscott on 3/23/17.
 */
app.controller('userController', ['loginFactory', '$scope', '$location', '$cookies', function (loginFactory, $scope, $location, $cookies) {
    $scope.cookies = $cookies;
    $scope.userError = false;
    $scope.userName = null;
    if($cookies.get('user')){
        $location.path('/dashboard');
    }
    $scope.setSession = function(){
        if(!$scope.userName){
            return $scope.userError = true;
        } else {
            let user = $scope.userName;
            loginFactory.createUser(user, function (data) {
                $scope.userError = false;
                $cookies.put('user', data.data.result.name);
                $cookies.put('id', data.data.result._id);
                $scope.userName = null;
                $location.path('/dashboard')
            })
        }
    };
}]);
