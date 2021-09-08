'use strict';

app.controller('contactController', function ($scope) {

    $(document).ready(function () {

        $scope.onLoadData();
    });

    $scope.onLoadData = function () {
        var list = [];
        afsDB.collection("Contacts")
            .orderBy('name')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                    list.push(doc.data());
                });
                $scope.contactlist = list;
                $scope.$apply();
                console.log($scope.contactlist);
            });
    }

    $scope.onSubmit = function (contactform) {
        // console.log($scope.contactform);
        if(contactform != undefined) {
        afsDB.collection("Contacts").doc().set(contactform)
            .then(() => {
                console.log("Document successfully written!");
                $scope.onLoadData();
                $scope.onResetForm();
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }
        else {
            alert("Please enter contact name");
        }
    };

    $scope.onSearchKey = function ($event) {
        console.log($scope.searchkey);

        var list = [];
        afsDB.collection("Contacts")
            .orderBy('name')
            .startAt($scope.searchkey)
            .endAt($scope.searchkey + "\uf8ff")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                    list.push(doc.data());
                });
                $scope.contactlist = list;
                $scope.$apply();
                console.log($scope.contactlist);
            });

    }
    $scope.onResetForm = function () {
        $scope.contactform = "";
    }
});
