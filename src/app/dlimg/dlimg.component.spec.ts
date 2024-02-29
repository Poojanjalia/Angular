import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLImgComponent } from './dlimg.component';

describe('DLImgComponent', () => {
  let component: DLImgComponent;
  let fixture: ComponentFixture<DLImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DLImgComponent]
    });
    fixture = TestBed.createComponent(DLImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
