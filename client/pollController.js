/**
 * Created by danielscott on 3/24/17.
 */

app.controller('pollController', ['pollFactory', '$scope', '$cookies','$location','$routeParams', function (pollFactory, $scope, $cookies, $location, $params) {
    $scope.userId = $cookies.get('id');
    $scope.userName = $cookies.get('user');
    $scope.newPoll = {};
    $scope.pollErrors = {};

    if(!$cookies.get('user')){
        $location.path('/');
    }

    $scope.createPoll = function () {
        $scope.newPoll.user = $scope.userId;
        pollFactory.createPoll($scope.newPoll, function (data) {
            if(data.data.error){
                $scope.pollErrors = data.data.result.errors;
                console.log(data.data.result.errors)
            } else {
                $location.path('/dashboard')
            }

        })
    };

    $scope.getPolls = function () {
        pollFactory.getPolls($params.id, function (data) {
            if(data.data.error){
                $location.path('/dashboard')
            } else {
                $scope.onePoll = data.data.result;
            }

        })
    };
    $scope.getPolls();

    $scope.votePoll = function (optNum, pollId) {
        let vote = {};
        vote.vote = optNum;
        pollFactory.votePoll(vote, pollId, function (data) {
            $scope.getPolls();
        })

    }

}]);
