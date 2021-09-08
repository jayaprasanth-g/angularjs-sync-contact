// file name and class name should be same for class files
class GmFirebaseConfig {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);

            //Enabling offline persistence
            firebase.firestore().enablePersistence()
                .catch((err) => {
                    if (err.code == 'failed-precondition') {
                        console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.")
                    } else if (err.code == 'unimplemented') {
                        console.log("The current browser does not support all of the features required to enable persistence")
                    }
                });
        }

        // instantiate firestore
        this.firestore = firebase.firestore();

    }

    setCollection = function (col) { this.collection = (this.firestore).collection(col); }
    getCollection = function () { return this.collection; }
}

//singleton GmFirebase Object
var GmFirebase = (function () {
    var connection;

    function createFirebase() {
        var object = new GmFirebaseConfig();
        return object;
    }

    return {
        getCollection: function (collection) {
            if (!connection) {
                connection = createFirebase();
            }
            connection.setCollection(collection);
            return connection.getCollection();
        }
    };
})();