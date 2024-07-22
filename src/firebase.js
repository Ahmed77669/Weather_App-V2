import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCX_g7-gWV8Zhvt-3gDK5V5x9Z9TYEdNGU",
  authDomain: "weather-app-e864e.firebaseapp.com",
  projectId: "weather-app-e864e",
  storageBucket: "weather-app-e864e.appspot.com",
  messagingSenderId: "366418991906",
  appId: "1:366418991906:web:9fd091293d880db3f3637b",
  measurementId: "G-Y4PZKD35K6",
  databaseURL: "https://weather-app-e864e-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth ,db};


