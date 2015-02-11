module.controller('DeleteController',['$scope','$rootScope','$location','DeleteFactory','SocketFactory',function($scope,$rootScope,$location,DeleteFactory,SocketFactory){
    
    console.log('module.controller(DeleteController...');

    $scope.delete = {};
    $scope.delete.messages = [];
    $scope.delete.messages.delete_check = {};
    //$scope.delete_check = [];
    
    
    
    DeleteFactory.getMessagesForUser().then(function(data){
        console.log('DeleteFactory: DeleteFactory.getMessagesForUser()...');
        console.log('  data.messages='+data.messages);
        console.log('  data.name='+data.name);
        $scope.delete.messages = data.messages;
        $scope.delete.name = data.name;
    });

    

    $scope.delete.deleteOne = function(id){
        console.log('DeleteController: deleteOne');
        
        //Remove data from local array
        for(var i = 0;i < $scope.delete.messages.length; i++){
            
            if($scope.delete.messages[i]._id === id){
                $scope.delete.messages.splice(i,1); 
            }
        }
        //Remove from database
        DeleteFactory.deleteMessage(id).then(function(data){
            
            console.log(data);
        });
    }
    
    

    $scope.delete.deleteAllSelected = function(){
        console.log('DeleteController: deleteAllSelected');

        for(var i=0; i < $scope.delete.messages.length; i++){
            console.log('  i = '+i);
            if($scope.delete.messages[i].delete_check){
                console.log('  delete = '+i);                
                var id = $scope.delete.messages[i]._id
                $scope.delete.messages.splice(i--,1);
                
                //Remove from database
                DeleteFactory.deleteMessage(id).then(function(data){

                    console.log(data);
                });
            }
        }
    }
    

    
    $scope.delete.confirmDelete = function(id){

        //TODO: Add confirmation before delete    

        $scope.delete.deleteOne(id);
    }
    
}]);