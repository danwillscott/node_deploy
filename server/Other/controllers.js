/**
 * Created by danielscott on 3/20/17.
 */

// ********************************
// ***** Dashboard Controller *****
// ********************************

// remember the order.
// html base runs all js files loaded angular app serves up partial based on route in ng-view
// The partial calls the controller set on the top of the controller
// the controller talks to the factory to get information back
// the factory makes a request that the node/express app handles in routes
// the routes direct to the server controller
// the server controller talks to the mongoose.js file and the model required in the controller
// then the controller using a promise sends the information back down the tree via json
// the json goes back to the factory (since the route is already set)
// the factory returns the json to the controller via a callback
// then the controller sets the data inside the returned callback to be served to the HTML
// Mission complete

// Once routes and models are set the only concern is the fallowing
// Html to ng-controller to ng-factory
// Ng-factory to server-controller to mongo
// handle errors by returning errors and checking if errors
// display errors or display content.
// Unlock Code bQGYq2tD

app.controller('dashController', ['dashboardFactory', '$scope', '$cookies', function (dashboardFactory, $scope, $cookies) {


    // Dashboard
    // This sets the dashboard as soon as the page loads
    // data = {} and quantity to 1 for slider
    // customers products and orders are pulled from the returned dashInit
    // This makes parsing the data much easier
    console.log('Client: Dashboard Controller');
    $scope.data = {};
    $scope.data.quantity = 1;
    dashboardFactory.setDashboard(function (dashInit) {
        $scope.dashboardInit = dashInit;
        $scope.customers = $scope.dashboardInit.data.customer;
        $scope.products = $scope.dashboardInit.data.product;
        $scope.order = $scope.dashboardInit.data.order;
        $scope.clicked = false
    });

    // This goes to my method of making time since something
    //
    $scope.timeSince = function(mongoDate) {
        return dashboardFactory.timeSince(mongoDate);
    };

    // Orders

    $scope.resetOrder = function () {
        $scope.data = {};
        $scope.data.quantity = 1;
        $scope.clicked = false
    };

    $scope.getOrders = function () {
        dashboardFactory.getOrders(function (data) {
            // console.log(data.data.result);
            $scope.orders = data.data.result
        })
    };

    $scope.getOrders();

    $scope.submitOrder = function () {
        if($scope.isValidForm()){
            dashboardFactory.createOrder($scope.data, function (result) {
                console.log(result);
                $scope.resetOrder();
                $scope.getOrders();
                $scope.orderForm = {};
            });
        }
    };

    $scope.isValidForm = function () {
        return !$scope.orderForm.$invalid;

    }
}]);

// *******************************
// ***** Customer Controller *****
// *******************************

app.controller('customerController', ['customerFactory', '$scope', '$cookies', function (customerFactory, $scope, $cookies) {
    console.log('Client: Dashboard Controller');
    $scope.newCustomer = {};
    $scope.customerErrors = {};

    $scope.allCustomers = function () {
        customerFactory.getCustomers(function (customers) {
            $scope.customers = customers.data
        });
    };
    $scope.allCustomers();

    $scope.createCustomer = function () {
        if($scope.isValidForm()){
            customerFactory.createCustomer($scope.newCustomer, function (data) {
                if(data.data.error){
                    $scope.customerErrors.error = true;
                    $scope.customerErrors.message = data.data.result.errors.name.message;
                } else {
                    $scope.customerErrors.error = false;
                    $scope.customerErrors.message = '';
                    $scope.customerForm = null;
                    $scope.newCustomer = {};
                    $scope.allCustomers();
                }
            })
        }
    };

    // No Longer needed. Validation comes from the back
    $scope.isValidForm = function () {
        // return !$scope.customerForm.$invalid;
        return true;

    };

    // this does a call back to delete customers then pulls customers again.
    $scope.deleteCustomer = function (customerId) {
        customerFactory.deleteCustomer(customerId, function () {
            $scope.allCustomers();
        });
    };
}]);

// ******************************
// ***** Product Controller *****
// ******************************

app.controller('productController', ['productFactory', '$scope', '$cookies', function (productFactory, $scope, $cookies) {
    console.log('Client: Product Controller');
    $scope.newProduct = {};

    // using a call back pulls all products through factory route then server controller.
    $scope.allProducts = function () {
        productFactory.getProducts(function (products) {
            console.log(products);
            $scope.products = products.data
        });
    };
    $scope.allProducts();

    $scope.createProduct = function () {
        productFactory.createProduct($scope.newProduct, function (data) {
            $scope.newProduct = {};
            $scope.allProducts();
        });
    };

    $scope.deleteProduct = function (productId) {
        productFactory.deleteProduct(productId, function () {
            $scope.allProducts();
        })
    }

}]);






// *******************************
// ***** Settings Controller *****
// *******************************
// Moved to messageController.js Revert to settings page later
app.controller('settingsController', ['settingsFactory', '$scope', '$location', '$cookies', function (settingsFactory, $scope, $location, $cookies) {
    $scope.cookies = $cookies;
    $scope.sessionForm = {};
    $scope.setSession = function(name){
        $cookies.put('user', name);
        $scope.name = '';
        $scope.sessionForm = {};
    };

    console.log($cookies.get('user'));
}]);


