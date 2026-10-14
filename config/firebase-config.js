import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app-check.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcjWjMkS7rnlV2wV2HCQFtQ21DB8yJx9A",
  authDomain: "fee-collection-e550c.firebaseapp.com",
  projectId: "fee-collection-e550c",
  storageBucket: "fee-collection-e550c.firebasestorage.app",
  messagingSenderId: "883319601617",
  appId: "1:883319601617:web:fa3206fda663e6c96488f0",
  measurementId: "G-D2Q6MJ766B"
};

const app = initializeApp(firebaseConfig);

const appCheckSiteKey = String(window.__APP_CHECK_SITE_KEY || '').trim();
const canEnableAppCheck = appCheckSiteKey && appCheckSiteKey !== 'REPLACE_WITH_RECAPTCHA_V3_SITE_KEY';
const appCheck = canEnableAppCheck
  ? initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(appCheckSiteKey),
      isTokenAutoRefreshEnabled: true
    })
  : null;

if (!canEnableAppCheck) {
  console.warn('[Security] App Check is not enabled yet: set window.__APP_CHECK_SITE_KEY with a valid reCAPTCHA v3 site key.');
}

const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
const auth = getAuth(app);

export { db, auth, appCheck, canEnableAppCheck };
