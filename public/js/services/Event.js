app.service('Event', function($http){
    this.create = function(data){
        return $http.post('/events', data);
    };
    
    this.get = function(slug){
        return $http.get('/events/'+slug);
    }
});