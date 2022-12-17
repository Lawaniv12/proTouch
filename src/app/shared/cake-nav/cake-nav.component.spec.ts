import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeNavComponent } from './cake-nav.component';

describe('CakeNavComponent', () => {
  let component: CakeNavComponent;
  let fixture: ComponentFixture<CakeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
