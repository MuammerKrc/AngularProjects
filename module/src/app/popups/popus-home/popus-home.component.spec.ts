import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopusHomeComponent } from './popus-home.component';

describe('PopusHomeComponent', () => {
  let component: PopusHomeComponent;
  let fixture: ComponentFixture<PopusHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopusHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
