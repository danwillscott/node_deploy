/**
 * Created by danielscott on 3/24/17.
 */
app.controller('dashboardController', ['dashboardFactory', '$scope', '$location', '$cookies', function (dashboardFactory, $scope, $location, $cookies) {
    $scope.cookies = $cookies;
    $scope.userId = $cookies.get('id');
    $scope.user = $cookies.get('user');

    if(!$cookies.get('user')){
        $location.path('/');
    }

    $scope.logout = function () {
        $cookies.remove('user');
        $cookies.remove('id');
        $location.path('/')
    };

    dashboardFactory.getDashboard(function (data) {
        if(!data.data.error){
            $scope.polls = data.data.result;
            console.log(data.data.result);
        }

    });

    $scope.deletePoll = function (pollId) {
        console.log(pollId);
        dashboardFactory.deletePoll(pollId, function () {
            dashboardFactory.getDashboard(function (data) {
                if(!data.data.error){
                    $scope.polls = data.data.result;
                    console.log(data.data.result);
                }

            });
        });
    };

    console.log();
}]);
