import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeHeaderComponent } from './cake-header.component';

describe('CakeHeaderComponent', () => {
  let component: CakeHeaderComponent;
  let fixture: ComponentFixture<CakeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
