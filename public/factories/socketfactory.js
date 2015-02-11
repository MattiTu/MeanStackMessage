module.factory('SocketFactory',['$resource','$location',function($resource,$location){
    
    var factory={};

    
    factory.getRecentPosts = function(){
        console.log('SocketFactory: getRecentPosts');    
        return $resource('/message/').get().$promise;
    }

    
    
    factory.logout = function(){
        console.log('SocketFactory: logout');    
        $resource('/app/logout').get().$promise.then(function(){
            $location.path('/');
        });
    }
    
    
    //Create client socket
    var socket = io();
    
    factory.notify;
    
    
    //This will tirgger when server broadcasts message
    //broadcast_msg
    socket.on('broadcast_msg',function(data){
        
        console.log('SocketFactory: socket on');    
        factory.notify(data);
    });
    
    
    
    factory.sendMessage = function(data){
        
        console.log('SocketFactory: sendMessage');    
        socket.emit('new_message',data);
    }
    
    
    return factory;
}]);