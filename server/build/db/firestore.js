import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyDz-ikQhunB7SXmx_8zGjcdIsY0ZrwUn9E',
    authDomain: 'test-project-d8058.firebaseapp.com',
    projectId: 'test-project-d8058',
    storageBucket: 'test-project-d8058.appspot.com',
    messagingSenderId: '992292260492',
    appId: '1:992292260492:web:958c2ba1482daedfba89a9',
};
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const specialOfTheDay = doc(firestore, 'menu/dailySpecial');
export function writeDailySpecial() {
    const docData = {
        description: 'A delicious vanilla latte',
        price: 3.99,
        milk: 'Whole',
        vegan: false,
    };
    setDoc(specialOfTheDay, docData);
}
