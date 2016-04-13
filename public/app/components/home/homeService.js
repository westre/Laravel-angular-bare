angular.module("app").factory('Home', function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:id', {}, {
        get: {
            method: 'GET',
            params: {
                id: ''
            }
        },
        save: {
            method: 'POST'
        },
        query: {
            method: 'GET',
            isArray: true
        },
        remove: {
            method: 'DELETE'
        },
        delete: {
            method: 'DELETE'
        },
        update: {
            method: 'PUT'
        }
    });
});