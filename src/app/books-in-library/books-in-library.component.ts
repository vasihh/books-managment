import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-in-library',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './books-in-library.component.html',
  styleUrls: ['./books-in-library.component.css']
})



export class BooksInLibraryComponent {
  books$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const booksCollection = collection(this.firestore, 'books');
    this.books$ = collectionData(booksCollection, { idField: 'id' });
  }
}
