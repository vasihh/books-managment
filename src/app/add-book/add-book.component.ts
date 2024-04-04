import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, MatSnackBarModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: any = { name: '', author: '', tags: '', quantity: 1 };
  selectedFile: File | null = null;
  storage = getStorage();
  errorMessage: string = '';

  constructor(private firestore: Firestore, private snackBar: MatSnackBar) {}

  onAddBook() {
    if (this.book.name == '') {
      this.snackBar.open('Book name is empty', 'Close', { duration: 5000 });
      return;
    }
    if (this.book.author.split(' ').length < 2) {
      this.snackBar.open('Author name must be at least two words', 'Close', { duration: 5000 });
      return;
    }
    if (!this.selectedFile) {
      this.snackBar.open('Please upload an image for the book', 'Close', { duration: 5000 });
      return;
    }
    if (this.book.quantity <= 0) {
      this.snackBar.open('Minimum quantity is 1', 'Close', { duration: 5000 });
      return;
    }

    const filePath = `books/${this.selectedFile.name}`;
    const storageRef = ref(this.storage, filePath);

    uploadBytes(storageRef, this.selectedFile).then(snapshot => {
      return getDownloadURL(snapshot.ref);
    }).then(downloadURL => {
      this.book.imageURL = downloadURL;
      const booksCollection = collection(this.firestore, 'books');
      return addDoc(booksCollection, this.book);
    }).then(docRef => {
      this.snackBar.open('Book added successfully!', 'Close', { duration: 5000 });
    }).catch(error => {
      console.error('Error adding document: ', error);
      this.snackBar.open('Error adding book!', 'Close', { duration: 5000 });
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
