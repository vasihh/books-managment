import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOutOfLibraryComponent } from './books-out-of-library.component';

describe('BooksOutOfLibraryComponent', () => {
  let component: BooksOutOfLibraryComponent;
  let fixture: ComponentFixture<BooksOutOfLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksOutOfLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksOutOfLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
