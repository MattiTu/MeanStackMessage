module.factory('UpdateFactory',['$resource',function($resource){
    
    var factory = {};
    
    
    factory.getMessagesForUser = function(){
        
        console.log('UpdateFactory: getMessagesForUser');    

        return $resource('/message/forUser').get().$promise;
    }
    
    
    
    factory.updateMessage = function(id){
        
        console.log('UpdateFactory: updateMessage');    

        //TODO: Not implement yet
        return $resource('/message/',{id:id}).delete().$promise
        
    }
    
    
    return factory;
}]);