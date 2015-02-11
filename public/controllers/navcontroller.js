module.controller('NavController',['$scope','$location','SocketFactory',function($scope,$location,SocketFactory){
    
    $scope.nav = {};
    $scope.nav.logout = function(){
        SocketFactory.logout();
    }
    
    $scope.nav.recentMessages = function(){
        $location.path('/user');
    }
    
    $scope.nav.newMessage = function(){
        $location.path('/new');
    }
    
    $scope.nav.filterMessages = function(){
        $location.path('/filter');
    }
    
    $scope.nav.deleteMessages = function(){
        $location.path('/delete');
    }

    $scope.nav.updateMessages = function(){
        $location.path('/update');
    }
}]);