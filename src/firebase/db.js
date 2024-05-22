import {
    getFirestore,
    getDocs,
    collection,
    query, where,
    doc, getDoc, addDoc
} from 'firebase/firestore'
import { app } from './config'

const db = getFirestore(app)

export const getItemsAll = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const items = []
    querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()})
    })
    return items
}

export const getItemsCat = async (cat) => {
    const q = query(collection(db, "items"), where("categoria", "==", cat))
    const querySnapshot = await getDocs(q)
    const items = []
    querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()})
    })
    return items
}

export const getItem = async (id) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)
    let item = null
    
    if (docSnap.exists()) {
        item = {id: docSnap.id, ...docSnap.data()}
    } else {
        console.log("No existe la planta indicada")
    }
    return item
}

export const createOrder = async (order) => {
    try {
      const docRef = await addDoc(collection(db, "orders"), order)
      return docRef.id
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}
