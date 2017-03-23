/**
 * Created by danielscott on 3/20/17.
 */

// ********************************
// ***** Dashboard Controller *****
// ********************************
fake_session = {name: "Daniel", id: 1241245};
app.controller('dashboardController', ['dashboardFactory', '$scope', '$location', function (dashboardFactory, $scope, $location) {
   $scope.controller_session = fake_session;
   console.log($scope.controller_session);
   $scope.setSession = function (name) {
        fake_session.name = name
   };

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

app.controller('customerController', ['customerFactory', '$scope', '$location', function (customerFactory, $scope, $location) {
    console.log('Client: Dashboard Controller');
    $scope.newCustomer = {};

    $scope.allCustomers = function () {
        customerFactory.getCustomers(function (customers) {
            console.log(customers.data);
            $scope.customers = customers.data
        });
    };
    $scope.allCustomers();

    $scope.createCustomer = function () {
        customerFactory.createCustomer($scope.newCustomer, function (data) {
            $scope.newCustomer = {};
            $scope.allCustomers();
        })
    };

    $scope.deleteCustomer = function (customerId) {
        customerFactory.deleteCustomer(customerId, function () {
            $scope.allCustomers();
        });
    };
}]);

// ******************************
// ***** Product Controller *****
// ******************************

app.controller('productController', ['productFactory', '$scope', '$location', function (productFactory, $scope, $location) {
    console.log('Client: Product Controller');
    $scope.newProduct = {};

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

app.controller()


