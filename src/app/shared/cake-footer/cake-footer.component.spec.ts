import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeFooterComponent } from './cake-footer.component';

describe('CakeFooterComponent', () => {
  let component: CakeFooterComponent;
  let fixture: ComponentFixture<CakeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
