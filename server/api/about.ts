import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, getApps, cert } from 'firebase-admin/app';

const apps = getApps();

if (!apps.length) {
    initializeApp({
        credential: cert('zateiniki-38f03-firebase-adminsdk-b5biu-2078af9bda.json')
    });
}

export default async (req, res) => {
    const db = getFirestore();
    const aboutSnap = await db.collection('about').get();
    const aboutData = aboutSnap.docs.map((dock) => {
        return {
            uuid: dock.id,
            ...dock.data()
        };
    });

    return aboutData;
};