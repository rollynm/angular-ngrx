import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  title = '';
  author = '';

  books: Book[] = [];

  ngOnInit() {
    let books = localStorage.getItem('books');
    this.books = books ? JSON.parse(books) : [];
  }
  addBook() {
    let book = {
      id: Date.now(),
      title: this.title,
      author: this.author,
    };
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.title = '';
    this.author = '';
  }
}
