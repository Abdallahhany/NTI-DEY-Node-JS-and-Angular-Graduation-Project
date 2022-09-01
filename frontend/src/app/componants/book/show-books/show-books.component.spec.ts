import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksComponent } from './show-books.component';

describe('ShowBooksComponent', () => {
  let component: ShowBooksComponent;
  let fixture: ComponentFixture<ShowBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
