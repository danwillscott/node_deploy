/**
 * Created by danielscott on 3/20/17.
 */

// *****************************
// ***** Dashboard Factory *****
// *****************************

app.factory('dashboardFactory', ['$http', function ($http) {
    console.log('Client: Dashboard Factory');
    let factory = {};

    factory.setDashboard = function (returnCallBack) {
        console.log('Client: Setting Dashboard');
        $http.get('/dashboard').then(function (dashboardData) {
            return returnCallBack(dashboardData);
        })
    };


    factory.timeSince = function (mongoDate) {
        let date = new Date(mongoDate);
        let seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval >= 1) {
            if(interval < 2 ){
                return interval + " year";
            }
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            if(interval < 2 ){
                return interval + " month";
            }
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            if(interval < 2 ){
                return interval + " day";
            }
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            if(interval < 2 ){
                return interval + " hour";
            }
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            if(interval < 2 ){
                return interval + " minute";
            }
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";

    };


    factory.createOrder = function (data, returnCallBack) {
        $http.post('/orders', data).then(function (result) {
            return returnCallBack(result);
        })
    };

    factory.getOrders = function (returnCallBack) {
        $http.get('/orders').then(function (orders) {
            return returnCallBack(orders);
        })
    };


    return factory;
}]);

// ****************************
// ***** Customer Factory *****
// ****************************

app.factory('customerFactory', ['$http', function ($http) {
    console.log('Client: Customer Factory');
    let factory = {};

    factory.getCustomers = function (returnCallBack) {
        console.log('Client: Get Customers Method');
        $http.get('/customers').then(function (customerData) {
            returnCallBack(customerData);
        });
    };

    factory.createCustomer = function (newCustomer,returnCallBack) {
        console.log('Client: Create Customer Method');
        $http.post('/customers', newCustomer).then(function (data) {
            return returnCallBack(data);
        });
    };

    factory.deleteCustomer = function (customerId, returnCallBack) {
        $http.delete(`/customers/${customerId}`).then(function () {
            console.log(customerId);
            returnCallBack();
        })
    };
    

    

    return factory;
}]);


// ***************************
// ***** Product Factory *****
// ***************************

app.factory('productFactory', ['$http', function ($http) {
    console.log('Client: Product Factory');
    let factory = {};

    factory.getProducts = function (returnCallBack) {
        console.log('Client: Get Customers Method');
        $http.get('/products').then(function (productData) {
            returnCallBack(productData);
        });
    };

    factory.createProduct = function (newProduct,returnCallBack) {
        console.log('Client: Create Customer Method');
        $http.post('/products', newProduct).then(function (data) {
            return returnCallBack(data);
        });
    };

    factory.deleteProduct = function (productId, returnCallBack) {
        $http.delete(`/product/${productId}`).then(function () {
            console.log(productId);
            returnCallBack();
        })
    };

    return factory;
}]);















// Old Factories


app.factory('userFactory', ['$http', function ($http) {
    console.log('Client: Connected to Factory');
    let factory = {};

    factory.getUsers = function (returnCallBack) {
        console.log('Client: Factory Get All Users');
        $http.get('/friends').then(function (users_data) {
            return returnCallBack(users_data.data);
        })
    };


    factory.getUser = function (userId, finishedCallBack) {
        console.log('Client: Factory Get One User Method');
        $http.get(`/friends/${userId}`).then(function (users_data) {
            return finishedCallBack(users_data.data);
        })
    };

    factory.deleteUser = function (user, finishedCallBack) {
        console.log('Client: Factory Delete User');
        $http.delete(`/friends/${user._id}`);
        return finishedCallBack();
    };

    factory.editUser = function (user, finishedCallBack) {
        console.log('Client: Factory Edit User ', user);
        $http.put(`/friends/${user._id}`, user);
        return finishedCallBack();

    };

    factory.newUser = function (newUser, finishedCallBack) {
        if(newUser.firstName > '' && newUser.lastName > ''&& newUser.dob){
            $http.post('/friends', newUser).then(function(user_data){
                console.log(user_data);
                return finishedCallBack(user_data);
            });
        } else {
            console.log('User Data Lacking', newUser )
        }


    };

    return factory;
}]);

