/**
 * Created by danielscott on 3/24/17.
 */
app.factory('pollFactory', ['$http', function ($http) {
    let factory = {};
    console.log('in message Factory');


    factory.createPoll = function (poll,returnCallBack) {
        console.log('Client: Create Poll Method');
        $http.post('/poll', poll).then(function (data) {
            return returnCallBack(data);
        });
    };

    factory.getPolls = function (pollId ,returnCallBack) {
        if(pollId){
            $http.get(`/poll/${pollId}`).then(function (data) {
                return returnCallBack(data);
            })
        }
    };

    factory.votePoll = function (optNum, pollId, returnCallback) {
        $http.put(`/poll/${pollId}`, optNum).then(function (data) {
            return returnCallback(data);
        })
    };

    return factory;
}]);