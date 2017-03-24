/**
 * Created by danielscott on 3/24/17.
 */
app.factory('dashboardFactory', ['$http', function ($http) {
    let factory = {};
    console.log('in message Factory');


    factory.getDashboard = function (returnCallBack) {
        console.log('Client: Create User Method');
        $http.get('/dashboard').then(function (data) {
            return returnCallBack(data);
        });
    };

    factory.deletePoll = function (pollId, returnCallBack) {
        $http.delete(`/poll/${pollId}`).then(function (data) {
            returnCallBack(data);
        })
    };

    return factory;
}]);