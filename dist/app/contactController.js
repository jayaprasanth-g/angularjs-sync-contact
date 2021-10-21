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
                    const data = doc.data();
                    const id = doc.id;
                    const mixData = { id, ...data };
                    list.push(mixData);
                });
                $scope.contactlist = list;

                $scope.$apply();
                console.log($scope.contactlist);
            });
    }

    $scope.onSubmit = function (contactform) {
        // console.log($scope.contactform);
        if (contactform != undefined) {
            console.log(contactform.id);
            if (contactform.id != undefined) {
                afsDB.collection("Contacts").doc(contactform.id).update(contactform)
                    .then(() => {
                        console.log("Document successfully updated!");
                    }).catch((error) => {
                        console.error("Error Updating document: ", error);
                    });
            } else {
                afsDB.collection("Contacts").doc().set(contactform)
                    .then(() => {
                        console.log("Document successfully written!");

                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
            $scope.onLoadData();
            $scope.onResetForm();
        }
        else {
            alert("Please enter contact name");
        }
    };

    $scope.onEdit = function (e) {
        var id = $(e.target).data('id');
        var name = $(e.target).data('name');
        var phone = $(e.target).data('phone');
        console.log(id);
        console.log(name);
        console.log(phone);
        $scope.contactform = { "name": name, "phone": phone, "id": id };
        


    };

    $scope.onDelete = function (e) {
        var id = $(e.target).data('id');
        console.log(id);


        afsDB.collection("Contacts").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            $scope.onLoadData();
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });

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
        $scope.contactform = {};
    }
});
