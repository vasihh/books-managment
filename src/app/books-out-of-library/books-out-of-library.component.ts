import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-out-of-library',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './books-out-of-library.component.html',
  styleUrls: ['./books-out-of-library.component.css']
})
export class BooksOutOfLibraryComponent {
  searchQuery: string = '';
  books: any[] = [];

  constructor(private http: HttpClient) {}

  searchBooks() {
    const query = this.searchQuery.trim().replace(/\s/g, '+');
    if (query) {
      this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .subscribe((response: any) => {
          this.books = response.items || [];
        });
    } else {
      alert('Please enter a search query.');
    }
  }
}
