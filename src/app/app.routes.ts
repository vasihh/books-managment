import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksInLibraryComponent } from './books-in-library/books-in-library.component';
import { BooksOutOfLibraryComponent } from './books-out-of-library/books-out-of-library.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'books-in-library', component: BooksInLibraryComponent },
  { path: 'books-out-of-library', component: BooksOutOfLibraryComponent },
  { path: 'settings', component: SettingsComponent },
];
