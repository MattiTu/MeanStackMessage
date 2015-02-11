module.controller('FilterController',['$scope','FilterFactory',function($scope,FilterFactory){
    
    $scope.filter = {};
    
    $scope.filter.nodata = "Search messages by name or subject"
    
    
    
    FilterFactory.getFilterData().then(function(data){
        console.log('filtercontroller: FilterFactory.getFilterData done');
        $scope.filter.names = data.names;
        $scope.filter.subjects = data.subjects;
        console.log('  $scope.filter.names = '+$scope.filter.names);
        console.log('  $scope.filter.subjects = '+$scope.filter.subjects);
    });
    
    
    
    FilterFactory.getAll().then(function(data){
        console.log('filtercontroller: FilterFactory.getAll done');
    });
    
    
    
    $scope.filter.getResults = function(){
        console.log('filtercontroller:  $scope.filter.getResults done');
      
        var queryObject = {};
        if($scope.filter.s_name === undefined){
            queryObject.query1 = {};
        }
        else if($scope.filter.s_name != null){
            queryObject.query1 = {name:$scope.filter.s_name};
        }
        else{
            queryObject.query1 = {};
        }
        if($scope.filter.s_subject !== undefined && $scope.filter.s_subject != null){
            queryObject.query2 = {path:'messages',match:{subject:$scope.filter.s_subject}};
        }
        else{
           queryObject.query2 = {path:'messages'}; 
        }
        
        if(($scope.filter.s_name === null || $scope.filter.s_name === undefined) && 
            ($scope.filter.s_subject === null || $scope.filter.s_subject === undefined)){
                queryObject.query1 = {}; 
                queryObject.query2 = {path:'messages'}; 
        }
    
        
        
        FilterFactory.getFilteredData(queryObject).then(function(data){
            console.log('filtercontroller: FilterFactory.getFilteredData done');
            try{
                if(data.all[0].messages.length === 0){
                    $scope.filter.nodata = 'No results for your search. Sorry!'
                }
                else{
                    $scope.filter.nodata = "";
                    $scope.filter.messages = data.all[0].messages;
                    $scope.filter.sender = data.all[0].name;
                    console.log('  $scope.filter.messages = '+$scope.filter.messages);
                    console.log('  $scope.filter.sender = '+$scope.filter.sender);
                }
            }
            catch(err){
                $scope.filter.nodata = 'No results for your search. Sorry!'
            }
        });
    }
    
}]);