module.controller('UpdateController',['$scope','$rootScope','$location','UpdateFactory','DeleteFactory','SocketFactory',function($scope,$rootScope,$location,UpdateFactory,DeleteFactory,SocketFactory){
    
    console.log('module.controller(UpdateController...');

    $scope.update = {};
    $scope.update.messages = [];
    //$scope.delete_check = [];
    
    DeleteFactory.getMessagesForUser().then(function(data){
        console.log('DeleteFactory: DeleteFactory.getMessagesForUser()...');
        console.log('  data.messages='+data.messages);
        console.log('  data.name='+data.name);
        $scope.update.messages = data.messages;
        $scope.update.name = data.name;
    });



    

    $scope.update.confirmUpdate = function(id){
    

    }
        

}]);