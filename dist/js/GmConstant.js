// var urlIndex = "http://gmioff75:8080/inrquote/";
// var urlMicroapp = "http://gmioff75:8080/erpmicroappcommon/";
// var url = urlIndex+"api/";
// var microappUrl = urlMicroapp+"api/";
// var microappUrlFile = urlMicroapp+"apiFiles/";
// var varJsonURL = urlIndex+"dist/app/GmMessage.json";
// var accessTokenLifespanInMinutes = 5; // In Minutes accessTokenLifespanInMinutes
// var fileUploadPath = "////gmioff75/spineitfiles/Appnode/inrquote/";
// var fileDownloadPath = "http://gmioff75/www/globusapp/inrquote/";
// /* Keycloak Values*/
// var keycloakConfig = {url: "http://logindev.spineit.net/auth/", realm: "globus-medical", clientId: "inrquote-client"};


// Import the functions you need from the SDKs you need
    // import { initializeApp } from "firebase/app";
    // import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// my account
// const firebaseConfig = {
//     apiKey: "AIzaSyBektzeHPb9JdDqcA4WqkdcXVTrUUNuJlU",
//     authDomain: "svcfiredev-cdccc.firebaseapp.com",
//     projectId: "svcfiredev-cdccc",
//     storageBucket: "svcfiredev-cdccc.appspot.com",
//     messagingSenderId: "638853643248",
//     appId: "1:638853643248:web:669fac561490f524237b35",
//     measurementId: "G-Q9FBT6YQ3B"
// };

const firebaseConfig = {
apiKey: "AIzaSyBektzeHPb9JdDqcA4WqkdcXVTrUUNuJlU",
authDomain: "svcfiredev-cdccc.firebaseapp.com",
databaseURL: "https://svcfiredev-cdccc-default-rtdb.firebaseio.com",
projectId: "svcfiredev-cdccc",
storageBucket: "svcfiredev-cdccc.appspot.com",
messagingSenderId: "638853643248",
appId: "1:638853643248:web:669fac561490f524237b35",
measurementId: "G-Q9FBT6YQ3B"
};
// // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const afsDB = firebase.firestore();
// const analytics = getAnalytics(afs);

    // const firebase = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(firebase);