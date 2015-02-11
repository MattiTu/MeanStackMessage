module.factory('FilterFactory',['$resource',function($resource){
    
    var factory={};
    
    
    factory.getFilterData = function(){
        
        console.log('filterfactory:factory.getFilterData');        
        return $resource('/message/filters').get().$promise;
    }
    
    
    
    factory.getFilteredData = function(data){
        
        console.log('filterfactory:factory.getFilteredData');        
        return $resource('/message/filtered/',{id:data}).get().$promise;
    }
    
    
    
    factory.getAll = function(){
        
        console.log('filterfactory:factory.getAll');        
        return $resource('/message/filters').get().$promise;
    }
    
    
    return factory;
}]);