import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



let firebaseConfig = {
    apiKey: "AIzaSyB8cvzYSqOxKbPBZE0CdMwOqZM070La45Y",
    authDomain: "imigrantes-794ff.firebaseapp.com",
    projectId: "imigrantes-794ff",
    storageBucket: "imigrantes-794ff.appspot.com",
    messagingSenderId: "614374259905",
    appId: "1:614374259905:web:74be91bd57baaec13ca840"
  };

  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
  }
  
  export default firebase;