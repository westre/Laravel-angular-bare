angular.module("app").controller('homeController', function (Home) {
    var self = this;

    this.foo = "bar";

    this.jsonQuery = function () {
        Home.get({
            id : 1
        },
        function (response) {
            console.log("get")
            console.log(response);
            self.getJsonData = response;
        },
        function (error) {
            console.log("hello");
        });

        Home.query(function (data) {
            console.log("query")
            console.log(data);
            self.queryJsonData = data;
        });

        Home.save({
            name: 'Kevin',
            email: 'kevin@foo.bar'
        },
        function (response) {
            console.log("save")
            console.log(response);
        },
        function (error) {
            console.log("error");
            console.log(error);
        });

        Home.remove({
            id : 1,
        },
        function (succes) {
            console.log("remove")
            console.log(succes)
        },
        function (error) {

        });

        Home.update({
            id: 1, // URL
        }, {
            id: 1 // data
        },
        function (succes) {
            console.log("update");
            console.log(succes);
        },
        function (error) {
            console.log(error);
        })
    }
});