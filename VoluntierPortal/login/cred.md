<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDF13vZpjM_nkoOxbmCQc6F0ueBt_TTOrc",
    authDomain: "volunteerhub-7e41c.firebaseapp.com",
    databaseURL: "https://volunteerhub-7e41c-default-rtdb.firebaseio.com",
    projectId: "volunteerhub-7e41c",
    storageBucket: "volunteerhub-7e41c.firebasestorage.app",
    messagingSenderId: "32251232687",
    appId: "1:32251232687:web:26e0dc1a36a3c76f9aef5a",
    measurementId: "G-XG0V8CXGCY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>