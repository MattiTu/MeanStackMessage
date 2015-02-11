module.factory('DeleteFactory',['$resource',function($resource){
    
    var factory = {};
    
    
    factory.getMessagesForUser = function(){
        
        console.log('DeleteFactory: getMessagesForUser');    

        return $resource('/message/forUser').get().$promise;
    }
    
    
    
    factory.deleteMessage = function(id){
        
        console.log('DeleteFactory: deleteMessage');    

        return $resource('/message/',{id:id}).delete().$promise        
    } 
    
    
    return factory;
}]);