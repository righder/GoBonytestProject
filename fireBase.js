var app_fireBase = {};

(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyDRw8YB1gRS2uUvzcRI5Qq3ekZSQsO68gY",
        authDomain: "gobony3.firebaseapp.com",
        databaseURL: "https://gobony3.firebaseio.com",
        projectId: "gobony3",
        storageBucket: "gobony3.appspot.com",
        messagingSenderId: "729517934320",
        appId: "1:729517934320:web:880fa27dd3dfb0d6696435",
        measurementId: "G-TJJJQMC9Q5"
    };
    firebase.initializeApp(firebaseConfig);
    app_fireBase = firebase;
})()