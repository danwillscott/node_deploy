/**
 * Created by danielscott on 3/24/17.
 */
app.factory('loginFactory', ['$http', function ($http) {
    let factory = {};
    console.log('in message Factory');


    factory.createUser = function (newUser,returnCallBack) {
        console.log('Client: Create User Method');
        $http.post('/users', newUser).then(function (data) {
            return returnCallBack(data);
        });
    };


    return factory;
}]);

