import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHotelComponent } from './contact-hotel.component';

describe('ContactHotelComponent', () => {
  let component: ContactHotelComponent;
  let fixture: ComponentFixture<ContactHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
