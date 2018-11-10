import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatScreenComponent } from './salat-screen.component';

describe('SalatScreenComponent', () => {
  let component: SalatScreenComponent;
  let fixture: ComponentFixture<SalatScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalatScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
