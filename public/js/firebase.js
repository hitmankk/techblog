let firebaseConfig = {
    // Enter your firebase credentials
    
        apiKey: "AIzaSyD92cxZmmX80C94Ie1L88ou6YKjUD9-bS0",
        authDomain: "blogging-website-592d9.firebaseapp.com",
        projectId: "blogging-website-592d9",
        storageBucket: "blogging-website-592d9.appspot.com",
        messagingSenderId: "766001646977",
        appId: "1:766001646977:web:36fa208b9e096ab7386c80",
        measurementId: "G-BPXDMTS9M2"
      
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();