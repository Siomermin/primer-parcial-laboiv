import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, Timestamp, addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc } from '@angular/fire/firestore';
import { Helado } from '../models/helado';
@Injectable({
  providedIn: 'root'
})
export class HeladoService {

  private helados: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.helados = collection(this.firestore, 'helados');
  }
  async getPizzasAsync() {
    const querySnapshot = await getDocs(query(this.helados));
    const result: Helado[] = [];

    querySnapshot.forEach(document => {
      const data = document.data();

      const repartidor = new Helado(
        document.id,
        data['tipo'],
        data['precio'],
        data['peso']);

      result.push(repartidor);
    });

    return result;
  }

  async altaHeladoAsync(objeto: Helado) {
    try {
      // Create a DocumentReference by combining the collection reference and document name
      const heladoDocRef = doc(this.helados, objeto.nombre);

      // Use setDoc with the DocumentReference to set the document
      await setDoc(heladoDocRef, {
        tipo: objeto.tipo,
        precio: objeto.precio,
        peso: objeto.peso
      });
    } catch (err: any) {
      throw err;
    }
  }

  async bajaHeladoAsync(objeto: Helado) {
    try {
      // Create a DocumentReference by combining the collection reference and document name
      const heladoDocRef = doc(this.helados, objeto.nombre);

      // Use deleteDoc with the DocumentReference to delete the document
      await deleteDoc(heladoDocRef);
    } catch (err: any) {
      throw err;
    }
  }

  async modificarHeladoAsync(objeto: Helado) {
    try {
      // Create a DocumentReference by combining the collection reference and document name
      const heladoDocRef = doc(this.helados, objeto.nombre);

      // Use updateDoc with the DocumentReference to update the document
      await updateDoc(heladoDocRef, {
        tipo: objeto.tipo,
        precio: objeto.precio,
        peso: objeto.peso
      });
    } catch (err: any) {
      throw err;
    }
  }

}
